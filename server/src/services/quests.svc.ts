import db from "../utils/db";

class QuestsService {
  async getQuests(cursor?: number) {
    const quests = await db.quest.findMany({
      take: 10,
      skip: cursor ? 1 : 0,
      orderBy: { createdAt: "desc" },
      cursor: cursor ? { id: cursor } : undefined,
    });

    const endCursor = quests[quests.length - 1]?.id ?? null;
    const hasNextPage = endCursor
      ? (await db.quest.count({
          where: { id: { lt: endCursor } },
          orderBy: { id: "desc" },
        })) > 0
      : false;

    return { data: quests, pageInfo: { endCursor, hasNextPage } };
  }
}

const questsService = new QuestsService();

export default questsService;
