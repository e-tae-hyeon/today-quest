import Router from "koa-router";
import auth from "./auth";
import feedback from "./feedback";
import me from "./me";
import quests from "./quests";

const api = new Router();

api.use("/auth", auth.routes());
api.use("/me", me.routes());
api.use("/quests", quests.routes());
api.use("/feedback", feedback.routes());

export default api;
