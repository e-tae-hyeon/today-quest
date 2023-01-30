import {KeyboardAvoidingView, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Button, FadeContainer} from '@shared/components/base';
import useAuthStore from 'features/auth/stores/useAuthStore';
import useToast from '@shared/hooks/useToast';
import {getErrorMessage} from 'utils/errors';
import {verifyEmail} from 'apis/auth';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProps} from 'navigations/RootStack/types';
import {TransparentInput} from '../../module';

function EmailVerifyForm() {
  const {email, code, setCode} = useAuthStore();
  const [isSubmitAble, setIsSubmitAble] = useState(false);
  const {showToast, clearToast} = useToast();
  const {navigate} = useNavigation<RootStackNavigationProps>();

  useEffect(() => {
    setIsSubmitAble(code.length === 6);
  }, [code]);

  const login = () => {};

  const onSubmit = async () => {
    clearToast();
    try {
      const authResult = await verifyEmail({
        email,
        code: parseInt(code, 10),
      });
      if (authResult.type === 'login') login();
      if (authResult.type === 'register') navigate('policy');
    } catch (err) {
      showToast({type: 'error', title: getErrorMessage(err)});
    }
  };

  return (
    <KeyboardAvoidingView
      className="flex-1"
      behavior="padding"
      keyboardVerticalOffset={120}>
      <View className="flex-1 top-[40%]">
        <TransparentInput
          placeholder="인증번호 6자리 숫자"
          value={code}
          onChangeText={setCode}
          maxLength={6}
          autoFocus
          keyboardType="number-pad"
        />
      </View>
      {isSubmitAble && (
        <FadeContainer>
          <Button label="인증완료" onPress={onSubmit} />
        </FadeContainer>
      )}
    </KeyboardAvoidingView>
  );
}

export default EmailVerifyForm;
