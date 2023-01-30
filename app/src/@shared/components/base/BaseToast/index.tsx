import {Pressable, View} from 'react-native';
import React from 'react';
import colors from '@shared/common/styles/colors';
import AppText from '../AppText';
import SvgIcon from '../SvgIcon';
import FlexGapContainer from '../FlexGapContainer';

export type Props = {
  type?: 'success' | 'error';
  title: string;
  description?: string;
  onPress?: () => void;
};

const iconMap = {
  success: {
    name: 'checkCircle' as const,
    color: colors.success,
  },
  error: {
    name: 'infoCircle' as const,
    color: colors.danger,
  },
};

function BaseToast({type, title = 'test', description, onPress}: Props) {
  return (
    <Pressable onPress={onPress} className="w-full p-4">
      <View className="p-4 rounded-lg bg-neutral-600">
        <FlexGapContainer direction="row">
          {type && (
            <SvgIcon name={iconMap[type].name} color={iconMap[type].color} />
          )}
          <View>
            <AppText typoStyle="B1" color={colors.white}>
              {title}
            </AppText>
            {description && (
              <AppText typoStyle="Caption" color={colors.gray[400]}>
                {description}
              </AppText>
            )}
          </View>
        </FlexGapContainer>
      </View>
    </Pressable>
  );
}

export default BaseToast;
