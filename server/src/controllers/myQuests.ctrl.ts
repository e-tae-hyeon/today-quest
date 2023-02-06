import { Context } from "koa";
import myQuestsService from "../services/myQuests.svc";
import { errorHandler } from "../utils/error";

export async function getMyTodayQuests(ctx: Context) {
  try {
    const { userId } = ctx.state.user;

    const todayQuests = await myQuestsService.getTodayQuests(userId);

    ctx.body = todayQuests;
  } catch (err) {
    errorHandler(ctx, err);
  }
}
