import React from 'react';
import {AppText, Cell, FlexGapContainer} from '@shared/components/base';
import useLogout from 'features/auth/hooks/useLogout';
import useUnregister from 'features/auth/hooks/useUnregister';

function AccountSettingsActions() {
  const {popupLogoutDialog} = useLogout();
  const {popupUnregisterDialog} = useUnregister();

  return (
    <FlexGapContainer gapSize="small">
      <AppText>계정 설정</AppText>
      <FlexGapContainer>
        <Cell label="로그아웃" onPress={popupLogoutDialog} />
        <Cell label="회원탈퇴" onPress={popupUnregisterDialog} />
      </FlexGapContainer>
    </FlexGapContainer>
  );
}

export default AccountSettingsActions;
