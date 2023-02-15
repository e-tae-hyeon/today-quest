import {create} from 'zustand';

type State = {
  isLike: boolean;
  content?: string;
};

type Actions = {
  setIsLike: (by: boolean) => void;
  setContent: (by: string) => void;
  clear: () => void;
};

const initialState: State = {
  isLike: true,
  content: '',
};

const useFeedbackStore = create<State & Actions>()(set => ({
  ...initialState,
  setIsLike: by => set(state => ({...state, isLike: by})),
  setContent: by => set(state => ({...state, content: by})),
  clear: () => set(initialState),
}));

export default useFeedbackStore;
