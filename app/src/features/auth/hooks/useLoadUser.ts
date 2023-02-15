import {applyTokenClient} from 'apis/@client';
import {getMe} from 'apis/me';
import authStorage from 'storages/authStorage';
import useProfileStore from '../stores/useProfileStore';

function useLoadUser() {
  const {setProfile, setFinishedQuestCount} = useProfileStore();

  return async () => {
    const tokens = await authStorage.getTokens();
    if (!tokens) return;

    applyTokenClient(tokens.accessToken);
    const me = await getMe();
    setProfile(me.profile);
    setFinishedQuestCount(me.finishedQuestCount);
  };
}

export default useLoadUser;
