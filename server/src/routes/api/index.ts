import Router from "koa-router";
import auth from "./auth";
import me from "./me";

const api = new Router();

api.use("/auth", auth.routes());
api.use("/me", me.routes());

export default api;
