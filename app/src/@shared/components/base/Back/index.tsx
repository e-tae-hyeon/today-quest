import {Pressable} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import colors from '@shared/common/styles/colors';
import SvgIcon from '../SvgIcon';

type Props = {
  type: 'back' | 'close';
  color?: string;
};

function Back({type, color = colors.black}: Props) {
  const {goBack} = useNavigation();

  const icon = type === 'back' ? 'chevronLeft' : 'xClose';

  return (
    <Pressable onPress={goBack} hitSlop={8}>
      <SvgIcon name={icon} color={color} />
    </Pressable>
  );
}

export default Back;
