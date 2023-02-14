import {View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProps} from 'navigations/RootStack/types';
import {WriteButton} from '../../module';

function WriteFloatingButton() {
  const {navigate} = useNavigation<RootStackNavigationProps>();

  return (
    <View className="absolute bottom-10 right-5">
      <WriteButton onPress={() => navigate('questWrite')} />
    </View>
  );
}

export default WriteFloatingButton;
