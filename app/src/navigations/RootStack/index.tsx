import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnboardingFirstScreen from 'screens/onboarding/first';
import OnboardingSecondScreen from 'screens/onboarding/second';
import AuthScreen from 'screens/auth';
import AuthEmailScreen from 'screens/auth/email';
import VerifyEmailScreen from 'screens/auth/verify-email';
import PolicyScreen from 'screens/auth/policy';
import MainTab from 'navigations/MainTab';
import InitProfileScreen from 'screens/auth/init-profile';
import useSystemStore from '@shared/stores/useSystemStore';
import TodayResultScreen from 'screens/home/today-result';
import NewQuestScreen from 'screens/home/new-quest';
import QuestWriteScreen from 'screens/quest/write';
import UpdateProfileScreen from 'screens/my/update-profile';
import useProfileStore from 'features/auth/stores/useProfileStore';
import SettingsScreen from 'screens/my/settings';
import FeedBackScreen from 'screens/my/feedback';
import {RootStackParamList} from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootStack() {
  const profile = useProfileStore(store => store.profile);
  const isFirstLaunched = useSystemStore(store => store.isFirstLaunched);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {isFirstLaunched && (
        // onborading
        <Stack.Group>
          <Stack.Screen
            name="onboardingFrist"
            component={OnboardingFirstScreen}
          />
          <Stack.Screen
            name="onboardingSecond"
            component={OnboardingSecondScreen}
          />
        </Stack.Group>
      )}
      {!profile && (
        // auth
        <Stack.Group>
          <Stack.Screen name="auth" component={AuthScreen} />
          <Stack.Screen name="authEmail" component={AuthEmailScreen} />
          <Stack.Screen name="verifyEmail" component={VerifyEmailScreen} />
          <Stack.Screen name="policy" component={PolicyScreen} />
        </Stack.Group>
      )}
      {/* base */}
      <Stack.Group>
        <Stack.Screen name="mainTab" component={MainTab} />
        <Stack.Screen name="initProfile" component={InitProfileScreen} />
      </Stack.Group>
      {/* home */}
      <Stack.Group>
        <Stack.Screen name="todayResult" component={TodayResultScreen} />
        <Stack.Screen name="newQuest" component={NewQuestScreen} />
      </Stack.Group>
      {/* quest */}
      <Stack.Group>
        <Stack.Screen name="questWrite" component={QuestWriteScreen} />
      </Stack.Group>
      {/* my */}
      <Stack.Group>
        <Stack.Screen name="updateProfile" component={UpdateProfileScreen} />
        <Stack.Screen name="settings" component={SettingsScreen} />
        <Stack.Screen name="feedback" component={FeedBackScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default RootStack;
