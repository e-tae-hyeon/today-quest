import {TextInput, TextInputProps, View} from 'react-native';
import React from 'react';
import colors from '@shared/common/styles/colors';
import {AppText} from '@shared/components/base';
import {typo} from '@shared/common/styles/typo';

type Props = TextInputProps & {
  hasLengthCounter?: {
    length: number;
  };
};

function TransparentInput({hasLengthCounter, maxLength, ...rest}: Props) {
  const {fontFamily, fontSize} = typo.H3;

  return (
    <View className="flex-row">
      <TextInput
        {...rest}
        maxLength={maxLength}
        placeholderTextColor={colors.gray[200]}
        className="flex-1"
        style={{fontSize, fontFamily}}
      />
      {hasLengthCounter && (
        <AppText typoStyle="H3" color={colors.gray[200]}>
          {hasLengthCounter.length}/{maxLength}
        </AppText>
      )}
    </View>
  );
}

export default TransparentInput;
