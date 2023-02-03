import {View} from 'react-native';
import React from 'react';
import {Layout} from '@shared/components/base';
import {GuideText} from 'features/auth/components/module';

function InitProfileScreen() {
  return (
    <Layout>
      <View className="p-8">
        <GuideText title="가입을 축하드려요 :) 어떻게 불러드리면 될까요?" />
      </View>
    </Layout>
  );
}

export default InitProfileScreen;
