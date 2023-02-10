import { Context } from "koa";
import myQuestsService from "../services/myQuests.svc";
import { errorHandler } from "../utils/error";

export async function getMyTodayQuest(ctx: Context) {
  try {
    const { userId } = ctx.state.user;

    const todayQuest = await myQuestsService.getTodayQuest(userId);

    ctx.body = todayQuest;
  } catch (err) {
    errorHandler(ctx, err);
  }
}

export async function doneQuest(ctx: Context) {
  try {
    const { userId } = ctx.state.user;
    const { id } = <{ id: string }>ctx.params;

    await myQuestsService.doneQuest(userId, parseInt(id));
    ctx.status = 204;
  } catch (err) {
    errorHandler(ctx, err);
  }
}

export async function undoneQuest(ctx: Context) {
  try {
    const { userId } = ctx.state.user;
    const { id } = <{ id: string }>ctx.params;

    await myQuestsService.undoneQuest(userId, parseInt(id));
    ctx.status = 204;
  } catch (err) {
    errorHandler(ctx, err);
  }
}
