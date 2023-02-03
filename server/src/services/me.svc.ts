import db from "../utils/db";

class MeService {
  async getProfile(userId: number) {
    const profile = await db.profile.findUnique({
      where: { userId },
    });

    return profile;
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
