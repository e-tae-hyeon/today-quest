import React from 'react';
import {AppText, Cell, FlexGapContainer} from '@shared/components/base';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProps} from 'navigations/RootStack/types';
import {Linking} from 'react-native';
import {
  TERMS_OR_SERVICE_URL,
  PRIVACY_POLICY_URL,
} from '@shared/common/constants/string';

function UsageSettingsActions() {
  const {navigate} = useNavigation<RootStackNavigationProps>();

  return (
    <FlexGapContainer gapSize="small">
      <AppText>이용 안내</AppText>
      <FlexGapContainer>
        <Cell label="피드백" onPress={() => navigate('feedback')} />
        <Cell
          label="서비스 이용 약관"
          onPress={() => Linking.openURL(TERMS_OR_SERVICE_URL)}
        />
        <Cell
          label="개인정보처리방침"
          onPress={() => Linking.openURL(PRIVACY_POLICY_URL)}
        />
      </FlexGapContainer>
    </FlexGapContainer>
  );
}

export default UsageSettingsActions;
