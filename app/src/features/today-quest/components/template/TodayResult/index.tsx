import React from 'react';
import {AppText, FlexGapContainer} from '@shared/components/base';
import useTodayQuestQuery from 'features/today-quest/hooks/useTodayQuestQuery';
import Animated, {FadeIn} from 'react-native-reanimated';
import ViewShot from 'react-native-view-shot';
import useCaptureSave from '@shared/hooks/useCaptureSave';
import {View} from 'react-native';
import useCompleteToday from 'features/today-quest/hooks/useCompleteToday';
import {TodayResultActions, TodayResultQuestItemCard} from '../../module';

function TodayResult() {
  const {quests, date} = useTodayQuestQuery();
  const {ref, captureSave} = useCaptureSave();
  const {complete} = useCompleteToday();

  return (
    <FlexGapContainer gapSize="big">
      <ViewShot ref={ref} options={{fileName: '오늘하루정리'}}>
        <View className="p-4 bg-white">
          <FlexGapContainer gapSize="big">
            <AppText typoStyle="H2">{date} 정리 :)</AppText>
            <FlexGapContainer>
              {quests.map((quest, idx) => (
                <Animated.View
                  entering={FadeIn.delay(idx * 250)}
                  key={quest.id}>
                  <TodayResultQuestItemCard questItem={quest} />
                </Animated.View>
              ))}
            </FlexGapContainer>
          </FlexGapContainer>
        </View>
      </ViewShot>
      <Animated.View entering={FadeIn.delay(1000)}>
        <TodayResultActions handleCapture={captureSave} handleEnd={complete} />
      </Animated.View>
    </FlexGapContainer>
  );
}

export default TodayResult;
