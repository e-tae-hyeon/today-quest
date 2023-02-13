import Router from "koa-router";
import auth from "./auth";
import me from "./me";
import quests from "./quests";

const api = new Router();

api.use("/auth", auth.routes());
api.use("/me", me.routes());
api.use("/quests", quests.routes());

export default api;
