import {useNavigation} from '@react-navigation/native';
import useDialogStore from '@shared/stores/useDialogStore';
import {useQueryClient} from '@tanstack/react-query';
import {completeToday} from 'apis/me';
import {QuestStatus} from 'apis/types';
import {RootStackNavigationProps} from 'navigations/RootStack/types';
import {useEffect, useRef, useState} from 'react';
import useTodayQuestOverrideStore from '../stores/useTodayQuestOverrideStore';
import useTodayQuestQuery from './useTodayQuestQuery';

function useCompleteToday() {
  const overrides = useTodayQuestOverrideStore(store => store.overrides);
  const questMap = useRef(new Map<number, {status: QuestStatus}>()).current;
  const {quests, type} = useTodayQuestQuery();
  const [isComplete, setIsComplete] = useState(false);
  const {openDialog, closeDialog, setConfig} = useDialogStore();
  const {replace} = useNavigation<RootStackNavigationProps>();
  const queryClinet = useQueryClient();

  useEffect(() => {
    quests.forEach(quest => {
      questMap.set(quest.id, {
        status: overrides[quest.id]?.status ?? quest.status,
      });
    });
    const isDoneEvery = [...questMap.values()].every(
      quest => quest.status === 'done',
    );
    setIsComplete(isDoneEvery);
  }, [quests, type, overrides]);

  const popupCompleteDialog = () => {
    switch (type) {
      case 'doing':
        if (!isComplete) return;
        setConfig({
          title: '오늘의 퀘스트를 모두 완료했어요!',
          description: '오늘을 마무리 할까요?',
          cancelLabel: '좀 더 할래',
          confirmLabel: '끝낼래',
          onCancel: closeDialog,
          onConfirm: () => {
            closeDialog();
            replace('todayResult');
          },
        });
        openDialog();
        break;
      case 'past/doing':
        setConfig({
          title: '하루를 정리하세요 :)',
          description: '새로운 하루를 위해 하루를 정리하세요.',
          onConfirm: () => {
            closeDialog();
            replace('todayResult');
          },
        });
        openDialog();
        break;
      default:
        break;
    }
  };

  const complete = async () => {
    await completeToday();
    queryClinet.removeQueries(['todayQuest']);
    replace('mainTab');
  };

  return {isComplete, popupCompleteDialog, complete};
}

export default useCompleteToday;
