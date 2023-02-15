import {View} from 'react-native';
import React from 'react';
import {Layout} from '@shared/components/base';
import {ActionsHeader} from '@shared/components/module';
import {UpdateProfileForm} from 'features/my/components/template';

function UpdateProfileScreen() {
  return (
    <Layout>
      <ActionsHeader title="프로필 편집" />
      <View className="p-4">
        <UpdateProfileForm />
      </View>
    </Layout>
  );
}

export default UpdateProfileScreen;
