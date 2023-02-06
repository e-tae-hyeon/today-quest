import Router from "koa-router";
import * as MeCtrl from "../../../controllers/me.ctrl";
import requireUser from "../../../middlewares/requireUser";
import myQuests from "./quests";

const me = new Router();

me.get("/", requireUser, MeCtrl.getMyProfile);
me.put("/profile", requireUser, MeCtrl.updateProfile);

me.use("/quests", myQuests.routes());

export default me;
