import useDialogStore from '@shared/stores/useDialogStore';
import {unregister as fetchUnregister} from 'apis/auth';
import useLogout from './useLogout';

function useUnregister() {
  const {logout} = useLogout();
  const {openDialog, closeDialog, setConfig} = useDialogStore();

  const unregister = () => {
    logout();
    fetchUnregister();
  };

  const popupUnregisterDialog = () => {
    setConfig({
      title: '정말 탈퇴 하실건가요?',
      description: '탈퇴하더라도 작성하신 퀘스트는 자동으로 삭제되지 않습니다.',
      confirmLabel: '회원탈퇴',
      onCancel: closeDialog,
      onConfirm: async () => {
        unregister();
        closeDialog();
      },
    });
    openDialog();
  };

  return {unregister, popupUnregisterDialog};
}

export default useUnregister;
