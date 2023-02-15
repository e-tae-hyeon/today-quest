import db from "../utils/db";

class QuestsService {
  async getQuests(cursor?: number) {
    const quests = await db.quest.findMany({
      take: 10,
      skip: cursor ? 1 : 0,
      orderBy: { createdAt: "desc" },
      cursor: cursor ? { id: cursor } : undefined,
    });

    const totalQuestCount = await db.quest.count();

    const endCursor = quests[quests.length - 1]?.id ?? null;
    const hasNextPage = endCursor
      ? (await db.quest.count({
          where: { id: { lt: endCursor } },
          orderBy: { id: "desc" },
        })) > 0
      : false;

    return {
      data: quests,
      pageInfo: { endCursor, hasNextPage },
      totalQuestCount,
    };
  }

  async createQuest(params: CreateQuestParams) {
    const { userId, title } = params;

    const quest = await db.quest.create({
      data: {
        userId,
        title,
      },
    });

    return quest;
  }
}

const questsService = new QuestsService();

export default questsService;

type CreateQuestParams = {
  userId: number;
  title: string;
};
