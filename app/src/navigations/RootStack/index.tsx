import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnboardingFirstScreen from 'screens/onboarding/first';
import OnboardingSecondScreen from 'screens/onboarding/second';
import AuthScreen from 'screens/auth';
import AuthLocalScreen from 'screens/auth/local';
import {RootStackParamList} from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
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
      <Stack.Group>
        <Stack.Screen name="auth" component={AuthScreen} />
        <Stack.Screen name="authLocal" component={AuthLocalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default RootStack;
