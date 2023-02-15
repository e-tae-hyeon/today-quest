import { Provider, Token } from "@prisma/client";
import db from "../utils/db";
import AppError from "../utils/error";
import { generateRandSixDigit } from "../utils/generateRandNum";
import { sendMail } from "../utils/mail";
import {
  generateToken,
  RefreshTokenPayload,
  validateToken,
} from "../utils/token";

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
      include: { profile: true },
    });
    if (exists) {
      const tokens = await this.generateTokens(exists.id);

      return {
        type: "login",
        payload: { profile: exists.profile, tokens },
      };
    }

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
          profile: { create: {} },
        },
        include: {
          profile: true,
        },
      });
      const tokens = await this.generateTokens(newUser.id);
      return { tokens, profile: newUser.profile };
    }

    if (registerType === "social") {
      const { provider, socialId, payload } = params;

      const newUser = await db.user.create({
        data: {
          SocialAccount: {
            create: { provider, socialId, email: payload?.email },
          },
          profile: { create: {} },
        },
        include: {
          profile: true,
        },
      });
      const tokens = await this.generateTokens(newUser.id);
      return { tokens, profile: newUser.profile };
    }

    throw new AppError("BadRequest");
  }

  async loginBySocial({
    provider,
    socialId,
  }: {
    provider: Provider;
    socialId: string;
  }) {
    const socialAccount = await db.socialAccount.findUnique({
      where: {
        provider_socialId: { provider, socialId },
      },
      include: { user: { include: { profile: true } } },
    });

    if (!socialAccount) return { type: "register" };

    const user = socialAccount.user;
    const tokens = await this.generateTokens(user.id);

    return { type: "login", payload: { tokens, profile: user.profile } };
  }

  async refresh(token: string) {
    const decoded = await validateToken<RefreshTokenPayload>(token);

    const tokenItem = await db.token.findUnique({
      where: { id: decoded.tokenId },
    });

    if (!tokenItem) throw new AppError("NotFound");
    if (tokenItem.blocked) throw new AppError("Forbidden");
    if (tokenItem.rotationCounter !== decoded.rotationCounter) {
      await db.token.update({
        where: {
          id: tokenItem.id,
        },
        data: {
          blocked: true,
        },
      });
      throw new AppError("Forbidden");
    }

    tokenItem.rotationCounter += 1;

    await db.token.update({
      where: {
        id: tokenItem.id,
      },
      data: {
        rotationCounter: tokenItem.rotationCounter,
      },
    });

    const tokens = await this.generateTokens(tokenItem.userId, tokenItem);

    return tokens;
  }

  async removeUser(userId: number) {
    await db.user.delete({
      where: { id: userId },
    });
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

    const code = generateRandSixDigit();

    await db.authCode.create({
      data: {
        email,
        code,
      },
    });

    return code;
  }

  private async generateTokens(userId: number, tokenItem: Token | null = null) {
    const token = tokenItem ?? (await this.createTokenItem(userId));

    const accessToken = await generateToken({
      type: "access_token",
      userId,
    });
    const refreshToken = await generateToken({
      type: "refresh_token",
      tokenId: token.id,
      rotationCounter: token.rotationCounter,
    });

    return { accessToken, refreshToken };
  }

  private async createTokenItem(userId: number) {
    const tokenItem = await db.token.create({
      data: { userId },
    });

    return tokenItem;
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
  payload?: {
    email: string | undefined;
  };
};
