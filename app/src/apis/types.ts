export type VerifyEmailResult = Login | Register;

export type SocialLoginResult = Login | SocialRegister;

export type Login = {
  type: 'login';
  payload: AuthPayload;
};

export type Register = {
  type: 'register';
  payload: {
    email: string;
  };
};

export type SocialRegister = {
  type: 'register';
  payload: SocialRegisterPayload;
};

export type User = {
  id: number;
  email: string;
};

export type Tokens = {
  accessToken: string;
  refreshToken: string;
};

export type RegisterParams = LocalRegisterParams | SocialRegisterParams;

export type LocalRegisterParams = {
  type: 'local';
  email: string;
};

export type SocialRegisterParams = {
  type: 'social';
  provider: SocialProvider;
  socialId: string;
  payload: {
    email?: string;
  };
};

export type AuthPayload = {
  tokens: Tokens;
  user: User;
};

export type SocialProvider = 'kakao';

export type SocialRegisterPayload = {
  provider: SocialProvider;
  socialId: string;
  socialAccount: {
    email?: string;
  };
};

export type UpdateProfileParams = {
  nickname: string;
};
