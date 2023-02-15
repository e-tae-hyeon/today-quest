import db from "../utils/db";

class FeedbackService {
  async createFeedback(params: CreateFeedbackParams) {
    const { userId, isLike, content } = params;

    await db.feedback.create({
      data: { userId, isLike, content },
    });
  }
}

const feedbackService = new FeedbackService();

export default feedbackService;

type CreateFeedbackParams = {
  userId: number;
  isLike: boolean;
  content?: string;
};
