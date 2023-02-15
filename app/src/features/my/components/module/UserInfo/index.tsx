import {Pressable, View} from 'react-native';
import React from 'react';
import {AppText, SvgIcon} from '@shared/components/base';
import {typo} from '@shared/common/styles/typo';
import {Profile} from 'apis/types';

type Props = {
  profile: Profile;
  onPressUpdateProfile: () => void;
};

function UserInfo({profile, onPressUpdateProfile}: Props) {
  const {nickname} = profile;

  return (
    <View className="flex-row items-center justify-between">
      <AppText>{nickname}</AppText>
      <Pressable
        onPress={onPressUpdateProfile}
        className="flex-row items-center px-2 py-1 rounded-lg bg-neutral-100"
        style={{gap: 2}}>
        <SvgIcon name="pencil" size={typo.Caption.fontSize} />
        <AppText typoStyle="Caption">프로필 편집</AppText>
      </Pressable>
    </View>
  );
}

export default UserInfo;
