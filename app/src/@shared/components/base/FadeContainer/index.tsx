import React from 'react';
import Animated, {FadeIn, FadeOut} from 'react-native-reanimated';

type Props = {
  children: React.ReactNode;
};

function FadeContainer({children}: Props) {
  return (
    <Animated.View entering={FadeIn} exiting={FadeOut}>
      {children}
    </Animated.View>
  );
}

export default FadeContainer;
