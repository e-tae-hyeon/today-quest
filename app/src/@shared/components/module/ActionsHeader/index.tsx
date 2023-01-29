import {View} from 'react-native';
import React from 'react';
import {AppText, Back} from '@shared/components/base';

type Props = {
  title?: string;
  right?: React.ReactNode;
};

function ActionsHeader({title, right}: Props) {
  return (
    <View className="flex-row items-center justify-between p-4">
      <Back type="back" />
      {title && (
        <View className="absolute inset-0 items-center justify-center -z-10">
          <AppText textAlign="center">{title}</AppText>
        </View>
      )}
      {right}
    </View>
  );
}

export default ActionsHeader;
