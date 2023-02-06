import { Context } from "koa";
import myQuestsService from "../services/myQuests.svc";
import { errorHandler } from "../utils/error";

export async function getMyTodayQuests(ctx: Context) {
  try {
    const { userId } = ctx.state.user;

    const todayQuest = await myQuestsService.getTodayQuest(userId);

    ctx.body = todayQuest;
  } catch (err) {
    errorHandler(ctx, err);
  }
}
