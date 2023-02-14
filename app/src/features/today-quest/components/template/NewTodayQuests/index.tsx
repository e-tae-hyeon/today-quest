import React from 'react';
import {AppText, Button, FlexGapContainer} from '@shared/components/base';
import {useQuery, useQueryClient} from '@tanstack/react-query';
import {getNewTodayQuest} from 'apis/me';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProps} from 'navigations/RootStack/types';
import {QuestCard} from '../../base';

function NewTodayQuests() {
  const queryClient = useQueryClient();
  const {replace} = useNavigation<RootStackNavigationProps>();
  const {data: newQuests} = useQuery(['new'], getNewTodayQuest, {
    onSuccess: () => {
      queryClient.removeQueries(['todayQuest']);
    },
  });

  const questList = newQuests?.payload ?? [];

  return (
    <FlexGapContainer gapSize="big">
      <AppText typoStyle="H2">오늘의 퀘스트가 도착했어요</AppText>
      <FlexGapContainer>
        {questList.map(quest => (
          <QuestCard quest={quest.quest} key={quest.id} />
        ))}
      </FlexGapContainer>
      <Button label="시작하기" onPress={() => replace('mainTab')} />
    </FlexGapContainer>
  );
}

export default NewTodayQuests;
