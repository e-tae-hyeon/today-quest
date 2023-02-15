import {View} from 'react-native';
import React from 'react';
import useWriteStore from 'features/quest/store/useWriteStore';
import {WriteInput} from '../../module';

function WriteForm() {
  const {title, setTitle} = useWriteStore();

  return (
    <View>
      <WriteInput value={title} onChangeText={setTitle} />
    </View>
  );
}

export default WriteForm;
