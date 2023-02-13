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
