import {PressableProps, Pressable} from 'react-native';
import React from 'react';
import colors from '@shared/common/styles/colors';
import AppText from '../AppText';

export type Props = PressableProps & {
  label: string;
  theme?: 'primary' | 'secondary';
  isFit?: boolean;
};

function Button({
  label,
  theme = 'primary',
  isFit = true,
  disabled,
  ...rest
}: Props) {
  const {bgColor, textColor} = themeMap[theme];

  return (
    <Pressable
      className={`${isFit ? 'px-8' : 'flex-1'} py-4 rounded-lg ${
        disabled ? themeMap.disabled.bgColor : bgColor
      }`}
      disabled={disabled}
      {...rest}>
      <AppText
        color={disabled ? themeMap.disabled.textColor : textColor}
        textAlign="center">
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
