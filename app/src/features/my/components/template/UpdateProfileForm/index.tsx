import React, {useEffect, useState} from 'react';
import {
  AppText,
  Button,
  FlexGapContainer,
  Input,
} from '@shared/components/base';
import colors from '@shared/common/styles/colors';
import useProfileStore from 'features/auth/stores/useProfileStore';
import useUpdateProfile from 'features/my/hooks/useUpdateProfile';

const NICKNAME_MAX_LENGTH = 8;

function UpdateProfileForm() {
  const profile = useProfileStore(store => store.profile);
  const [nickname, setNickname] = useState(profile?.nickname ?? '');
  const [disabled, setDisabled] = useState(false);
  const updateProfile = useUpdateProfile();

  useEffect(() => {
    setDisabled(false);
    if (nickname.length === 0) setDisabled(true);
  }, [nickname]);

  const onPressUpdate = () => updateProfile({nickname});

  return (
    <FlexGapContainer gapSize="big">
      <FlexGapContainer gapSize="small">
        <AppText>닉네임</AppText>
        <Input
          placeholder="8글자 내로 입력해주세요"
          value={nickname}
          onChangeText={setNickname}
          maxLength={NICKNAME_MAX_LENGTH}
        />
        <AppText textAlign="right" color={colors.gray[400]}>
          {nickname.length}/{NICKNAME_MAX_LENGTH}
        </AppText>
      </FlexGapContainer>
      <Button label="완료" disabled={disabled} onPress={onPressUpdate} />
    </FlexGapContainer>
  );
}

export default UpdateProfileForm;
