import useDialogStore from '@shared/stores/useDialogStore';
import {clearTokenClient} from 'apis/@client';
import authStorage from 'storages/authStorage';
import useProfileStore from '../stores/useProfileStore';

function useLogout() {
  const clearProfile = useProfileStore(store => store.clear);
  const {openDialog, closeDialog, setConfig} = useDialogStore();

  const logout = async () => {
    clearProfile();
    clearTokenClient();
    await authStorage.clear('tokens');
  };

  const popupLogoutDialog = () => {
    setConfig({
      title: '정말 로그아웃 하실건가요?',
      description: '아직 못다한 퀘스트가 남아있어요 :(',
      confirmLabel: '로그아웃',
      onCancel: closeDialog,
      onConfirm: () => {
        logout();
        closeDialog();
      },
    });
    openDialog();
  };

  return {logout, popupLogoutDialog};
}

export default useLogout;
