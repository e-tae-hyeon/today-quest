import db from "../utils/db";
import { generateRandNum } from "../utils/generateRandNum";
import getRandomPick from "../utils/getRandomPick";
import { checkDifferentDay, checkYesterday } from "../utils/checkDifferentDay";
import AppError from "../utils/error";
import getFormatDate from "../utils/getFormatDate";

class MyQuestsService {
  async getTodayQuest(userId: number) {
    const todayQuest = await db.todayQuest.findUnique({
      where: { userId },
      include: { quests: { include: { quest: true } } },
    });

    if (!todayQuest) {
      const todayQuest = await this.createTodayQuest(userId);
      return {
        type: "new",
        payload: todayQuest,
        date: getFormatDate(todayQuest[0].createdAt),
      };
    }

    const isReset = await this.checkNewDay(todayQuest.createdAt);

    if (isReset) {
      return {
        type: `past/${todayQuest.status}`,
        payload: todayQuest.quests,
        date: getFormatDate(todayQuest.createdAt),
      };
    }

    return {
      type: todayQuest.status,
      payload: todayQuest.quests,
      date: getFormatDate(todayQuest.createdAt),
    };
  }

  async getNewTodayQuest(userId: number) {
    const exists = await db.todayQuest.findUnique({
      where: { userId },
    });

    if (exists) {
      await db.todayQuest.delete({
        where: { userId },
      });
    }

    const newTodayQuest = await this.createTodayQuest(userId);

    return {
      type: "new",
      payload: newTodayQuest,
      date: getFormatDate(newTodayQuest[0].createdAt),
    };
  }

  async doneQuest(userId: number, itemId: number) {
    const questItem = await db.questItem.findUnique({
      where: { id: itemId },
    });

    if (!questItem) throw new AppError("NotFound");
    if (questItem.userId !== userId) throw new AppError("Forbidden");

    await db.questItem.update({
      where: { id: questItem.id },
      data: { status: "done" },
    });
  }

  async undoneQuest(userId: number, itemId: number) {
    const questItem = await db.questItem.findUnique({
      where: { id: itemId },
    });

    if (!questItem) throw new AppError("NotFound");
    if (questItem.userId !== userId) throw new AppError("Forbidden");

    await db.questItem.update({
      where: { id: questItem.id },
      data: { status: "doing" },
    });
  }

  async completeToday(userId: number) {
    const todayQuest = await db.todayQuest.findUnique({
      where: { userId },
      include: { quests: true },
    });

    if (!todayQuest) throw new AppError("BadRequest");

    todayQuest.quests.forEach((item) => this.finishQuest(userId, item.questId));

    await db.todayQuest.update({
      where: { userId },
      data: { status: "done" },
    });
  }

  private async createTodayQuest(userId: number) {
    const QUEST_TAKE = 3;
    const questCount = await db.quest.count();

    if (questCount < QUEST_TAKE) throw new AppError("Unknown");

    const doneQuests = await db.finishedQuestItem.findMany({
      where: { userId },
      include: {
        quest: true,
      },
    });

    const doneQuestIds = doneQuests.map((quest) => quest.questId);

    const yetQuestsCount = await db.quest.count({
      where: { id: { notIn: doneQuestIds } },
    });

    // ????????? ????????? ??? ?????? ???????????? 3??? ????????? ???,
    // ????????? ????????? ??? ?????? ????????? 3?????? ???????????? ??????, ????????? ???????????? ??????.
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
              data: quests.map((quest) => ({ questId: quest.id, userId })),
            },
          },
        },
        include: { quests: { include: { quest: true } } },
      });
      return todayQuest.quests;
    }

    // ????????? ????????? ??? ?????? ???????????? 3??? ????????? ???,
    // ????????? ????????? ??? ?????? ????????? ?????????,
    // ?????? ?????? ????????? ????????? ????????? ?????? ????????? ???????????? ???????????? ??????, ????????? ???????????? ??????.

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

    const critical = 0.5; // ???????????? ??? ??????, ??????????????? ?????? ???????????? ?????? ?????? ??????, 0.5??? ??????.
    const targetQuests = probabilities.filter(
      (quest) => quest.probability < critical
    );

    const quests = [...yetQuests];
    while (quests.length < 3) {
      const randomQuest = getRandomPick(targetQuests);
      if (!quests.includes(randomQuest.quest.quest))
        quests.push(randomQuest.quest.quest);
    }

    const todayQuest = await db.todayQuest.create({
      data: {
        userId,
        quests: {
          createMany: {
            data: quests.map((quest) => ({ questId: quest.id, userId })),
          },
        },
      },
      include: { quests: { include: { quest: true } } },
    });

    return todayQuest.quests;
  }

  private async checkNewDay(date: Date) {
    const RESET_HOUR = 5;
    const now = new Date();

    // ????????????, ??????????????? 5?????? ?????? ???
    if (checkYesterday({ today: now, target: date }))
      return now.getHours() >= RESET_HOUR;

    // ????????? ?????? ?????? ?????? ???,
    if (checkDifferentDay(now, date)) return true;

    // ?????? ?????????, today quest??? ?????? ????????? 5??? ????????????, ??????????????? 5?????? ?????? ???
    if (date.getHours() < RESET_HOUR && now.getHours() >= RESET_HOUR)
      return true;

    return false;
  }

  private async finishQuest(userId: number, questId: number) {
    await db.finishedQuestItem.upsert({
      where: { questId_userId: { questId, userId } },
      update: {
        finishedCount: { increment: 1 },
      },
      create: {
        userId,
        questId,
      },
    });
  }
}

const myQuestsService = new MyQuestsService();

export default myQuestsService;
