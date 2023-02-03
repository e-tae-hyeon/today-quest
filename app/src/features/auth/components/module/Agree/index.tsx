import {Pressable, View} from 'react-native';
import React from 'react';
import {
  AppText,
  FlexGapContainer,
  Link,
  SvgIcon,
} from '@shared/components/base';
import colors from '@shared/common/styles/colors';

type Props = {
  label: string;
  isChecked: boolean;
  onPress: () => void;
  link?: string;
};

function Agree({label, isChecked, onPress, link}: Props) {
  const checkColor = isChecked ? colors.black : colors.gray[200];

  return (
    <Pressable onPress={onPress}>
      <FlexGapContainer direction="row">
        <SvgIcon name="checkCircle" color={checkColor} />
        <View className="flex-row items-center justify-between flex-1">
          <AppText>{label}</AppText>
          {link && (
            <Link link={link} label="보기" textColor={colors.gray[200]} />
          )}
        </View>
      </FlexGapContainer>
    </Pressable>
  );
}

export default Agree;
