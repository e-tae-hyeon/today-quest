import {Text} from 'react-native';
import React from 'react';
import colors from '@shared/common/styles/colors';

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
  const {fontFamily, fontSize} = typoMap[typoStyle];

  return (
    <Text className={`${fontFamily}`} style={{fontSize, color, textAlign}}>
      {children}
    </Text>
  );
}

export default AppText;

type TypoStyle = 'H1' | 'H2' | 'H3' | 'B1' | 'B2' | 'Caption';

const typoMap: Record<
  TypoStyle,
  {
    fontFamily: string;
    fontSize: number;
  }
> = {
  H1: {fontFamily: 'font-primary', fontSize: 28},
  H2: {fontFamily: 'font-primary', fontSize: 24},
  H3: {fontFamily: 'font-primary', fontSize: 20},
  B1: {fontFamily: 'font-default', fontSize: 16},
  B2: {fontFamily: 'font-default', fontSize: 14},
  Caption: {fontFamily: 'font-default', fontSize: 12},
};
