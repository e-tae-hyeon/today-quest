import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamList = OnboardingGroupParamList &
  AuthGroupParamList & {
    mainTab: undefined;
    initProfile: undefined;
    todayResult: undefined;
    newQuest: undefined;
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

export type RootStackNavigationProps =
  NativeStackNavigationProp<RootStackParamList>;
