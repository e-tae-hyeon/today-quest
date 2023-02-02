import {KeyboardAvoidingView, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Button} from '@shared/components/base';
import useLocalAuth from 'features/auth/hooks/useLocalAuth';
import {ConditionalFadeContainer} from '@shared/components/module';
import {TransparentInput} from '../../module';

function EmailVerifyForm() {
  const {code, changeForm, verifyEmail} = useLocalAuth();
  const [isSubmitAble, setIsSubmitAble] = useState(false);

  useEffect(() => {
    setIsSubmitAble(code.length === 6);
  }, [code]);

  return (
    <KeyboardAvoidingView
      className="flex-1"
      behavior="padding"
      keyboardVerticalOffset={120}>
      <View className="flex-1 top-[40%]">
        <TransparentInput
          placeholder="인증번호 6자리 숫자"
          value={code}
          onChangeText={value => changeForm({name: 'code', value})}
          maxLength={6}
          autoFocus
          keyboardType="number-pad"
        />
      </View>
      <ConditionalFadeContainer isVisible={isSubmitAble}>
        <Button label="인증완료" onPress={verifyEmail} />
      </ConditionalFadeContainer>
    </KeyboardAvoidingView>
  );
}

export default EmailVerifyForm;
