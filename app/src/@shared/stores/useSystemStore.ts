import systemStorage from 'storages/systemStorage';
import {create} from 'zustand';

type State = {
  isFirstLaunched: boolean;
};

type Actions = {
  loadIsFirstLaunched: () => void;
  launchFirst: () => void;
  clearFirstLaunched: () => void;
};

const initialState: State = {
  isFirstLaunched: true,
};

const useSystemStore = create<State & Actions>()(set => ({
  ...initialState,
  loadIsFirstLaunched: async () => {
    const value = await systemStorage.getIsFirstLaunched();
    set(state => ({...state, isFirstLaunched: value}));
  },
  launchFirst: async () => {
    await systemStorage.setIsFirstLaunched();
  },
  clearFirstLaunched: async () => {
    set(state => ({...state, isFirstLaunched: initialState.isFirstLaunched}));
    await systemStorage.clear('isFirstLaunched');
  },
}));

export default useSystemStore;
