import React from 'react';
import {Layout} from '@shared/components/base';
import {Header} from '@shared/components/module';
import {View} from 'react-native';
import {TodayQuests} from 'features/quest/components/template';

function HomeScreen() {
  return (
    <Layout>
      <Header title="오늘의 퀘스트" />
      <View className="p-4">
        <TodayQuests />
      </View>
    </Layout>
  );
}

export default HomeScreen;
