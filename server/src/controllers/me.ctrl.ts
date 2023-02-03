import { Context } from "koa";
import meService from "../services/me.svc";
import { errorHandler } from "../utils/error";

export async function getMyProfile(ctx: Context) {
  try {
    const { userId } = ctx.state.user;

    const myProfile = await meService.getProfile(userId);

    ctx.body = myProfile;
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
