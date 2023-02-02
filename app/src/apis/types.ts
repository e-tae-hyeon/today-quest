export type VerifyEmailResult = LoginPayload | RegisterPayload;

export type LoginPayload = {
  type: 'login';
  payload: AuthPayload;
};

export type RegisterPayload = {
  type: 'register';
  payload: {
    email: string;
  };
};

export type User = {
  id: number;
  email: string;
};

export type Tokens = {
  accessToken: string;
  refreshToken: string;
};

export type RegisterParams = LocalRegisterParams;

export type LocalRegisterParams = {
  type: 'local';
  email: string;
};

export type AuthPayload = {
  tokens: Tokens;
  user: User;
};
