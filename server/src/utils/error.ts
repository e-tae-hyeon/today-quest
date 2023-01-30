import { Context } from "koa";

const errorsMap = {
  NotFound: {
    statusCode: 404,
    message: "Not Found",
  },
  Invalid: {
    statusCode: 401,
    message: "Invalid",
  },
  Expired: {
    statusCode: 410,
    message: "Expired",
  },
};

type ErrorName = keyof typeof errorsMap;

export default class AppError extends Error {
  constructor(name: ErrorName) {
    super();

    const { message, statusCode } = errorsMap[name];
    this.message = message;
    this.statusCode = statusCode;
  }

  message: string;
  statusCode: number;
}

export function errorHandler(ctx: Context, err: AppError) {
  const message = err.message ?? "Internal server error";
  const status = err.statusCode ?? 500;

  ctx.status = status;
  ctx.body = message;
}
