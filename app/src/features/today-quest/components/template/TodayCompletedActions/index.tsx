import React from 'react';
import {AppText, Button, FlexGapContainer} from '@shared/components/base';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProps} from 'navigations/RootStack/types';

function TodayCompletedActions() {
  const {navigate} = useNavigation<RootStackNavigationProps>();

  return (
    <FlexGapContainer gapSize="big">
      <View className="items-center justify-center">
        <AppText typoStyle="H3">새로운 퀘스트는</AppText>
        <AppText typoStyle="H3">새벽 5시에 받을 수 있어요!</AppText>
      </View>
      <View className="px-8">
        <FlexGapContainer>
          <Button
            label="오늘 하루 정리하기"
            onPress={() => navigate('todayResult')}
          />
          <Button
            label="나만의 퀘스트 만들기"
            onPress={() => navigate('questWrite')}
          />
        </FlexGapContainer>
      </View>
    </FlexGapContainer>
  );
}

export default TodayCompletedActions;
