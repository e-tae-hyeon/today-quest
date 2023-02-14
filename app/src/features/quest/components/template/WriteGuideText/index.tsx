import React from 'react';
import {AppText, FlexGapContainer} from '@shared/components/base';
import colors from '@shared/common/styles/colors';

const guideTexts = [
  '언제, 어디서, 무엇을 어떻게 해야하는지 적어보세요.',
  '재밌고 참신한 퀘스트는 대환영이에요.',
  '불쾌감을 주는 내용은 삼가주세요.',
];

function WriteGuideText() {
  return (
    <FlexGapContainer>
      <AppText>이렇게 작성해보세요 :)</AppText>
      <FlexGapContainer gapSize="small">
        {guideTexts.map(text => (
          <AppText typoStyle="B2" color={colors.gray[400]} key={text}>
            {`\u2022`} {text}
          </AppText>
        ))}
      </FlexGapContainer>
    </FlexGapContainer>
  );
}

export default WriteGuideText;
