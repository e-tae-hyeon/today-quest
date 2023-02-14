import React from 'react';
import {AppText, FlexGapContainer} from '@shared/components/base';
import {QuestItem} from 'apis/types';
import colors from '@shared/common/styles/colors';
import {QuestCard} from '../../base';

type Props = {
  questItem: QuestItem;
};

function TodayResultQuestItemCard({questItem}: Props) {
  const {quest, status} = questItem;
  const isDone = status === 'done';
  const {bgColor, textColor, hasShadow} = isDone
    ? questStyleMap.done
    : questStyleMap.doing;

  return (
    <FlexGapContainer gapSize="small">
      <QuestCard
        quest={quest}
        style={{
          bgColor,
          textColor,
          hasShadow,
        }}
      />
      <AppText typoStyle="Unique" textAlign="right" color={textColor}>
        {isDone ? 'complete' : 'miss'}
      </AppText>
    </FlexGapContainer>
  );
}

export default TodayResultQuestItemCard;

const questStyleMap = {
  doing: {
    bgColor: colors.gray[100],
    textColor: colors.gray[300],
    hasShadow: false,
  },
  done: {
    bgColor: colors.white,
    textColor: colors.black,
    hasShadow: true,
  },
};
