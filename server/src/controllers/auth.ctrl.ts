import { Context } from "koa";
import authService, { RegisterParams } from "../services/auth.svc";
import { errorHandler } from "../utils/error";
import { getKakaoUser } from "../utils/social/kakao";

export async function sendEmail(ctx: Context) {
  try {
    const { email } = <{ email: string }>ctx.request.body;

    await authService.sendCodeEmail(email);

    ctx.status = 204;
  } catch (err) {
    errorHandler(ctx, err);
  }
}

export async function verifyEmail(ctx: Context) {
  try {
    const { email, code } = <{ email: string; code: number }>ctx.request.body;

    const authResult = await authService.verifyEmail({ email, code });

    ctx.body = authResult;
  } catch (err) {
    errorHandler(ctx, err);
  }
}

export async function register(ctx: Context) {
  try {
    const body = ctx.request.body;

    const newUser = await authService.register(body as RegisterParams);

    ctx.status = 201;
    ctx.body = newUser;
  } catch (err) {
    errorHandler(ctx, err);
  }
}

export async function authByKakao(ctx: Context) {
  try {
    const { token } = <{ token: string }>ctx.request.body;

    const kakaoUser = await getKakaoUser(token);
    const { id, kakao_account } = kakaoUser;

    const socialId = id.toString();

    const authResult = await authService.loginBySocial({
      provider: "kakao",
      socialId,
    });

    if (authResult.type === "register") {
      ctx.body = {
        type: authResult.type,
        payload: { provider: "kakao", socialId, socialAccount: kakao_account },
      };
      return;
    }

    ctx.body = authResult;
    return;
  } catch (err) {
    errorHandler(ctx, err);
  }
}

export async function refresh(ctx: Context) {
  try {
    const { refreshToken } = <{ refreshToken: string }>ctx.request.body;

    const tokens = await authService.refresh(refreshToken);

    ctx.body = tokens;
  } catch (err) {
    errorHandler(ctx, err);
  }
}
