import {NavigationContainer} from '@react-navigation/native';
import {Toast} from '@shared/components/module';
import useFirstLaunch from '@shared/hooks/useFirstLaunch';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import useLoadUser from 'features/auth/hooks/useLoadUser';
import RootStack from 'navigations/RootStack';
import React, {useEffect} from 'react';

const queryClient = new QueryClient();

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
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </QueryClientProvider>
      <Toast />
    </>
  );
}

export default App;
