import Router from "koa-router";
import * as AuthCtrl from "../../../controllers/auth.ctrl";

const auth = new Router();

auth.post("/", AuthCtrl.sendEmail);
auth.post("/verify-email", AuthCtrl.verifyEmail);
auth.post("/register", AuthCtrl.register);

export default auth;
