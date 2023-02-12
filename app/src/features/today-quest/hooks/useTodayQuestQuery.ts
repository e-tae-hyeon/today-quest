import {useQuery} from '@tanstack/react-query';
import {getMyTodayQuests} from 'apis/me';

function useTodayQuestQuery() {
  const {data: todayQuests} = useQuery(['todayQuests'], getMyTodayQuests);

  const type = todayQuests?.type;
  const quests = todayQuests?.payload ?? [];
  const date = todayQuests?.date ?? '오늘 하루';

  return {type, quests, date};
}

export default useTodayQuestQuery;
