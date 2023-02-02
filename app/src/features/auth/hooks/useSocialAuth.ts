import {login} from '@react-native-seoul/kakao-login';
import {useNavigation} from '@react-navigation/native';
import useToast from '@shared/hooks/useToast';
import {loginByKakao} from 'apis/auth';
import {RootStackNavigationProps} from 'navigations/RootStack/types';
import {getErrorMessage} from 'utils/errors';
import useApplyAuth from './useApplyAuth';

const useSocialAuth = () => {
  const applyAuth = useApplyAuth();
  const {showToast, clearToast} = useToast();
  const {navigate} = useNavigation<RootStackNavigationProps>();

  const kakaoLogin = async () => {
    clearToast();
    try {
      const {accessToken} = await login();
      const authResult = await loginByKakao(accessToken);
      applyAuth(authResult);
      navigate('mainTab');
    } catch (err) {
      showToast({type: 'error', title: getErrorMessage(err)});
    }
  };

  return {kakaoLogin};
};

export default useSocialAuth;
