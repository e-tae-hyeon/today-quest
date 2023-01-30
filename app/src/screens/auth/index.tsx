import React from 'react';
import {Layout} from '@shared/components/base';
import {AuthActions, Greeting} from 'features/auth/components/template';
import {View} from 'react-native';

function AuthScreen() {
  return (
    <Layout>
      <View className="flex-1 p-4">
        <Greeting />
        <AuthActions />
      </View>
    </Layout>
  );
}

export default AuthScreen;
