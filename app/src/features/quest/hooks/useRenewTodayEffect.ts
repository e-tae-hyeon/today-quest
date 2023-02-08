import useDialogStore from '@shared/stores/useDialogStore';
import type {TodayQuestType} from 'apis/types';
import {useEffect} from 'react';

function useRenewTodayEffect(todayQuestType: TodayQuestType | 'error') {
  const {openDialog, setConfig} = useDialogStore();

  useEffect(() => {
    if (todayQuestType === 'past') {
      setConfig({
        title: '새로운 퀘스트를 받으세요 :)',
        description: '새로운 하루가 시작되었어요!',
        onConfirm: () => {},
      });
      openDialog();
    }

    if (todayQuestType === 'error') {
      setConfig({
        title: '오류가 발생했어요 :(',
        description: '앱을 재시작해주세요.',
        onConfirm: () => {},
      });
    }
  }, [todayQuestType]);
}

export default useRenewTodayEffect;
