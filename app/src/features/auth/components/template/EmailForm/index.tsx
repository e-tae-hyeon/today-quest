import {Button} from '@shared/components/base';
import {ConditionalFadeContainer} from '@shared/components/module';
import useLocalAuth from 'features/auth/hooks/useLocalAuth';
import React, {useEffect, useState} from 'react';
import {KeyboardAvoidingView, View} from 'react-native';
import validator from 'validator';
import {TransparentInput} from '../../module';

function EmailForm() {
  const {email, changeForm, sendEmail} = useLocalAuth();
  const [isSubmitAble, setIsSubmitAble] = useState(false);

  useEffect(() => {
    setIsSubmitAble(validator.isEmail(email));
  }, [email]);

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={120}
      behavior="padding"
      className="flex-1">
      <View className="flex-1 top-[40%]">
        <TransparentInput
          placeholder="welcome@todayquest.com"
          value={email}
          onChangeText={value => changeForm({name: 'email', value})}
          autoFocus
          keyboardType="email-address"
        />
      </View>
      <ConditionalFadeContainer isVisible={isSubmitAble}>
        <Button label="인증하기" onPress={sendEmail} />
      </ConditionalFadeContainer>
    </KeyboardAvoidingView>
  );
}

export default EmailForm;
