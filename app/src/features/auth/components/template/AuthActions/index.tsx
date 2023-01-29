import React from 'react';
import {FlexGapContainer} from '@shared/components/base';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProps} from 'navigations/RootStack/types';
import {AuthProvider} from '../../module';

function AuthActions() {
  const {navigate} = useNavigation<RootStackNavigationProps>();

  const onPressKakao = () => {
    /** @todo 카카오 소셜로그인 추가 */
  };

  const onPressLocal = () => {
    navigate('authLocal');
  };

  return (
    <FlexGapContainer>
      <AuthProvider provider="kakao" onPress={onPressKakao} />
      <AuthProvider provider="local" onPress={onPressLocal} />
    </FlexGapContainer>
  );
}

export default AuthActions;
