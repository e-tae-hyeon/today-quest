import React from 'react';
import {AppText, FlexGapContainer} from '@shared/components/base';
import useUserStore from '@shared/stores/useUserStore';
import useTodayQuestQuery from 'features/today-quest/hooks/useTodayQuestQuery';
import usePopupRenewTodayDialog from 'features/today-quest/hooks/usePopupRenewTodayDialog';
import {TodayQuestItem} from '../../module';

function TodayQuests() {
  const user = useUserStore(store => store.user);
  const {type, quests} = useTodayQuestQuery();

  usePopupRenewTodayDialog(type!);

  return (
    <FlexGapContainer>
      <AppText typoStyle="H3">
        {user?.profile.nickname}님을 위한 퀘스트:)
      </AppText>
      <FlexGapContainer>
        {quests.map(quest => (
          <TodayQuestItem questItem={quest} key={quest.id} />
        ))}
      </FlexGapContainer>
    </FlexGapContainer>
  );
}

export default TodayQuests;
