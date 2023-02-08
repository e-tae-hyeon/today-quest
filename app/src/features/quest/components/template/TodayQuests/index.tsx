import React from 'react';
import {AppText, FlexGapContainer} from '@shared/components/base';
import useUserStore from '@shared/stores/useUserStore';
import useRenewTodayEffect from 'features/quest/hooks/useRenewTodayEffect';
import useTodayQuestQuery from 'features/quest/hooks/useTodayQuestQuery';
import {TodayQuestItem} from '../../module';

function TodayQuests() {
  const user = useUserStore(store => store.user);
  const {type, quests} = useTodayQuestQuery();

  useRenewTodayEffect(type);

  return (
    <FlexGapContainer>
      <AppText typoStyle="H3">
        {user?.profile.nickname}님을 위한 퀘스트:)
      </AppText>
      <FlexGapContainer>
        {quests.map(quest => (
          <TodayQuestItem quest={quest} key={quest.id} />
        ))}
      </FlexGapContainer>
    </FlexGapContainer>
  );
}

export default TodayQuests;
