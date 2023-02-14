import React from 'react';
import {FlexGapContainer, Layout} from '@shared/components/base';
import {Header} from '@shared/components/module';
import {View} from 'react-native';
import {
  TodayCompletedActions,
  TodayCompleter,
  TodayQuests,
} from 'features/today-quest/components/template';
import useTodayQuestQuery from 'features/today-quest/hooks/useTodayQuestQuery';

function HomeScreen() {
  const {type} = useTodayQuestQuery();

  return (
    <Layout>
      <Header title="오늘의 퀘스트" />
      <View className="flex-1 p-4 ">
        {type === 'done' ? (
          <View className="justify-center flex-1">
            <TodayCompletedActions />
          </View>
        ) : (
          <FlexGapContainer gapSize="big">
            <TodayQuests />
            <TodayCompleter />
          </FlexGapContainer>
        )}
      </View>
    </Layout>
  );
}

export default HomeScreen;
