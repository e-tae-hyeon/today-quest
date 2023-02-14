import React from 'react';
import {Layout} from '@shared/components/base';
import {Header} from '@shared/components/module';
import {View} from 'react-native';
import {QuestList} from 'features/quest/components/template';

function QuestScreen() {
  return (
    <Layout edges={['top']}>
      <Header title="퀘스트" />
      <View className="flex-1">
        <QuestList />
      </View>
    </Layout>
  );
}

export default QuestScreen;
