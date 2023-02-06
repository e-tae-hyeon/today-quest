import Router from "koa-router";
import * as MyQuestsCtrl from "../../../../controllers/myQuests.ctrl";
import requireUser from "../../../../middlewares/requireUser";

const myQuests = new Router();

myQuests.get("/", requireUser, MyQuestsCtrl.getMyTodayQuests);

export default myQuests;
