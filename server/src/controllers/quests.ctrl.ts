import { Context } from "koa";
import questsService from "../services/quests.svc";
import { errorHandler } from "../utils/error";

export async function getQuests(ctx: Context) {
  try {
    const { cursor } = <{ cursor: string }>ctx.query;

    const quests = await questsService.getQuests(parseInt(cursor));

    ctx.body = quests;
  } catch (err) {
    errorHandler(ctx, err);
  }
}
export async function createQuest(ctx: Context) {
  try {
    const { userId } = ctx.state.user;
    const { title } = <{ title: string }>ctx.request.body;

    const quest = await questsService.createQuest({ userId, title });

    ctx.body = quest;
  } catch (err) {
    errorHandler(ctx, err);
  }
}
