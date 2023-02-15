import React from 'react';
import {
  AppText,
  Button,
  FlexGapContainer,
  Textarea,
} from '@shared/components/base';
import useFeedbackStore from 'features/my/stores/useFeedbackStore';
import useCreateFeedback from 'features/my/hooks/useCreateFeedback';

function FeedbackForm() {
  const {content, setContent} = useFeedbackStore();
  const createFeedback = useCreateFeedback();

  return (
    <FlexGapContainer gapSize="big">
      <FlexGapContainer gapSize="small">
        <AppText>오늘의 퀘스트에 전달할 피드백 내용을 적어주세요.</AppText>
        <Textarea
          placeholder={`좋았던 점이나 불편했던 점을 알려주세요. ${'\n'}어려분의 소중한 피드백을 기다립니다. :)`}
          value={content}
          onChangeText={setContent}
        />
      </FlexGapContainer>
      <Button label="피드백 보내기" onPress={createFeedback} />
    </FlexGapContainer>
  );
}

export default FeedbackForm;
