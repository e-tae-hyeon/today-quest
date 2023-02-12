import React, {useEffect} from 'react';
import {AppText, FlexGapContainer, SvgIcon} from '@shared/components/base';
import {fontSize} from '@shared/common/styles/typo';
import {ConditionalFadeContainer} from '@shared/components/module';
import {Pressable} from 'react-native';
import useCompleteToday from 'features/today-quest/hooks/useCompleteToday';

function TodayCompleteAction() {
  const {isComplete, popupCompleteDialog} = useCompleteToday();

  useEffect(() => {
    if (isComplete) popupCompleteDialog();
  }, [isComplete]);

  return (
    <ConditionalFadeContainer isVisible={isComplete}>
      <Pressable onPress={popupCompleteDialog}>
        <FlexGapContainer gapSize="small" isCenter>
          <AppText typoStyle="B2">오늘의 퀘스트 완료!</AppText>
          <SvgIcon name="chevronDown" size={fontSize.B2} />
        </FlexGapContainer>
      </Pressable>
    </ConditionalFadeContainer>
  );
}

export default TodayCompleteAction;
