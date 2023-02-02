import {View} from 'react-native';
import React from 'react';
import {Layout} from '@shared/components/base';
import {ActionsHeader} from '@shared/components/module';
import {GuideText} from 'features/auth/components/module';
import {PolicyAgreement} from 'features/auth/components/template';

function PolicyScreen() {
  return (
    <Layout>
      <ActionsHeader />
      <View className="flex-1 p-4 py-12">
        <GuideText title="약관에 동의해주세요 :)" />
        <PolicyAgreement />
      </View>
    </Layout>
  );
}

export default PolicyScreen;
