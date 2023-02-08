import React from 'react';
import {Dialog} from '@shared/components/base';
import useDialogStore from '@shared/stores/useDialogStore';

function GlobalDialog() {
  const {isVisible, config} = useDialogStore();

  if (!config) return null;

  return <Dialog isVisible={isVisible} {...config} />;
}

export default GlobalDialog;
