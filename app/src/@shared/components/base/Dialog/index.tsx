import {View} from 'react-native';
import React from 'react';
import colors from '@shared/common/styles/colors';
import AppText from '../AppText';
import FlexGapContainer from '../FlexGapContainer';
import Button from '../Button';
import Overlay from '../Overlay';

export type DialogConfig = {
  title: string;
  description?: string;
  cancelLabel?: string;
  confirmLabel?: string;
  onCancel?: () => void;
  onConfirm: () => void;
};

type Props = DialogConfig & {
  isVisible: boolean;
};

function Dialog({
  isVisible,
  title,
  description,
  cancelLabel,
  confirmLabel,
  onCancel,
  onConfirm,
}: Props) {
  if (!isVisible) return null;

  return (
    <>
      <Overlay />
      <View className="absolute inset-0 items-center justify-center">
        <View className="p-8 bg-white rounded-lg w-[85vw]">
          <FlexGapContainer>
            <FlexGapContainer gapSize="small">
              <AppText typoStyle="H3">{title}</AppText>
              <AppText color={colors.gray[400]}>{description}</AppText>
            </FlexGapContainer>
            <FlexGapContainer direction="row">
              {onCancel && (
                <Button
                  label={cancelLabel ?? '취소'}
                  onPress={onCancel}
                  theme="secondary"
                  isFit={false}
                />
              )}
              <Button
                label={confirmLabel ?? '확인'}
                onPress={onConfirm}
                isFit={false}
              />
            </FlexGapContainer>
          </FlexGapContainer>
        </View>
      </View>
    </>
  );
}

export default Dialog;
