import React from 'react';
import {FlexGapContainer} from '@shared/components/base';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProps} from 'navigations/RootStack/types';
import useSocialAuth from 'features/auth/hooks/useSocialAuth';
import {AuthProvider} from '../../module';

function AuthActions() {
  const {kakaoLogin} = useSocialAuth();
  const {navigate} = useNavigation<RootStackNavigationProps>();

  const onPressEmail = () => {
    navigate('authEmail');
  };

  return (
    <FlexGapContainer>
      <AuthProvider provider="kakao" onPress={kakaoLogin} />
      <AuthProvider provider="email" onPress={onPressEmail} />
    </FlexGapContainer>
  );
}

export default AuthActions;
