import {View} from 'react-native';
import React from 'react';
import {AppText} from '@shared/components/base';

function Greeting() {
  return (
    <View className="justify-center flex-1">
      <AppText typoStyle="H1" textAlign="center">
        오늘의 퀘스트
      </AppText>
    </View>
  );
}

export default Greeting;
