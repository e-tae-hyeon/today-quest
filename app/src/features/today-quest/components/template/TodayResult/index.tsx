import React from 'react';
import {AppText, FlexGapContainer} from '@shared/components/base';
import useTodayQuestQuery from 'features/today-quest/hooks/useTodayQuestQuery';
import {TodayResultQuestItem} from '../../module';

function TodayResult() {
  const {quests} = useTodayQuestQuery();

  return (
    <FlexGapContainer gapSize="big">
      <AppText typoStyle="H2">오늘 하루 정리 :)</AppText>
      <FlexGapContainer>
        {quests.map(quest => (
          <TodayResultQuestItem questItem={quest} key={quest.id} />
        ))}
      </FlexGapContainer>
    </FlexGapContainer>
  );
}

export default TodayResult;
