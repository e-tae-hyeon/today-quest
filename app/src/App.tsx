import {NavigationContainer} from '@react-navigation/native';
import {Toast} from '@shared/components/module';
import RootStack from 'navigations/RootStack';
import React from 'react';

function App() {
  return (
    <>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
      <Toast />
    </>
  );
}

export default App;
