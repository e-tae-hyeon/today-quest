import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamList = {
  onboardingFrist: undefined;
  onboardingSecond: undefined;
  auth: undefined;
  authEmail: undefined;
};

export type RootStackNavigationProps =
  NativeStackNavigationProp<RootStackParamList>;
