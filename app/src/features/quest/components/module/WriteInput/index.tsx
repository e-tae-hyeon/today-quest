import {TextInput} from 'react-native';
import React from 'react';
import {typo} from '@shared/common/styles/typo';
import {AppText, Card, FlexGapContainer} from '@shared/components/base';
import colors from '@shared/common/styles/colors';

const MAX_LENGTH = 40;

type Props = {
  value: string;
  onChangeText: (value: string) => void;
};

function WriteInput({value, onChangeText}: Props) {
  const {fontFamily, fontSize} = typo.B1;

  return (
    <FlexGapContainer gapSize="small">
      <Card>
        <TextInput
          placeholder="누군가의 오늘을 위해 퀘스트를 작성해주세요!"
          placeholderTextColor={colors.gray[200]}
          value={value}
          onChangeText={onChangeText}
          maxLength={MAX_LENGTH}
          multiline
          autoFocus
          style={{fontFamily, fontSize}}
          className="py-4"
        />
      </Card>
      <AppText color={colors.gray[400]} typoStyle="B2" textAlign="right">
        {value.length}/{MAX_LENGTH}
      </AppText>
    </FlexGapContainer>
  );
}

export default WriteInput;
