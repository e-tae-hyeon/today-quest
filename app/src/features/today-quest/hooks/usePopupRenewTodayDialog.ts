import {useNavigation} from '@react-navigation/native';
import useDialogStore from '@shared/stores/useDialogStore';
import type {TodayQuestType} from 'apis/types';
import {RootStackNavigationProps} from 'navigations/RootStack/types';
import {useEffect} from 'react';

function usePopupRenewTodayDialog(todayQuestType: TodayQuestType) {
  const {openDialog, setConfig, closeDialog} = useDialogStore();
  const {replace} = useNavigation<RootStackNavigationProps>();

  useEffect(() => {
    switch (todayQuestType) {
      case 'past':
        setConfig({
          title: '새로운 퀘스트를 받으세요 :)',
          description: '새로운 하루가 시작되었어요!',
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
  }, [todayQuestType]);
}

export default usePopupRenewTodayDialog;
