import React from 'react';
import {AppText, Cell, FlexGapContainer} from '@shared/components/base';

function AccountSettingsActions() {
  return (
    <FlexGapContainer gapSize="small">
      <AppText>계정 설정</AppText>
      <FlexGapContainer>
        <Cell label="로그아웃" />
        <Cell label="회원탈퇴" />
      </FlexGapContainer>
    </FlexGapContainer>
  );
}

export default AccountSettingsActions;
