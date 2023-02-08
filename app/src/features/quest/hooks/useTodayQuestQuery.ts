import {useQuery} from '@tanstack/react-query';
import {getMyTodayQuests} from 'apis/me';

function useTodayQuestQuery() {
  const {data: todayQuests} = useQuery(['todayQuests'], getMyTodayQuests);

  const type = todayQuests?.type ?? ('error' as const);
  const quests = todayQuests?.payload ?? [];

  return {type, quests};
}

export default useTodayQuestQuery;
