import {View} from 'react-native';
import React from 'react';
import {AppText, FlexGapContainer} from '@shared/components/base';
import {QuestItem} from 'apis/types';
import colors from '@shared/common/styles/colors';

type Props = {
  questItem: QuestItem;
};

function TodayResultQuestItem({questItem}: Props) {
  const {
    quest: {title},
    status,
  } = questItem;
  const isDone = status === 'done';

  return (
    <FlexGapContainer gapSize="small">
      <View
        className={`${
          isDone ? 'bg-white shadow' : 'bg-neutral-100'
        } p-4 rounded-lg h-24 justify-center`}>
        <AppText color={isDone ? colors.black : colors.gray[300]}>
          {title}
        </AppText>
      </View>
      <AppText
        typoStyle="Unique"
        textAlign="right"
        color={isDone ? colors.black : colors.gray[300]}>
        {isDone ? 'complete' : 'miss'}
      </AppText>
    </FlexGapContainer>
  );
}

export default TodayResultQuestItem;
