import useUserStore from '@shared/stores/useUserStore';
import {applyAuthClient} from 'apis/@client';
import {AuthPayload} from 'apis/types';
import {useCallback} from 'react';
import authStorage from 'storages/authStorage';

function useApplyAuth() {
  const {setUser} = useUserStore();

  return useCallback((auth: AuthPayload) => {
    const {user, tokens} = auth;

    setUser(user);
    applyAuthClient(tokens.accessToken);
    authStorage.setTokens(tokens);
  }, []);
}

export default useApplyAuth;
