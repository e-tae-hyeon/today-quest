import {KeyboardAvoidingView, ScrollView} from 'react-native';
import React from 'react';
import {FlexGapContainer, Layout} from '@shared/components/base';
import {ActionsHeader} from '@shared/components/module';
import {
  FeedbackEmoticonActions,
  FeedbackForm,
} from 'features/my/components/template';

function FeedBackScreen() {
  return (
    <Layout>
      <ActionsHeader title="피드백" />
      <KeyboardAvoidingView behavior="padding" className="flex-1">
        <ScrollView
          className="p-4"
          contentContainerStyle={{paddingBottom: 40}}
          showsVerticalScrollIndicator={false}>
          <FlexGapContainer gapSize="big">
            <FeedbackEmoticonActions />
            <FeedbackForm />
          </FlexGapContainer>
        </ScrollView>
      </KeyboardAvoidingView>
    </Layout>
  );
}

export default FeedBackScreen;
