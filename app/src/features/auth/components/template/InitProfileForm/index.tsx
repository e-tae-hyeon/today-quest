import {KeyboardAvoidingView, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Button} from '@shared/components/base';
import {ConditionalFadeContainer} from '@shared/components/module';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProps} from 'navigations/RootStack/types';
import {updateProfile} from 'apis/me';
import {TransparentInput} from '../../module';

function InitProfileForm() {
  const [nickname, setNickname] = useState('');
  const [isSubmitAble, setIsSubmitAble] = useState(false);
  const {replace} = useNavigation<RootStackNavigationProps>();

  useEffect(() => {
    setIsSubmitAble(!!nickname);
  }, [nickname]);

  const onSubmit = async () => {
    await updateProfile({nickname});
    replace('mainTab');
  };

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={80}
      behavior="padding"
      className="flex-1">
      <View className="flex-1 top-[40%]">
        <TransparentInput
          placeholder="8글자 내로 입력해주세요"
          value={nickname}
          onChangeText={setNickname}
          maxLength={8}
          hasLengthCounter={{length: nickname.length}}
        />
      </View>
      <ConditionalFadeContainer isVisible={isSubmitAble}>
        <Button label="시작하기" onPress={onSubmit} />
      </ConditionalFadeContainer>
    </KeyboardAvoidingView>
  );
}

export default InitProfileForm;
