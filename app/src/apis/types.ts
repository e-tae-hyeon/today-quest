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

export type Profile = {
  userId: number;
  nickname: string;
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
  profile: Profile;
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

export type Quest = {
  id: number;
  title: string;
};

export type TodayQuest = {
  type: TodayQuestType;
  payload: QuestItem[];
  date: string;
};

export type QuestItem = {
  id: number;
  quest: Quest;
  status: QuestStatus;
};

export type QuestStatus = 'doing' | 'done';

export type TodayQuestType =
  | 'past/doing'
  | 'past/done'
  | 'doing'
  | 'done'
  | 'new';

export type GetQuestListResult = {
  data: Quest[];
  pageInfo: PageInfo;
  totalQuestCount: number;
};

export type PageInfo = {
  endCursor: number | null;
  hasNextPage: boolean;
};

export type CreateQuestParams = {
  title: string;
};

export type GetMeResult = {
  profile: Profile;
  finishedQuestCount: number;
};
