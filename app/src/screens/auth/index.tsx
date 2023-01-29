import React from 'react';
import {Layout} from '@shared/components/base';
import {AuthActions, MainDoor} from 'features/auth/components/template';

function AuthScreen() {
  return (
    <Layout>
      <MainDoor />
      <AuthActions />
    </Layout>
  );
}

export default AuthScreen;
