import {NavigationContainer} from '@react-navigation/native';
import {Toast} from '@shared/components/module';
import useFirstLaunch from '@shared/hooks/useFirstLaunch';
import RootStack from 'navigations/RootStack';
import React, {useEffect} from 'react';

function App() {
  const {loadIsFirstLaunched} = useFirstLaunch();

  useEffect(() => {
    const load = async () => {
      await loadIsFirstLaunched();
    };
    load();
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
