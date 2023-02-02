import {TextInput, TextInputProps} from 'react-native';
import React from 'react';
import typo from '@shared/common/styles/typo';
import colors from '@shared/common/styles/colors';

type Props = TextInputProps & {};

function TransparentInput({...rest}: Props) {
  const {fontFamily, fontSize} = typo.H3;
  return (
    <TextInput
      {...rest}
      placeholderTextColor={colors.gray[200]}
      className={`${fontFamily}`}
      style={{fontSize}}
    />
  );
}

export default TransparentInput;
