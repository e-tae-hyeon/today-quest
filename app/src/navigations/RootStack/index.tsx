import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnboardingFirstScreen from 'screens/onboarding/first';
import OnboardingSecondScreen from 'screens/onboarding/second';
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
    </Stack.Navigator>
  );
}

export default RootStack;
