import {View} from 'react-native';
import React from 'react';
import {BottomButton} from '@shared/components/base';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProps} from 'navigations/RootStack/types';
import useSystemStore from '@shared/stores/useSystemStore';
import {Writing} from '../../module';

function OnboardSecond() {
  const {navigate} = useNavigation<RootStackNavigationProps>();
  const launcheFirst = useSystemStore(store => store.launchFirst);

  const start = () => {
    navigate('auth');
    launcheFirst();
  };

  return (
    <>
      <View className="justify-center flex-1">
        <Writing
          contents={[
            '누군가의 오늘을 위해',
            '퀘스트를 직접 작성하고 공유하세요!',
          ]}
        />
      </View>
      <BottomButton label="시작하기" onPress={start} />
    </>
  );
}

export default OnboardSecond;
