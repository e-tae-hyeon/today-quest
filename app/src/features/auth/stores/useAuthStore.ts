import {RegisterParams} from 'apis/types';
import {create} from 'zustand';

type State = {
  email: string;
  code: string;
  registerTemp: RegisterParams | null;
};

type Actions = {
  setEmail: (by: string) => void;
  clearEmail: () => void;
  setCode: (by: string) => void;
  clearCode: () => void;
  setRegisterTemp: (by: RegisterParams) => void;
  clearRegisterTemp: () => void;
};

const initialState: State = {
  email: '',
  code: '',
  registerTemp: null,
};

const useAuthStore = create<State & Actions>()(set => ({
  ...initialState,
  setEmail: by => set(state => ({...state, email: by})),
  clearEmail: () => set(state => ({...state, email: initialState.email})),
  setCode: by => set(state => ({...state, code: by})),
  clearCode: () => set(state => ({...state, code: initialState.code})),
  setRegisterTemp: by => set(state => ({...state, registerTemp: by})),
  clearRegisterTemp: () =>
    set(state => ({...state, registerTemp: initialState.registerTemp})),
}));

export default useAuthStore;
