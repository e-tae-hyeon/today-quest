import {useQuery} from '@tanstack/react-query';
import {getMyTodayQuests} from 'apis/me';

function useTodayQuestQuery() {
  const {data: todayQuest} = useQuery(['todayQuest'], getMyTodayQuests);

  const type = todayQuest?.type;
  const quests = todayQuest?.payload ?? [];
  const date = todayQuest?.date ?? '오늘 하루';

  return {type, quests, date};
}

export default useTodayQuestQuery;
