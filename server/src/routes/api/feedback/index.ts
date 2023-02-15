import Router from "koa-router";
import * as FeedbackCtrl from "../../../controllers/feedback.ctrl";
import requireUser from "../../../middlewares/requireUser";

const feedback = new Router();

feedback.post("/", requireUser, FeedbackCtrl.createFeedback);

export default feedback;
