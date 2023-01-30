import {create} from 'zustand';

type State = {
  email: string;
  code: string;
};

type Actions = {
  setEmail: (by: string) => void;
  setCode: (by: string) => void;
};

const intialState: State = {
  email: '',
  code: '',
};

const useAuthStore = create<State & Actions>()(set => ({
  ...intialState,
  setEmail: by => set(state => ({...state, email: by})),
  setCode: by => set(state => ({...state, code: by})),
}));

export default useAuthStore;
