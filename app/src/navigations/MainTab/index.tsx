import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from 'screens/home';
import {MainTabParamList} from './types';

const Tab = createBottomTabNavigator<MainTabParamList>();

function MainTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="home" component={HomeScreen} />
    </Tab.Navigator>
  );
}

export default MainTab;
