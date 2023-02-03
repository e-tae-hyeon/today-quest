import {View} from 'react-native';
import React from 'react';
import {Layout} from '@shared/components/base';
import {GuideText} from 'features/auth/components/module';
import {InitProfileForm} from 'features/auth/components/template';

function InitProfileScreen() {
  return (
    <Layout>
      <View className="flex-1 px-8 pt-24 pb-12">
        <GuideText
          title={`가입을 축하드려요 :) ${'\n'}어떻게 불러드리면 될까요?`}
        />
        <InitProfileForm />
      </View>
    </Layout>
  );
}

export default InitProfileScreen;
