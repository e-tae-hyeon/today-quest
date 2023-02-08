import useUserStore from '@shared/stores/useUserStore';
import {applyTokenClient} from 'apis/@client';
import {getMe} from 'apis/me';
import authStorage from 'storages/authStorage';

function useLoadUser() {
  const setUser = useUserStore(store => store.setUser);

  return async () => {
    const tokens = await authStorage.getTokens();
    if (!tokens) return;

    applyTokenClient(tokens.accessToken);
    const myProfile = await getMe();
    setUser(myProfile);
  };
}

export default useLoadUser;
