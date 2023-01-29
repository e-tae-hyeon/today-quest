import React from 'react';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Button from '../Button';

type Props = {
  label: string;
  onPress: () => void;
};

function BottomButton({label, onPress}: Props) {
  const {bottom} = useSafeAreaInsets();

  return (
    <View
      className="absolute inset-x-0 bottom-0 bg-black"
      style={{paddingBottom: bottom}}>
      <Button label={label} onPress={onPress} className="p-8 rounded-none" />
    </View>
  );
}

export default BottomButton;
