import useSystemStore from '@shared/stores/useSystemStore';
import systemStorage from 'storages/systemStorage';

function useFirstLaunch() {
  const setIsFirstLaunched = useSystemStore(store => store.setIsFirstLaunched);

  const loadIsFirstLaunched = async () => {
    const isFirst = await systemStorage.getIsFirstLaunched();
    setIsFirstLaunched(isFirst);
  };

  const launchFirst = async () => {
    await systemStorage.setIsFirstLaunched();
  };

  const clearIsFirstLaunched = async () => {
    setIsFirstLaunched(false);
    await systemStorage.clear('isFirstLaunched');
  };

  return {loadIsFirstLaunched, launchFirst, clearIsFirstLaunched};
}

export default useFirstLaunch;
