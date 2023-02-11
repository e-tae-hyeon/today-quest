import {useNavigation} from '@react-navigation/native';
import useDialogStore from '@shared/stores/useDialogStore';
import type {TodayQuestType} from 'apis/types';
import {RootStackNavigationProps} from 'navigations/RootStack/types';
import {useEffect} from 'react';

function usePopupRenewTodayDialog(todayQuestType: TodayQuestType | 'error') {
  const {openDialog, setConfig, closeDialog} = useDialogStore();
  const {navigate} = useNavigation<RootStackNavigationProps>();

  useEffect(() => {
    if (todayQuestType === 'past') {
      setConfig({
        title: '새로운 퀘스트를 받으세요 :)',
        description: '새로운 하루가 시작되었어요!',
        onConfirm: () => {
          closeDialog();
          navigate('todayResult');
        },
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

export default usePopupRenewTodayDialog;
