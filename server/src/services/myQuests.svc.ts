import db from "../utils/db";
import AppError from "../utils/error";
import { generateRandNum } from "../utils/generateRandNum";
import getRandomPick from "../utils/getRandomPick";

class MyQuestsService {
  async getTodayQuests(userId: number) {
    const isResetToday = await this.checkResetToday();
    const isStatusDone = await this.checkIsStatusDone(userId);

    if (isResetToday) {
      if (isStatusDone) {
        const todayQuests = await this.createTodayQuests(userId);
        return {
          type: {
            isReset: true,
            status: "done",
          },
          data: todayQuests,
        };
      } else {
        const todayQuests = await db.questItem.findMany({
          where: { userId },
        });

        return {
          type: {
            isReset: true,
            status: "doing",
          },
          data: todayQuests,
        };
      }
    } else {
      if (isStatusDone) {
        return {
          type: {
            isReset: false,
            status: "done",
          },
          data: null,
        };
      } else {
        const todayQuests = await db.questItem.findMany({
          where: { userId },
        });

        return {
          type: {
            isReset: false,
            status: "doing",
          },
          data: todayQuests,
        };
      }
    }
  }

  private async createTodayQuests(userId: number) {
    const doneQuests = await db.finishedQuestItem.findMany({
      where: { userId },
    });

    const doneQuestIds = doneQuests.map((quest) => quest.questId);

    const yetQuestsCount = await db.quest.count({
      where: { id: { notIn: doneQuestIds } },
    });

    // 한번도 완료한 적 없는 퀘스트가 3개 이상일 때,
    // 한번도 완료한 적 없는 퀘스트 3개를 랜덤으로 뽑아, 오늘의 퀘스트로 지정.
    const QUEST_TAKE = 3;
    if (yetQuestsCount >= QUEST_TAKE) {
      const skip = Math.max(0, generateRandNum(yetQuestsCount) - QUEST_TAKE);
      const orderBy = getRandomPick(["id", "createdAt", "title", "userId"]);
      const orderDir = getRandomPick(["asc", "desc"]);

      const quests = await db.quest.findMany({
        skip,
        take: QUEST_TAKE,
        where: { id: { notIn: doneQuestIds } },
        orderBy: {
          [orderBy]: orderDir,
        },
      });

      const todayQuests = await db.questItem.createMany({
        data: quests.map((quest) => ({ questId: quest.id, userId })),
      });

      return todayQuests;
    }

    // 한번도 완료한 적 없는 퀘스트가 3개 미만일 때,
    // 한번도 완료한 적 없는 퀘스트 전부와,
    // 한번 이상 완료한 퀘스트 중에서 가장 적게한 퀘스트를 랜덤으로 뽑아, 오늘의 퀘스트로 지정.

    const yetQuests = await db.quest.findMany({
      where: { id: { notIn: doneQuestIds } },
    });

    const finishedTotalCount = doneQuests.reduce(
      (acc, quest) => (acc += quest.finishedCount),
      0
    );

    const probabilities = doneQuests.map((quest) => ({
      quest,
      probability: quest.finishedCount / finishedTotalCount,
    }));

    const critical = 0.5; // 랜덤으로 할 경우, 기준치보다 낮은 퀘스트가 없을 수도 있어, 0.5로 설정.
    const targetQuests = probabilities.filter(
      (quest) => quest.probability < critical
    );

    const quests = [...yetQuests];
    while (quests.length < 3) {
      const randomQuest = getRandomPick(targetQuests);
      if (!quests.includes(randomQuest)) quests.push(randomQuest);
    }

    const todayQuests = await db.questItem.createMany({
      data: quests.map((quest) => ({ questId: quest.id, userId })),
    });

    return todayQuests;
  }

  private async checkResetToday() {
    const nowHour = new Date().getHours();

    return nowHour > 4;
  }

  private async checkIsStatusDone(userId: number) {
    const user = await db.user.findUnique({
      where: { id: userId },
    });

    if (!user) throw new AppError("Unauthorized");

    return user.todayStatus === "done";
  }
}

const myQuestsService = new MyQuestsService();

export default myQuestsService;
