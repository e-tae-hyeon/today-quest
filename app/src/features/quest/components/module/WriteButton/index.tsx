import {Pressable} from 'react-native';
import React from 'react';
import {SvgIcon} from '@shared/components/base';
import colors from '@shared/common/styles/colors';

type Props = {
  onPress: () => void;
};

function WriteButton({onPress}: Props) {
  return (
    <Pressable onPress={onPress} className="p-4 bg-black rounded-full">
      <SvgIcon name="plus" color={colors.white} />
    </Pressable>
  );
}

export default WriteButton;
