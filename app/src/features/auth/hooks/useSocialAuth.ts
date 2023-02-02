import {login} from '@react-native-seoul/kakao-login';
import useToast from '@shared/hooks/useToast';
import {getErrorMessage} from 'utils/errors';

const useSocialAuth = () => {
  const {showToast, clearToast} = useToast();

  const kakaoLogin = async () => {
    clearToast();
    try {
      const authResult = await login();
      console.log(authResult);
    } catch (err) {
      console.error(err);
      showToast({type: 'error', title: getErrorMessage(err)});
    }
  };

  return {kakaoLogin};
};

export default useSocialAuth;
