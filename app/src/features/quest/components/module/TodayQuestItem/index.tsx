import {View, Pressable} from 'react-native';
import React from 'react';
import {QuestItem} from 'apis/types';
import {AppText, SvgIcon} from '@shared/components/base';
import colors from '@shared/common/styles/colors';
import {fontSize} from '@shared/common/styles/typo';

type Props = {
  quest: QuestItem;
};

/** @todo 오늘의 퀘스트 완료 기능 추가 */
function TodayQuestItem({quest}: Props) {
  const {
    id,
    quest: {title},
  } = quest;

  return (
    <Pressable className="px-4 pt-8 pb-4 bg-white rounded-lg shadow">
      <View className="h-16">
        <AppText>{title}</AppText>
      </View>
      <View className="flex-row items-center justify-end">
        <AppText typoStyle="Caption" color={colors.gray[200]}>
          눌러서 완료하기
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
