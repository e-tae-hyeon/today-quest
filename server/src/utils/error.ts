import { Context } from "koa";

const errorsMap = {
  Unknown: {
    code: 0,
    statusCode: 500,
    message: "Unknown Error",
  },
  NotFound: {
    code: 1,
    statusCode: 404,
    message: "Not Found",
  },
  Invalid: {
    code: 2,
    statusCode: 401,
    message: "Invalid",
  },
  Expired: {
    code: 3,
    statusCode: 410,
    message: "Expired",
  },
};

type ErrorName = keyof typeof errorsMap;

export default class AppError extends Error {
  constructor(name: ErrorName) {
    super();

    const { code, statusCode, message } = errorsMap[name];
    this.code = code;
    this.statusCode = statusCode;
    this.message = message;
  }

  code: number;
  message: string;
  statusCode: number;
}

export function errorHandler(ctx: Context, err: AppError) {
  const code = err.code ?? errorsMap.Unknown.code;
  const status = err.statusCode ?? errorsMap.Unknown.statusCode;
  const message = err.message ?? errorsMap.Unknown.message;

  ctx.status = status;
  ctx.body = {
    code,
    message,
  };
}
