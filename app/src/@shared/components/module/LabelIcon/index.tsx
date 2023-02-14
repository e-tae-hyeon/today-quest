import React from 'react';
import {AppText, FlexGapContainer, SvgIcon} from '@shared/components/base';
import type {Props as SvgIconProps} from '@shared/components/base/SvgIcon';

type Props = SvgIconProps & {
  label: string;
};

function LabelIcon({label, color, ...rest}: Props) {
  return (
    <FlexGapContainer gapSize="small" isCenter>
      <SvgIcon color={color} {...rest} />
      <AppText color={color}>{label}</AppText>
    </FlexGapContainer>
  );
}

export default LabelIcon;
