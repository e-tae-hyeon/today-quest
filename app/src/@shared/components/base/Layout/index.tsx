import React from 'react';
import {Edge, SafeAreaView} from 'react-native-safe-area-context';

type Props = {
  exceptSafeAreas?: Edge[];
  children: React.ReactNode;
};

function Layout({exceptSafeAreas, children}: Props) {
  return (
    <SafeAreaView edges={exceptSafeAreas} className="flex-1 p-4 bg-white">
      {children}
    </SafeAreaView>
  );
}

export default Layout;
