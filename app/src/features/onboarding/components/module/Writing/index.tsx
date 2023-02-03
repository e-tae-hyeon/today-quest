import {View} from 'react-native';
import React from 'react';
import {AppText} from '@shared/components/base';

type Props = {
  contents: string[];
};

function Writing({contents}: Props) {
  return (
    <View>
      {contents.map((content, idx) => (
        <AppText typoStyle="H2" textAlign="center" key={idx}>
          {content}
        </AppText>
      ))}
    </View>
  );
}

export default Writing;
