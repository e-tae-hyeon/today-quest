import colors from '@shared/common/styles/colors';
import React from 'react';
import * as Icons from './icons';

type Props = {
  name: keyof typeof Icons;
  color?: string;
  size?: number;
};

function SvgIcon({name, color = colors.black, size = 24}: Props) {
  const Icon = Icons[name];

  return <Icon width={size} height={size} color={color} />;
}

export default SvgIcon;
