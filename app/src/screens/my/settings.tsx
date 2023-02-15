import React from 'react';
import {FlexGapContainer, Layout} from '@shared/components/base';
import {ActionsHeader} from '@shared/components/module';
import {
  AccountSettingsActions,
  UsageSettingsActions,
} from 'features/my/components/template';
import {View} from 'react-native';

function SettingsScreen() {
  return (
    <Layout>
      <ActionsHeader title="설정" />
      <View className="p-4">
        <FlexGapContainer gapSize="big">
          <UsageSettingsActions />
          <AccountSettingsActions />
        </FlexGapContainer>
      </View>
    </Layout>
  );
}

export default SettingsScreen;
