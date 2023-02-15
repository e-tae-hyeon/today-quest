import {View, Pressable} from 'react-native';
import React from 'react';
import {AppText, FlexGapContainer, SvgIcon} from '@shared/components/base';
import useFeedbackStore from 'features/my/stores/useFeedbackStore';

function FeedbackEmoticonActions() {
  const {isLike, setIsLike} = useFeedbackStore();

  const like = () => setIsLike(true);
  const unlike = () => setIsLike(false);

  return (
    <FlexGapContainer gapSize="big">
      <AppText>오늘의 퀘스트에서의 경험이 만족스러우신가요?</AppText>
      <View className="flex-row">
        <Pressable onPress={unlike} className="items-center flex-1">
          <View
            className={`${
              !isLike && 'bg-orange-100'
            } items-center p-4 rounded-full aspect-square`}>
            <SvgIcon name="emoticonBad" size={40} />
            <AppText>별로야</AppText>
          </View>
        </Pressable>
        <Pressable onPress={like} className="items-center flex-1">
          <View
            className={`${
              isLike && 'bg-orange-100'
            } items-center p-4 rounded-full aspect-square`}>
            <SvgIcon name="emoticonGood" size={40} />
            <AppText>좋아</AppText>
          </View>
        </Pressable>
      </View>
    </FlexGapContainer>
  );
}

export default FeedbackEmoticonActions;
