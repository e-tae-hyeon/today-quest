import Router from "koa-router";
import * as QuestsCtrl from "../../../controllers/quests.ctrl";
import requireUser from "../../../middlewares/requireUser";

const quests = new Router();

quests.get("/", QuestsCtrl.getQuests);
quests.post("/", requireUser, QuestsCtrl.createQuest);

export default quests;
