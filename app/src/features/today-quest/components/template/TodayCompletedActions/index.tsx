import React from 'react';
import {AppText, Button, FlexGapContainer} from '@shared/components/base';
import {View} from 'react-native';

function TodayCompletedActions() {
  return (
    <FlexGapContainer gapSize="big">
      <View className="items-center justify-center">
        <AppText typoStyle="H3">새로운 퀘스트는</AppText>
        <AppText typoStyle="H3">새벽 5시에 받을 수 있어요!</AppText>
      </View>
      <View className="px-8">
        <FlexGapContainer>
          <Button label="오늘 하루 정리하기" />
          <Button label="나만의 퀘스트 만들기" />
        </FlexGapContainer>
      </View>
    </FlexGapContainer>
  );
}

export default TodayCompletedActions;
