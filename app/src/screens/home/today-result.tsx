import React from 'react';
import {Layout} from '@shared/components/base';
import {View} from 'react-native';
import {TodayResult} from 'features/today-quest/components/template';

function TodayResultScreen() {
  return (
    <Layout>
      <View className="p-4 py-12">
        <TodayResult />
      </View>
    </Layout>
  );
}

export default TodayResultScreen;
