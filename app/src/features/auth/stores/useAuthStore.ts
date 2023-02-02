import {create} from 'zustand';

type State = {
  email: string;
  code: string;
};

type Actions = {
  setEmail: (by: string) => void;
  clearEmail: () => void;
  setCode: (by: string) => void;
  clearCode: () => void;
};

const intialState: State = {
  email: '',
  code: '',
};

const useAuthStore = create<State & Actions>()(set => ({
  ...intialState,
  setEmail: by => set(state => ({...state, email: by})),
  clearEmail: () => set(state => ({...state, email: intialState.email})),
  setCode: by => set(state => ({...state, code: by})),
  clearCode: () => set(state => ({...state, code: intialState.code})),
}));

export default useAuthStore;
