import {applyTokenClient} from 'apis/@client';

import {AuthPayload} from 'apis/types';
import authStorage from 'storages/authStorage';
import useProfileStore from '../stores/useProfileStore';

function useApplyAuth() {
  const setProfile = useProfileStore(store => store.setProfile);

  return (auth: AuthPayload) => {
    const {profile, tokens} = auth;

    setProfile(profile);
    applyTokenClient(tokens.accessToken);
    authStorage.setTokens(tokens);
  };
}

export default useApplyAuth;
