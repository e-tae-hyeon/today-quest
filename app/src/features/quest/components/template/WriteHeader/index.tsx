import React from 'react';
import {ActionsHeader} from '@shared/components/module';
import {Pressable} from 'react-native';
import {AppText} from '@shared/components/base';
import useCreateQuest from 'features/quest/hooks/useCreateQuest';

function Submit() {
  const createQuest = useCreateQuest();

  return (
    <Pressable onPress={createQuest}>
      <AppText>완료</AppText>
    </Pressable>
  );
}

function WriteHeader() {
  return <ActionsHeader right={<Submit />} />;
}

export default WriteHeader;
