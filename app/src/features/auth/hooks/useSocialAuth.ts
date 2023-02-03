import {login} from '@react-native-seoul/kakao-login';
import {useNavigation} from '@react-navigation/native';
import useToast from '@shared/hooks/useToast';
import {loginByKakao} from 'apis/auth';
import {RootStackNavigationProps} from 'navigations/RootStack/types';
import {getErrorMessage} from 'utils/errors';
import useAuthStore from '../stores/useAuthStore';
import useApplyAuth from './useApplyAuth';

const useSocialAuth = () => {
  const applyAuth = useApplyAuth();
  const {setRegisterTemp} = useAuthStore();
  const {showToast, clearToast} = useToast();
  const {navigate} = useNavigation<RootStackNavigationProps>();

  const kakaoLogin = async () => {
    clearToast();
    try {
      const {accessToken} = await login();
      const authResult = await loginByKakao(accessToken);

      if (authResult.type === 'login') {
        applyAuth(authResult.payload);
        navigate('mainTab');
      }

      if (authResult.type === 'register') {
        const {provider, socialId, socialAccount} = authResult.payload;
        setRegisterTemp({
          type: 'social',
          provider,
          socialId,
          payload: socialAccount,
        });
        navigate('policy');
      }
    } catch (err) {
      showToast({type: 'error', title: getErrorMessage(err)});
    }
  };

  return {kakaoLogin};
};

export default useSocialAuth;
