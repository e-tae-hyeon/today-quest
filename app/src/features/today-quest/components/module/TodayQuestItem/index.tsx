import {View, Pressable} from 'react-native';
import React from 'react';
import {QuestItem} from 'apis/types';
import {AppText, SvgIcon} from '@shared/components/base';
import colors from '@shared/common/styles/colors';
import {fontSize} from '@shared/common/styles/typo';
import {useTodayQuestOverrideByid} from 'features/today-quest/stores/useTodayQuestOverrideStore';
import useDoneQuestManager from 'features/today-quest/hooks/useDoneQuestManager';

type Props = {
  quest: QuestItem;
};

function TodayQuestItem({quest}: Props) {
  const {
    id,
    quest: {title},
  } = quest;
  const override = useTodayQuestOverrideByid(id);
  const {done, undone} = useDoneQuestManager();
  const status = override?.status ?? quest.status;
  const isDone = status === 'done';

  const toggleDone = isDone ? () => undone(id) : () => done(id);

  return (
    <Pressable
      onPress={toggleDone}
      className={`${
        isDone ? 'bg-neutral-100' : 'bg-white shadow'
      } px-4 pt-8 pb-4  rounded-lg`}>
      <View className="h-16">
        <AppText color={isDone ? colors.gray[300] : colors.black}>
          {title}
        </AppText>
      </View>
      <View className="flex-row items-center justify-end">
        <AppText typoStyle="Caption" color={colors.gray[200]}>
          {isDone ? 'complete' : '눌러서 완료하기'}
        </AppText>
        <SvgIcon
          name="chevronRight"
          size={fontSize.Caption}
          color={colors.gray[200]}
        />
      </View>
    </Pressable>
  );
}

export default TodayQuestItem;
