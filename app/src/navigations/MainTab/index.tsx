import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import colors from '@shared/common/styles/colors';
import {fontFamily} from '@shared/common/styles/typo';
import {SvgIcon} from '@shared/components/base';
import React from 'react';
import HomeScreen from 'screens/home';
import MyScreen from 'screens/my';
import QuestScreen from 'screens/quest';
import {MainTabParamList} from './types';

const Tab = createBottomTabNavigator<MainTabParamList>();

function MainTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.black,
        tabBarInactiveTintColor: colors.gray[200],
        tabBarLabelStyle: {fontFamily: fontFamily.default, fontSize: 12},
        tabBarStyle: {height: 100, paddingTop: 8},
        tabBarItemStyle: {paddingBottom: 8},
      }}>
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarLabel: '홈',
          tabBarIcon: ({color, size}) => (
            <SvgIcon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="quest"
        component={QuestScreen}
        options={{
          tabBarLabel: '퀘스트',
          tabBarIcon: ({color, size}) => (
            <SvgIcon name="quest" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="my"
        component={MyScreen}
        options={{
          tabBarLabel: 'my',
          tabBarIcon: ({color, size}) => (
            <SvgIcon name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MainTab;
