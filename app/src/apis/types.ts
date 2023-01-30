export type VerifyEmailResult = LoginPayload | RegisterPayload;

type LoginPayload = {
  type: 'login';
  payload: User;
};

type RegisterPayload = {
  type: 'register';
  payload: {
    email: string;
  };
};

export type User = {
  id: number;
  email: string;
};
