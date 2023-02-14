import React from 'react';
import {ActionsHeader} from '@shared/components/module';
import {Pressable} from 'react-native';
import {AppText} from '@shared/components/base';

function Submit() {
  return (
    <Pressable>
      <AppText>완료</AppText>
    </Pressable>
  );
}

function WriteHeader() {
  return <ActionsHeader right={<Submit />} />;
}

export default WriteHeader;
