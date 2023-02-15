import React from 'react';
import {Edge, SafeAreaView} from 'react-native-safe-area-context';

type Props = {
  edges?: Edge[];
  children: React.ReactNode;
};

function Layout({edges, children}: Props) {
  return (
    <SafeAreaView edges={edges} className="flex-1 bg-white">
      {children}
    </SafeAreaView>
  );
}

export default Layout;
