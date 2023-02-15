import {Pressable} from 'react-native';
import React from 'react';
import AppText from '../AppText';
import SvgIcon from '../SvgIcon';

type Props = {
  label: string;
  onPress: () => void;
};

function Cell({label, onPress}: Props) {
  return (
    <Pressable
      onPress={onPress}
      className="flex-row items-center justify-between px-4 py-2 rounded-lg bg-neutral-100">
      <AppText>{label}</AppText>
      <SvgIcon name="chevronRight" />
    </Pressable>
  );
}

export default Cell;
