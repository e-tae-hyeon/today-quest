import { Context } from "koa";
import feedbackService from "../services/feedback.svc";
import { errorHandler } from "../utils/error";

export async function createFeedback(ctx: Context) {
  try {
    const { userId } = ctx.state.user;
    const { isLike, content } = <{ isLike: boolean; content?: string }>(
      ctx.request.body
    );

    await feedbackService.createFeedback({ userId, isLike, content });

    ctx.status = 204;
  } catch (err) {
    errorHandler(ctx, err);
  }
}
