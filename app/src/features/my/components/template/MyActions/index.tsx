import React from 'react';
import {Cell, FlexGapContainer} from '@shared/components/base';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProps} from 'navigations/RootStack/types';

function MyActions() {
  const {navigate} = useNavigation<RootStackNavigationProps>();

  return (
    <FlexGapContainer>
      <Cell label="설정" onPress={() => navigate('settings')} />
    </FlexGapContainer>
  );
}

export default MyActions;
