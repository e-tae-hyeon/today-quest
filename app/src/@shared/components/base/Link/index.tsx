import {Pressable, Linking} from 'react-native';
import React from 'react';
import AppText from '../AppText';

type Props = {
  label: string;
  link: string;
  textColor?: string;
};

function Link({label, link, textColor}: Props) {
  const onPress = () => {
    Linking.openURL(link);
  };

  return (
    <Pressable onPress={onPress}>
      <AppText color={textColor}>{label}</AppText>
    </Pressable>
  );
}

export default Link;
