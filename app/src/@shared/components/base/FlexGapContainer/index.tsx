import {View} from 'react-native';
import React from 'react';

type Props = {
  direction?: 'column' | 'row';
  gapSize?: 'small' | 'medium' | 'big';
  children: React.ReactNode;
};

function FlexGapContainer({
  direction = 'column',
  gapSize = 'medium',
  children,
}: Props) {
  const gap = gapSizeMap[gapSize];

  return <View style={{flexDirection: direction, gap}}>{children}</View>;
}

export default FlexGapContainer;

const gapSizeMap = {
  small: 8,
  medium: 16,
  big: 32,
};
