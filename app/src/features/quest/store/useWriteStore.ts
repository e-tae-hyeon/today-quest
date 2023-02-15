import {create} from 'zustand';

type State = {
  title: string;
};

type Actions = {
  setTitle: (by: string) => void;
  clearTitle: () => void;
};

const initialState: State = {
  title: '',
};

const useWriteStore = create<State & Actions>()(set => ({
  ...initialState,
  setTitle: by => set(state => ({...state, title: by})),
  clearTitle: () => set(state => ({...state, title: initialState.title})),
}));

export default useWriteStore;
