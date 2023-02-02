import React from 'react';
import {AppText, FlexGapContainer} from '@shared/components/base';
import colors from '@shared/common/styles/colors';

type Props = {
  title: string;
  description?: string;
};

function GuideText({title, description}: Props) {
  return (
    <FlexGapContainer gapSize="small">
      <AppText typoStyle="H3">{title}</AppText>
      <AppText typoStyle="B2" color={colors.gray[400]}>
        {description}
      </AppText>
    </FlexGapContainer>
  );
}

export default GuideText;
