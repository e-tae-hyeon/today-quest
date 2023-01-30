import useUserStore from '@shared/stores/useUserStore';
import {applyAuthClient} from 'apis/@client';
import {LoginPayload} from 'apis/types';
import {useCallback} from 'react';
import authStorage from 'storages/authStorage';

function useLogin() {
  const {setUser} = useUserStore();

  return useCallback((auth: LoginPayload) => {
    const {user, tokens} = auth.payload;

    setUser(user);
    applyAuthClient(tokens.accessToken);
    authStorage.set(tokens);
  }, []);
}

export default useLogin;
