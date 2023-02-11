import React from 'react';
import {FlexGapContainer, Layout} from '@shared/components/base';
import {Header} from '@shared/components/module';
import {View} from 'react-native';
import {
  TodayCompleteAction,
  TodayQuests,
} from 'features/quest/components/template';

function HomeScreen() {
  return (
    <Layout>
      <Header title="오늘의 퀘스트" />
      <View className="p-4">
        <FlexGapContainer gapSize="big">
          <TodayQuests />
          <TodayCompleteAction />
        </FlexGapContainer>
      </View>
    </Layout>
  );
}

export default HomeScreen;
