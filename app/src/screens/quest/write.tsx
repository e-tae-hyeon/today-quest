import React from 'react';
import {FlexGapContainer, Layout} from '@shared/components/base';
import {
  WriteForm,
  WriteGuideText,
  WriteHeader,
} from 'features/quest/components/template';
import {View} from 'react-native';

function QuestWriteScreen() {
  return (
    <Layout>
      <WriteHeader />
      <View className="p-4">
        <FlexGapContainer gapSize="big">
          <WriteGuideText />
          <WriteForm />
        </FlexGapContainer>
      </View>
    </Layout>
  );
}

export default QuestWriteScreen;
