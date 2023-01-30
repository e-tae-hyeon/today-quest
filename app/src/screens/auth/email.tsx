import React from 'react';
import {Layout} from '@shared/components/base';
import {ActionsHeader} from '@shared/components/module';
import {View} from 'react-native';
import {GuideText} from 'features/auth/components/module';
import {EmailForm} from 'features/auth/components/template';

function AuthEmailScreen() {
  return (
    <Layout>
      <ActionsHeader />
      <View className="flex-1 px-4 py-12">
        <GuideText
          title="이메일을 입력해주세요 :)"
          description="인증번호를 전달받을 메일 주소가 필요해요"
        />
        <EmailForm />
      </View>
    </Layout>
  );
}

export default AuthEmailScreen;
