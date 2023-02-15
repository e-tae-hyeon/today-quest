import React from 'react';
import {AppText, Card, FlexGapContainer} from '@shared/components/base';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProps} from 'navigations/RootStack/types';
import useProfileStore from 'features/auth/stores/useProfileStore';
import {FinishedQuestCounter, UserInfo} from '../../module';

function MyProfile() {
  const {profile, finishedQuestCount} = useProfileStore();
  const {navigate} = useNavigation<RootStackNavigationProps>();

  return (
    <FlexGapContainer gapSize="small">
      <AppText typoStyle="H3">내 정보</AppText>
      <Card>
        <FlexGapContainer gapSize="big">
          {profile && (
            <UserInfo
              profile={profile}
              onPressUpdateProfile={() => navigate('updateProfile')}
            />
          )}
          <FinishedQuestCounter count={finishedQuestCount} />
        </FlexGapContainer>
      </Card>
    </FlexGapContainer>
  );
}

export default MyProfile;
