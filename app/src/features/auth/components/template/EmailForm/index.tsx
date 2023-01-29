import {Button, FadeContainer} from '@shared/components/base';
import React, {useEffect, useState} from 'react';
import {KeyboardAvoidingView, View} from 'react-native';
import validator from 'validator';
import {TransparentInput} from '../../module';

function EmailForm() {
  const [email, setEmail] = useState('');
  const [isSubmitAble, setIsSubmitAble] = useState(false);

  useEffect(() => {
    setIsSubmitAble(validator.isEmail(email));
  }, [email]);

  const onSubmit = () => {};

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={230}
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
