import React from 'react';
import useMyProfileQuery from 'features/my/hooks/useMyProfileQuery';
import {AppText, Card, FlexGapContainer} from '@shared/components/base';
import {FinishedQuestCounter, UserInfo} from '../../module';

function MyProfile() {
  const {profile, finishedQuestCount} = useMyProfileQuery();

  return (
    <FlexGapContainer gapSize="small">
      <AppText typoStyle="H3">내 정보</AppText>
      <Card>
        <FlexGapContainer gapSize="big">
          <UserInfo profile={profile!} />
          <FinishedQuestCounter count={finishedQuestCount} />
        </FlexGapContainer>
      </Card>
    </FlexGapContainer>
  );
}

export default MyProfile;
