import React from 'react';
import {Layout} from '@shared/components/base';
import {ActionsHeader} from '@shared/components/module';
import {View} from 'react-native';
import {GuideText} from 'features/auth/components/module';
import {EmailVerifyForm} from 'features/auth/components/template';

function VerifyEmailScreen() {
  return (
    <Layout>
      <ActionsHeader />
      <View className="flex-1 px-8 py-12">
        <GuideText
          title="이메일을 확인해주세요 :)"
          description="인증번호가 전송되었어요."
        />
        <EmailVerifyForm />
      </View>
    </Layout>
  );
}

export default VerifyEmailScreen;
