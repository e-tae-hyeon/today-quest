import {View} from 'react-native';
import React from 'react';
import {AppText} from '@shared/components/base';

type Props = {
  count: number;
};

function FinishedQuestCounter({count}: Props) {
  return (
    <View className="flex-row items-center justify-between">
      <AppText>내가 달성한 퀘스트</AppText>
      <AppText>{count.toLocaleString()}</AppText>
    </View>
  );
}

export default FinishedQuestCounter;
