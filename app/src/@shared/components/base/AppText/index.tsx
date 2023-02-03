import {Text} from 'react-native';
import React from 'react';
import colors from '@shared/common/styles/colors';
import typo, {TypoStyle} from '@shared/common/styles/typo';

type Props = {
  typoStyle?: TypoStyle;
  color?: string;
  textAlign?: 'left' | 'center' | 'right';
  children: React.ReactNode;
};

function AppText({
  typoStyle = 'B1',
  color = colors.black,
  textAlign = 'left',
  children,
}: Props) {
  const {fontFamily, fontSize} = typo[typoStyle];

  return (
    <Text
      className={`${fontFamily}`}
      style={{fontSize, color, textAlign, textAlignVertical: 'center'}}>
      {children}
    </Text>
  );
}

export default AppText;
