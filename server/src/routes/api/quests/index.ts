import Router from "koa-router";
import * as QuestsCtrl from "../../../controllers/quests.ctrl";

const quests = new Router();

quests.get("/", QuestsCtrl.getQuests);

export default quests;
