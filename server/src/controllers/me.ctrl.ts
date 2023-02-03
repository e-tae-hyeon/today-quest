import { Context } from "koa";
import meService from "../services/me.svc";
import { errorHandler } from "../utils/error";

export async function updateProfile(ctx: Context) {
  try {
    const { userId } = ctx.state.user;
    const { nickname } = <{ nickname: string }>ctx.request.body;

    const profile = await meService.updateProfile({ userId, nickname });

    ctx.body = profile;
  } catch (err) {
    console.error(err);
    errorHandler(ctx, err);
  }
}
