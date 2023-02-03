import Router from "koa-router";
import * as MeCtrl from "../../../controllers/me.ctrl";
import requireUser from "../../../middlewares/requireUser";

const me = new Router();

me.put("/profile", requireUser, MeCtrl.updateProfile);

export default me;
