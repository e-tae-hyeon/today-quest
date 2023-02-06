import db from "../utils/db";
import { generateRandNum } from "../utils/generateRandNum";
import getRandomPick from "../utils/getRandomPick";
import checkDifferentDay from "../utils/checkDifferentDay";

class MyQuestsService {
  async getTodayQuest(userId: number) {
    const todayQuest = await db.todayQuest.findUnique({
      where: { userId },
      include: { quests: true },
    });

    if (!todayQuest) {
      const todayQuest = await this.createTodayQuest(userId);
      return {
        type: "new",
        payload: todayQuest,
      };
    }
    const isReset = await this.checkNewDay(todayQuest.createdAt);

    if (isReset) {
      return {
        type: "past",
        payload: todayQuest,
      };
    }

    return {
      type: "current",
      payload: todayQuest,
    };
  }

  private async createTodayQuest(userId: number) {
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

      const todayQuest = await db.todayQuest.create({
        data: {
          userId,
          quests: {
            createMany: {
              data: quests.map((quest) => ({ questId: quest.id })),
            },
          },
        },
        include: {
          quests: true,
        },
      });
      return todayQuest;
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

    const todayQuest = await db.todayQuest.create({
      data: {
        userId,
        quests: {
          createMany: { data: quests.map((quest) => ({ questId: quest.id })) },
        },
      },
      include: { quests: true },
    });

    return todayQuest;
  }

  private async checkNewDay(date: Date) {
    const RESET_HOUR = 5;
    const now = new Date();

    // 다른 날이고, 현재시각이 5시를 지날 때
    if (checkDifferentDay(now, date)) {
      return now.getHours() >= RESET_HOUR;
    }

    // 같은 날이고, today quest를 만든 시간이 5시 이전이고, 현재시각이 5시를 지날 때
    if (date.getHours() < RESET_HOUR && now.getHours() >= RESET_HOUR)
      return true;

    return false;
  }
}

const myQuestsService = new MyQuestsService();

export default myQuestsService;
