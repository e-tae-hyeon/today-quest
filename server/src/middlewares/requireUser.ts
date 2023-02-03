import { Context, Next } from "koa";
import AppError, { errorHandler } from "../utils/error";

export default function requireUser(ctx: Context, next: Next) {
  try {
    const { user } = ctx.state;

    if (!user) throw new AppError("Unauthorized");

    return next();
  } catch (err) {
    errorHandler(ctx, err);
  }
}
