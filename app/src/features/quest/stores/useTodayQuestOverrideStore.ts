import {QuestStatus} from 'apis/types';
import {create} from 'zustand';

type OverrideItem = {
  status?: QuestStatus;
};

type State = {
  overrides: {
    [itemId: number]: OverrideItem;
  };
};

type Actions = {
  set: (by: {itemId: number; overrideItem: OverrideItem}) => void;
};

const initialState: State = {
  overrides: [],
};

const useTodayQuestOverrideStore = create<State & Actions>()(set => ({
  ...initialState,
  set: by =>
    set(state => ({
      ...state,
      overrides: {
        ...state.overrides,
        [by.itemId]: {...state.overrides[by.itemId], ...by.overrideItem},
      },
    })),
}));

export default useTodayQuestOverrideStore;

export function useTodayQuestOverrideByid(itemId: number) {
  const overrides = useTodayQuestOverrideStore(store => store.overrides);
  return overrides[itemId];
}
