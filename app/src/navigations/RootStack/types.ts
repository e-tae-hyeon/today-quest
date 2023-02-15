import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamList = OnboardingGroupParamList &
  AuthGroupParamList &
  HomeGroupParamList &
  QuestGroupParamList &
  MyGroupParamList & {
    mainTab: undefined;
    initProfile: undefined;
  };

type OnboardingGroupParamList = {
  onboardingFrist: undefined;
  onboardingSecond: undefined;
};

type AuthGroupParamList = {
  auth: undefined;
  authEmail: undefined;
  verifyEmail: undefined;
  policy: undefined;
};

type HomeGroupParamList = {
  todayResult: undefined;
  newQuest: undefined;
};

type QuestGroupParamList = {
  questWrite: undefined;
};

type MyGroupParamList = {
  updateProfile: undefined;
  settings: undefined;
  feedback: undefined;
};

export type RootStackNavigationProps =
  NativeStackNavigationProp<RootStackParamList>;
