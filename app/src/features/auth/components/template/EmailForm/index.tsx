import {useNavigation} from '@react-navigation/native';
import {Button, FadeContainer} from '@shared/components/base';
import {sendEmail} from 'apis/auth';
import useAuthStore from 'features/auth/stores/useAuthStore';
import {RootStackNavigationProps} from 'navigations/RootStack/types';
import React, {useEffect, useState} from 'react';
import {KeyboardAvoidingView, View} from 'react-native';
import validator from 'validator';
import {TransparentInput} from '../../module';

function EmailForm() {
  const {email, setEmail} = useAuthStore();
  const [isSubmitAble, setIsSubmitAble] = useState(false);
  const {navigate} = useNavigation<RootStackNavigationProps>();

  useEffect(() => {
    setIsSubmitAble(validator.isEmail(email));
  }, [email]);

  const onSubmit = () => {
    sendEmail(email);
    navigate('verifyEmail');
  };

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={120}
      behavior="padding"
      className="flex-1">
      <View className="flex-1 top-[40%]">
        <TransparentInput
          placeholder="welcome@todayquest.com"
          value={email}
          onChangeText={setEmail}
          autoFocus
          keyboardType="email-address"
        />
      </View>
      {isSubmitAble && (
        <FadeContainer>
          <Button label="인증하기" onPress={onSubmit} />
        </FadeContainer>
      )}
    </KeyboardAvoidingView>
  );
}

export default EmailForm;
