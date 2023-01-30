import React from 'react';
import ToastProvider, {BaseToastProps} from 'react-native-toast-message';
import {BaseToast} from '@shared/components/base';

const config = {
  success: ({text1, text2, onPress}: BaseToastProps) => (
    <BaseToast
      type="success"
      title={text1!}
      description={text2}
      onPress={onPress}
    />
  ),
  error: ({text1, text2, onPress}: BaseToastProps) => (
    <BaseToast
      type="error"
      title={text1!}
      description={text2}
      onPress={onPress}
    />
  ),
};

function Toast() {
  return (
    <ToastProvider
      config={config}
      position="bottom"
      bottomOffset={65}
      keyboardOffset={0}
    />
  );
}

export default Toast;
