export type VerifyEmailResult = LoginPayload | RegisterPayload;

export type LoginPayload = {
  type: 'login';
  payload: {
    tokens: Tokens;
    user: User;
  };
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
