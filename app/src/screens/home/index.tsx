import React from 'react';
import {FlexGapContainer, Layout} from '@shared/components/base';
import {Header} from '@shared/components/module';
import {View} from 'react-native';
import {
  TodayCompleter,
  TodayQuests,
} from 'features/today-quest/components/template';

function HomeScreen() {
  return (
    <Layout>
      <Header title="오늘의 퀘스트" />
      <View className="p-4">
        <FlexGapContainer gapSize="big">
          <TodayQuests />
          <TodayCompleter />
        </FlexGapContainer>
      </View>
    </Layout>
  );
}

export default HomeScreen;
