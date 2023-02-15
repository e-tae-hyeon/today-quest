import {Profile} from 'apis/types';
import {create} from 'zustand';

type State = {
  profile: Profile | undefined;
  finishedQuestCount: number;
};

type Actions = {
  setProfile: (by: Profile) => void;
  setFinishedQuestCount: (by: number) => void;
  clear: () => void;
};

const initialState: State = {
  profile: undefined,
  finishedQuestCount: 0,
};

const useProfileStore = create<State & Actions>()(set => ({
  ...initialState,
  setProfile: by => set(state => ({...state, profile: by})),
  setFinishedQuestCount: by =>
    set(state => ({...state, finishedQuestCount: by})),
  clear: () => set(initialState),
}));

export default useProfileStore;
