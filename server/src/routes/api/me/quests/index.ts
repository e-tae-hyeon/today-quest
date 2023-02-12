import Router from "koa-router";
import * as MyQuestsCtrl from "../../../../controllers/myQuests.ctrl";
import requireUser from "../../../../middlewares/requireUser";

const myQuests = new Router();

myQuests.get("/", requireUser, MyQuestsCtrl.getMyTodayQuest);
myQuests.get("/new", requireUser, MyQuestsCtrl.getNewMyTodayQuest);
myQuests.get("/complete", requireUser, MyQuestsCtrl.completeToday);
myQuests.post("/:id", requireUser, MyQuestsCtrl.doneQuest);
myQuests.delete("/:id", requireUser, MyQuestsCtrl.undoneQuest);

export default myQuests;
