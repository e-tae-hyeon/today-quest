import db from "../utils/db";

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
