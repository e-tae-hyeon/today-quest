import {useNavigation} from '@react-navigation/native';
import useToast from '@shared/hooks/useToast';
import * as AuthApi from 'apis/auth';
import {RootStackNavigationProps} from 'navigations/RootStack/types';
import {getErrorMessage} from 'utils/errors';
import useAuthStore from '../stores/useAuthStore';
import useApplyAuth from './useApplyAuth';

function useLocalAuth() {
  const {email, code, setEmail, setCode, clearCode} = useAuthStore();
  const {navigate} = useNavigation<RootStackNavigationProps>();
  const {showToast, clearToast} = useToast();
  const applyAuth = useApplyAuth();

  const changeForm = ({
    name,
    value,
  }: {
    name: 'email' | 'code';
    value: string;
  }) => {
    if (name === 'email') setEmail(value);
    else setCode(value);
  };

  const sendEmail = () => {
    if (!email) return;
    clearCode();
    AuthApi.sendEmail(email);
    navigate('verifyEmail');
  };

  const verifyEmail = async () => {
    if (!code) return;
    clearToast();
    try {
      const {type, payload} = await AuthApi.verifyEmail({
        email,
        code: parseInt(code, 10),
      });

      if (type === 'login') {
        applyAuth(payload);
        navigate('mainTab');
      } else if (type === 'register') {
        navigate('policy');
      }
    } catch (err) {
      showToast({type: 'error', title: getErrorMessage(err)});
    }
  };

  const register = async () => {
    clearToast();
    try {
      const authPayload = await AuthApi.register({type: 'local', email});
      applyAuth(authPayload);
      navigate('mainTab');
    } catch (err) {
      showToast({type: 'error', title: getErrorMessage(err)});
    }
  };

  return {email, code, changeForm, sendEmail, verifyEmail, register};
}

export default useLocalAuth;
