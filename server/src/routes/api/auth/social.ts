import Router from "koa-router";
import * as AuthCtrl from "../../../controllers/auth.ctrl";

const social = new Router();

social.post("/kakao", AuthCtrl.authByKakao);

export default social;
