import {TextInputProps, TextInput} from 'react-native';
import React from 'react';
import {typo} from '@shared/common/styles/typo';
import colors from '@shared/common/styles/colors';

type Props = TextInputProps & {};

function Input({...rest}: Props) {
  const {fontFamily, fontSize} = typo.B1;

  return (
    <TextInput
      placeholderTextColor={colors.gray[300]}
      {...rest}
      className="px-4 py-4 rounded-lg bg-neutral-100"
      style={{fontFamily, fontSize}}
    />
  );
}

export default Input;
