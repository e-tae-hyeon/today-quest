import {useNavigation} from '@react-navigation/native';
import useDialogStore from '@shared/stores/useDialogStore';
import {completeToday} from 'apis/me';
import {QuestStatus} from 'apis/types';
import {RootStackNavigationProps} from 'navigations/RootStack/types';
import {useEffect, useRef, useState} from 'react';
import useTodayQuestOverrideStore from '../stores/useTodayQuestOverrideStore';
import useTodayQuestQuery from './useTodayQuestQuery';

function useCompleteToday() {
  const {quests, type} = useTodayQuestQuery();
  const {openDialog, closeDialog, setConfig} = useDialogStore();
  const {replace} = useNavigation<RootStackNavigationProps>();
  const overrides = useTodayQuestOverrideStore(store => store.overrides);
  const questMap = useRef(new Map<number, {status: QuestStatus}>()).current;
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (type === 'doing') {
      quests.forEach(quest => {
        questMap.set(quest.id, {
          status: overrides[quest.id]?.status ?? quest.status,
        });
      });
      const isDoneEvery = [...questMap.values()].every(
        quest => quest.status === 'done',
      );
      setIsComplete(isDoneEvery);
    }
  }, [quests, type, overrides]);

  const popupCompleteDialog = () => {
    if (type === 'doing') {
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
    }
  };

  const complete = async () => {
    await completeToday();
    replace('mainTab');
  };

  return {isComplete, popupCompleteDialog, complete};
}

export default useCompleteToday;
