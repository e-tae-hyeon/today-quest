import {View, Pressable} from 'react-native';
import React from 'react';
import {QuestItem} from 'apis/types';
import {AppText, SvgIcon} from '@shared/components/base';
import colors from '@shared/common/styles/colors';
import {fontSize} from '@shared/common/styles/typo';
import {useTodayQuestOverrideByid} from 'features/today-quest/stores/useTodayQuestOverrideStore';
import useDoneQuestManager from 'features/today-quest/hooks/useDoneQuestManager';
import {QuestCard} from '../../base';

type Props = {
  questItem: QuestItem;
};

function TodayQuestItemCard({questItem}: Props) {
  const {id, quest} = questItem;
  const override = useTodayQuestOverrideByid(id);
  const {done, undone} = useDoneQuestManager();

  const status = override?.status ?? questItem.status;
  const isDone = status === 'done';
  const {bgColor, textColor, hasShadow} = isDone
    ? questStyleMap.done
    : questStyleMap.doing;

  const toggleDone = isDone ? () => undone(id) : () => done(id);

  return (
    <Pressable onPress={toggleDone}>
      <QuestCard
        quest={quest}
        style={{
          bgColor,
          textColor,
          hasShadow,
        }}
        bottomComponent={
          <View className="flex-row items-center justify-end">
            <AppText typoStyle="Caption" color={colors.gray[300]}>
              {isDone ? 'complete' : '눌러서 완료하기'}
            </AppText>
            <SvgIcon
              name="chevronRight"
              size={fontSize.Caption}
              color={colors.gray[300]}
            />
          </View>
        }
      />
    </Pressable>
  );
}

export default TodayQuestItemCard;

const questStyleMap = {
  doing: {
    bgColor: colors.white,
    textColor: colors.black,
    hasShadow: true,
  },
  done: {
    bgColor: colors.gray[100],
    textColor: colors.gray[300],
    hasShadow: false,
  },
};
