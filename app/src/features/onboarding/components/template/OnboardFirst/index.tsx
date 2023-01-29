import {View} from 'react-native';
import React from 'react';
import {BottomButton, FlexGapContainer} from '@shared/components/base';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProps} from 'navigations/RootStack/types';
import {Writing} from '../../module';

function OnboardFirst() {
  const {navigate} = useNavigation<RootStackNavigationProps>();

  return (
    <>
      <View className="justify-center flex-1 p-4">
        <FlexGapContainer gapSize="big">
          <Writing
            contents={['남이 아닌 나를 위한', '오늘의 퀘스트를 달성하세요!']}
          />
        </FlexGapContainer>
      </View>
      <BottomButton label="다음" onPress={() => navigate('onboardingSecond')} />
    </>
  );
}

export default OnboardFirst;
