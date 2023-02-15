import {createFeedback} from 'apis/feedback';
import useFeedbackStore from '../stores/useFeedbackStore';

function useCreateFeedback() {
  const {isLike, content, clear} = useFeedbackStore();

  return async () => {
    await createFeedback({isLike, content});
    clear();
  };
}

export default useCreateFeedback;
