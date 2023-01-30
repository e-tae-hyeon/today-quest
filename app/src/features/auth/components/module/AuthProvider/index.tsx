import {Pressable} from 'react-native';
import React from 'react';
import {AppText, FlexGapContainer, SvgIcon} from '@shared/components/base';
import colors from '@shared/common/styles/colors';

type Provider = 'email' | 'kakao';

type Props = {
  provider: Provider;
  onPress: () => void;
};

function AuthProvider({provider, onPress}: Props) {
  const {bgColor, accentColor, icon, label} = providerMap[provider];

  return (
    <Pressable
      onPress={onPress}
      className="items-center justify-center p-4 rounded-lg"
      style={{backgroundColor: bgColor}}>
      <FlexGapContainer direction="row" gapSize="small">
        <SvgIcon name={icon} color={accentColor} />
        <AppText color={accentColor}>{label}</AppText>
      </FlexGapContainer>
    </Pressable>
  );
}

export default AuthProvider;

const providerMap: Record<
  Provider,
  {
    bgColor: string;
    accentColor: string;
    icon: any;
    label: string;
  }
> = {
  email: {
    bgColor: colors.black,
    accentColor: colors.white,
    icon: 'mail',
    label: '이메일로 시작하기',
  },
  kakao: {
    bgColor: '#FEE500',
    accentColor: colors.black,
    icon: 'kakao',
    label: '카카오로 시작하기',
  },
};
