import useDialogStore from '@shared/stores/useDialogStore';
import {createFeedback as fetchCreateFeedback} from 'apis/feedback';
import useFeedbackStore from '../stores/useFeedbackStore';

function useCreateFeedback() {
  const {isLike, content, clear} = useFeedbackStore();
  const {openDialog, closeDialog, setConfig} = useDialogStore();

  const popupThanksDialog = () => {
    setConfig({
      title: '피드백 감사합니다 :)',
      description: '더 좋은 오늘의 퀘스트가 되도록 노력할게요.',
      confirmLabel: '닫기',
      onConfirm: () => {
        closeDialog();
        // if (isLike) popupTriggerReviewDialog();
      },
    });
    openDialog();
  };

  // const popupTriggerReviewDialog = () => {
  //   setConfig({
  //     title: '리뷰를 남겨주세요 :)',
  //     description: '오늘의 퀘스트가 만족스러우셨다면 리뷰를 남겨주세요.',
  //     cancelLabel: '다음에',
  //     confirmLabel: '리뷰 남기기',
  //     onCancel: closeDialog,
  //     onConfirm: () => {
  //       closeDialog();
  //     },
  //   });
  //   openDialog();
  // };

  const createFeedback = async () => {
    await fetchCreateFeedback({isLike, content});
    popupThanksDialog();
    clear();
  };

  return createFeedback;
}

export default useCreateFeedback;
