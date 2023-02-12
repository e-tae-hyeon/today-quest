import React from 'react';
import {AppText, FlexGapContainer} from '@shared/components/base';
import useTodayQuestQuery from 'features/today-quest/hooks/useTodayQuestQuery';
import Animated, {FadeIn} from 'react-native-reanimated';
import ViewShot from 'react-native-view-shot';
import useCaptureSave from '@shared/hooks/useCaptureSave';
import {View} from 'react-native';
import {TodayResultActions, TodayResultQuestItem} from '../../module';

function TodayResult() {
  const {quests} = useTodayQuestQuery();
  const {ref, captureSave} = useCaptureSave();

  const handleEnd = () => {};

  return (
    <FlexGapContainer gapSize="big">
      <ViewShot ref={ref} options={{fileName: '오늘하루정리'}}>
        <View className="p-4 bg-white">
          <FlexGapContainer gapSize="big">
            <AppText typoStyle="H2">오늘 하루 정리 :)</AppText>
            <FlexGapContainer>
              {quests.map((quest, idx) => (
                <Animated.View
                  entering={FadeIn.delay(idx * 250)}
                  key={quest.id}>
                  <TodayResultQuestItem questItem={quest} />
                </Animated.View>
              ))}
            </FlexGapContainer>
          </FlexGapContainer>
        </View>
      </ViewShot>
      <TodayResultActions handleCapture={captureSave} handleEnd={handleEnd} />
    </FlexGapContainer>
  );
}

export default TodayResult;
