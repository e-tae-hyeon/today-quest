import {doneQuest, undoneQuest} from 'apis/me';
import {useRef} from 'react';
import useTodayQuestOverrideStore from '../stores/useTodayQuestOverrideStore';

function useDoneQuestManager() {
  const {set} = useTodayQuestOverrideStore();
  const abortControllers = useRef(new Map<number, AbortController>()).current;

  const done = async (itemId: number) => {
    const prevController = abortControllers.get(itemId);

    try {
      prevController?.abort();
      set({
        itemId,
        overrideItem: {status: 'done'},
      });

      const controller = new AbortController();
      abortControllers.set(itemId, controller);
      await doneQuest(itemId, controller);
      abortControllers.delete(itemId);
    } catch (err) {
      /** @todo handle error */
    }
  };

  const undone = async (itemId: number) => {
    const prevController = abortControllers.get(itemId);
    try {
      prevController?.abort();
      set({
        itemId,
        overrideItem: {status: 'doing'},
      });

      const controller = new AbortController();
      abortControllers.set(itemId, controller);
      await undoneQuest(itemId, controller);
      abortControllers.delete(itemId);
    } catch (err) {
      /** @todo handle error */
    }
  };

  return {done, undone};
}

export default useDoneQuestManager;
