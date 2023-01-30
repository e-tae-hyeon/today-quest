import {User} from 'apis/types';
import {create} from 'zustand';

type State = {
  user: User | undefined;
};

type Actions = {
  setUser: (by: User) => void;
  clearUser: () => void;
};

const initialState: State = {
  user: undefined,
};

const useUserStore = create<State & Actions>()(set => ({
  ...initialState,
  setUser: by => set(state => ({...state, user: by})),
  clearUser: () => set(state => ({...state, user: initialState.user})),
}));

export default useUserStore;
