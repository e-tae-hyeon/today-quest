import {View} from 'react-native';
import React from 'react';
import {AppText, Card} from '@shared/components/base';
import {Quest} from 'apis/types';

type Props = {
  quest: Quest;
  style?: {
    bgColor?: string;
    textColor?: string;
    hasShadow?: boolean;
  };
  bottomComponent?: React.ReactNode;
};

function QuestCard({quest, style, bottomComponent}: Props) {
  const {title} = quest;

  return (
    <Card bgColor={style?.bgColor} hasShadow={style?.hasShadow}>
      <View className="justify-center h-16">
        <AppText color={style?.textColor}>{title}</AppText>
      </View>
      {bottomComponent}
    </Card>
  );
}

export default QuestCard;
