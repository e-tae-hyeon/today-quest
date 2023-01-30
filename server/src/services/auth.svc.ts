import { Provider } from "@prisma/client";
import db from "../utils/db";
import AppError from "../utils/error";
import generateRandNum from "../utils/generateRandNum";
import { sendMail } from "../utils/mail";

class AuthService {
  async sendCodeEmail(email: string) {
    const verifyCode = await this.createAuthCode(email);

    const mail = await sendMail({ email, verifyCode });

    return mail;
  }

  async verifyEmail({ email, code }: { email: string; code: number }) {
    await this.validateAuthCode({ email, code });

    const exists = await db.user.findUnique({
      where: { email },
    });
    if (exists)
      return {
        type: "login",
        payload: exists,
      };

    return {
      type: "register",
      payload: { email },
    };
  }

  async register(params: RegisterParams) {
    const registerType = params.type;

    if (registerType === "local") {
      const { email } = params;
      const newUser = await db.user.create({
        data: {
          email,
        },
      });

      return newUser;
    }

    if (registerType === "social") {
      const { provider, socialId } = params;

      /** @todo 소셜로그인 추가 */
    }
  }

  private async validateAuthCode({
    email,
    code,
  }: {
    email: string;
    code: number;
  }) {
    const authCodeItem = await db.authCode.findUnique({
      where: { email },
    });

    if (!authCodeItem) throw new AppError("NotFound");
    if (authCodeItem.code !== code) throw new AppError("Invalid");

    const gapCreatedFromNow = Date.now() - authCodeItem.createdAt.getTime();
    if (gapCreatedFromNow > 1000 * 60 * 10) throw new AppError("Expired");

    await db.authCode.delete({ where: { id: authCodeItem.id } });

    return true;
  }

  private async createAuthCode(email: string) {
    const exists = await db.authCode.findUnique({
      where: { email },
    });
    if (exists) await db.authCode.delete({ where: { id: exists.id } });

    const code = generateRandNum();

    await db.authCode.create({
      data: {
        email,
        code,
      },
    });

    return code;
  }
}

const authService = new AuthService();

export default authService;

export type RegisterParams = LocalRegisterParams | SocialRegisterParams;

type LocalRegisterParams = {
  type: "local";
  email: string;
};

type SocialRegisterParams = {
  type: "social";
  provider: Provider;
  socialId: string;
};
