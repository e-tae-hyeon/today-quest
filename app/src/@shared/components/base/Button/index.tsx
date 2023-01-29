import {PressableProps, Pressable} from 'react-native';
import React from 'react';
import colors from '@shared/common/styles/colors';
import AppText from '../AppText';

export type Props = PressableProps & {
  label: string;
  theme?: 'primary' | 'secondary';
};

function Button({label, theme = 'primary', className, ...rest}: Props) {
  const {bgColor, textColor} = themeMap[theme];

  return (
    <Pressable
      className={`py-4 px-8 rounded-lg ${bgColor} ${className}`}
      {...rest}>
      <AppText color={textColor} textAlign="center">
        {label}
      </AppText>
    </Pressable>
  );
}

export default Button;

const themeMap = {
  primary: {
    bgColor: 'bg-black',
    textColor: colors.white,
  },
  secondary: {
    bgColor: 'bg-neutral-100',
    textColor: colors.black,
  },
  disabled: {
    bgColor: 'bg-neutral-200',
    textColor: colors.white,
  },
};
