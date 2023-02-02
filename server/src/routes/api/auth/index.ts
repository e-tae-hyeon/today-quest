import Router from "koa-router";
import * as AuthCtrl from "../../../controllers/auth.ctrl";
import social from "./social";

const auth = new Router();

auth.post("/", AuthCtrl.sendEmail);
auth.post("/verify-email", AuthCtrl.verifyEmail);
auth.post("/register", AuthCtrl.register);

auth.use("/social", social.routes());

export default auth;
