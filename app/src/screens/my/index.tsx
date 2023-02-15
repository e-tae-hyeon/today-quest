import React from 'react';
import {FlexGapContainer, Layout} from '@shared/components/base';
import {Header} from '@shared/components/module';
import {View} from 'react-native';
import {MyActions, MyProfile} from 'features/my/components/template';

function MyScreen() {
  return (
    <Layout>
      <Header title="my" />
      <View className="p-4">
        <FlexGapContainer gapSize="big">
          <MyProfile />
          <MyActions />
        </FlexGapContainer>
      </View>
    </Layout>
  );
}

export default MyScreen;
