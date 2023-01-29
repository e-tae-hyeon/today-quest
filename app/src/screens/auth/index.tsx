import React from 'react';
import {Layout} from '@shared/components/base';
import {AuthActions, MainDoor} from 'features/auth/components/template';
import {View} from 'react-native';

function AuthScreen() {
  return (
    <Layout>
      <View className="flex-1 p-4">
        <MainDoor />
        <AuthActions />
      </View>
    </Layout>
  );
}

export default AuthScreen;
