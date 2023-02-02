import React from 'react';
import {FadeContainer} from '@shared/components/base';

type Props = {
  isVisible: boolean;
  children: React.ReactNode;
};

function ConditionalFadeContainer({isVisible, children}: Props) {
  if (!isVisible) return null;

  return <FadeContainer>{children}</FadeContainer>;
}

export default ConditionalFadeContainer;
