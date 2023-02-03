import useUserStore from '@shared/stores/useUserStore';
import {applyTokenClient} from 'apis/@client';

import {AuthPayload} from 'apis/types';
import authStorage from 'storages/authStorage';

function useApplyAuth() {
  const setUser = useUserStore(store => store.setUser);

  return (auth: AuthPayload) => {
    const {user, tokens} = auth;

    setUser(user);
    applyTokenClient(tokens.accessToken);
    authStorage.setTokens(tokens);
  };
}

export default useApplyAuth;
