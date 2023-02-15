import {useQuery} from '@tanstack/react-query';
import {getMyProfile} from 'apis/me';

function useMyProfileQuery() {
  const {data} = useQuery(['myProfile'], getMyProfile);

  const profile = data?.profile;
  const finishedQuestCount = data?.finishedQuestCount ?? 0;

  return {profile, finishedQuestCount};
}

export default useMyProfileQuery;
