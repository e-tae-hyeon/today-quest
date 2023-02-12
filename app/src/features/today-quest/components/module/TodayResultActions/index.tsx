import {Pressable} from 'react-native';
import React from 'react';
import {LabelIcon} from '@shared/components/module';
import {FlexGapContainer} from '@shared/components/base';
import Animated, {FadeIn} from 'react-native-reanimated';

type Props = {
  handleCapture: () => void;
  handleEnd: () => void;
};

function TodayResultActions({handleCapture, handleEnd}: Props) {
  return (
    <Animated.View entering={FadeIn.delay(1000)}>
      <FlexGapContainer direction="row" gapSize="big" isCenter>
        <Pressable
          onPress={handleCapture}
          className="items-center justify-center w-20 aspect-square">
          <LabelIcon name="image" label="저장하기" />
        </Pressable>
        <Pressable
          onPress={handleEnd}
          className="items-center justify-center w-20 aspect-square">
          <LabelIcon name="checkCircle" label="종료" />
        </Pressable>
      </FlexGapContainer>
    </Animated.View>
  );
}

export default TodayResultActions;
