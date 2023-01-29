import {Text, TextProps} from 'react-native';
import React from 'react';

type Props = TextProps & {};

function AppText({children, className, ...rest}: Props) {
  return (
    <Text
      className={`font-default text-base text-black ${className}`}
      {...rest}>
      {children}
    </Text>
  );
}

export default AppText;
