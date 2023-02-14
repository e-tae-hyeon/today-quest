import { Context } from "koa";
import meService from "../services/me.svc";
import { errorHandler } from "../utils/error";

export async function getMe(ctx: Context) {
  try {
    const { userId } = ctx.state.user;

    const me = await meService.getUser(userId);

    ctx.body = me;
  } catch (err) {
    errorHandler(ctx, err);
  }
}

export async function updateProfile(ctx: Context) {
  try {
    const { userId } = ctx.state.user;
    const { nickname } = <{ nickname: string }>ctx.request.body;

    const profile = await meService.updateProfile({ userId, nickname });

    ctx.body = profile;
  } catch (err) {
    errorHandler(ctx, err);
  }
}
