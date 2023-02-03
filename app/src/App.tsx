import {NavigationContainer} from '@react-navigation/native';
import {Toast} from '@shared/components/module';
import useSystemStore from '@shared/stores/useSystemStore';
import RootStack from 'navigations/RootStack';
import React, {useEffect} from 'react';

function App() {
  const loadIsFirstLaunched = useSystemStore(
    store => store.loadIsFirstLaunched,
  );

  useEffect(() => {
    loadIsFirstLaunched();
  }, []);

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
