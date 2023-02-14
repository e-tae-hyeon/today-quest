import {View} from 'react-native';
import React from 'react';
import {AppText} from '@shared/components/base';

type Props = {
  title: string;
  right?: React.ReactNode;
};

function Header({title, right}: Props) {
  return (
    <View className="flex-row items-center justify-between p-4">
      <AppText typoStyle="H2">{title}</AppText>
      {right}
    </View>
  );
}

export default Header;
