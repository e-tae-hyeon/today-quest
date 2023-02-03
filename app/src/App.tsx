import {NavigationContainer} from '@react-navigation/native';
import {Toast} from '@shared/components/module';
import useFirstLaunch from '@shared/hooks/useFirstLaunch';
import useLoadUser from 'features/auth/hooks/useLoadUser';
import RootStack from 'navigations/RootStack';
import React, {useEffect} from 'react';

function App() {
  const {loadIsFirstLaunched} = useFirstLaunch();
  const loadUser = useLoadUser();

  useEffect(() => {
    const load = async () => {
      await loadIsFirstLaunched();
      await loadUser();
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
