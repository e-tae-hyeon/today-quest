import React from 'react';
import {Quest} from 'apis/types';
import {AppText, Card} from '@shared/components/base';
import {View} from 'react-native';

type Props = {
  quest: Quest;
};

function QuestCard({quest}: Props) {
  const {title} = quest;

  return (
    <Card>
      <View className="justify-center h-16">
        <AppText>{title}</AppText>
      </View>
    </Card>
  );
}

export default QuestCard;
