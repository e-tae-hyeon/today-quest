import React from 'react';
import {AppText, FlexGapContainer} from '@shared/components/base';
import useTodayQuestQuery from 'features/today-quest/hooks/useTodayQuestQuery';
import usePopupRenewTodayDialog from 'features/today-quest/hooks/usePopupRenewTodayDialog';
import useProfileStore from 'features/auth/stores/useProfileStore';
import {TodayQuestItemCard} from '../../module';

function TodayQuests() {
  const profile = useProfileStore(store => store.profile);
  const {type, quests} = useTodayQuestQuery();

  usePopupRenewTodayDialog(type!);

  return (
    <FlexGapContainer>
      <AppText typoStyle="H3">{profile?.nickname}님을 위한 퀘스트:)</AppText>
      <FlexGapContainer>
        {quests.map(quest => (
          <TodayQuestItemCard questItem={quest} key={quest.id} />
        ))}
      </FlexGapContainer>
    </FlexGapContainer>
  );
}

export default TodayQuests;
