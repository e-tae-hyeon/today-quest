import {TextInput, TextInputProps, View} from 'react-native';
import React from 'react';
import typo from '@shared/common/styles/typo';
import colors from '@shared/common/styles/colors';
import {AppText} from '@shared/components/base';

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
        className={`${fontFamily} flex-1`}
        style={{fontSize}}
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
