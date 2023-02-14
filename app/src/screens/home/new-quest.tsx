import {View} from 'react-native';
import React from 'react';
import {Layout} from '@shared/components/base';
import {NewTodayQuests} from 'features/today-quest/components/template';

function NewQuestScreen() {
  return (
    <Layout>
      <View className="p-4 py-12">
        <NewTodayQuests />
      </View>
    </Layout>
  );
}

export default NewQuestScreen;
