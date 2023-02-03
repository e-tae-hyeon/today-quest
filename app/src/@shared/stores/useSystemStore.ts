import {create} from 'zustand';

type State = {
  isFirstLaunched: boolean;
};

type Actions = {
  setIsFirstLaunched: (by: boolean) => void;
};

const initialState: State = {
  isFirstLaunched: true,
};

const useSystemStore = create<State & Actions>()(set => ({
  ...initialState,
  setIsFirstLaunched: by => set(state => ({...state, isFirstLaunched: by})),
}));

export default useSystemStore;
