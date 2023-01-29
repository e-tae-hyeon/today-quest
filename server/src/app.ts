import Koa from "koa";
import dotenv from "dotenv";
import Router from "koa-router";
import bodyParser from "koa-bodyparser";
import KoaLogger from "koa-logger";
import cors from "@koa/cors";
import { Context } from "vm";
import routes from "./routes";

dotenv.config();
const app = new Koa();
const router = new Router();

// app.use(
//   cors({
//     origin: (ctx: Context): any => {
//       const whiteList = [DOMAIN];
//       if (whiteList.indexOf(ctx.request.header.origin as string) !== -1) {
//         return ctx.request.header.origin;
//       }
//       return whiteList[0];
//     },
//     credentials: true,
//   })
// );

app.use(bodyParser());
app.use(KoaLogger());

router.use("/", routes.routes());
app.use(router.routes()).use(router.allowedMethods());

export default app;
