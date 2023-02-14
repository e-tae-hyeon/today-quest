import {View} from 'react-native';
import React from 'react';
import colors from '@shared/common/styles/colors';

type Props = {
  bgColor?: string;
  hasShadow?: boolean;
  children: React.ReactNode;
};

function Card({bgColor = colors.white, hasShadow = true, children}: Props) {
  return (
    <View
      className={`${hasShadow && 'shadow'} p-4 rounded-lg`}
      style={{backgroundColor: bgColor}}>
      {children}
    </View>
  );
}

export default Card;
