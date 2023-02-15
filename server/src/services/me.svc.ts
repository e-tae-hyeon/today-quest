import db from "../utils/db";
import AppError from "../utils/error";

class MeService {
  async getUser(userId: number) {
    const user = await db.user.findUnique({
      where: { id: userId },
      include: {
        profile: true,
      },
    });

    return user;
  }

  async getProfile(userId: number) {
    const profile = await db.profile.findUnique({
      where: { userId },
    });

    if (!profile) throw new AppError("NotFound");

    const finishedQuestCount = await db.finishedQuestItem.count({
      where: { userId },
    });

    return { profile, finishedQuestCount };
  }

  async updateProfile(params: UpdateProfileParams) {
    const { userId, nickname } = params;
    const profile = await db.profile.update({
      where: { userId },
      data: { nickname },
    });

    return profile;
  }
}

const meService = new MeService();

export default meService;

type UpdateProfileParams = {
  userId: number;
  nickname: string;
};
