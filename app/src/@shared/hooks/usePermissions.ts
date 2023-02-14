import useDialogStore from '@shared/stores/useDialogStore';
import {Platform} from 'react-native';
import {
  AndroidPermission,
  check,
  IOSPermission,
  openSettings,
  request,
} from 'react-native-permissions';
import useToast from './useToast';

function usePermissions() {
  const {showToast} = useToast();
  const {openDialog, closeDialog, setConfig} = useDialogStore();

  const popupPermissionDialog = () => {
    setConfig({
      title: '권한이 필요한 서비스에요!',
      description: '권한을 허용해주세요.',
      confirmLabel: '설정하러가기',
      onCancel: closeDialog,
      onConfirm: () => {
        openSettings();
        closeDialog();
      },
    });
    openDialog();
  };

  const checkPermision = async (target: Permissions) => {
    const targetPermision = Platform.select({
      ios: iosPermissions[target],
      android: androidPermissions[target],
    });
    if (!targetPermision) return 'error';

    const checkStatus = await check(targetPermision);

    return checkStatus;
  };

  const handlePermision = async (target: Permissions) => {
    const checkStatus = await checkPermision(target);
    switch (checkStatus) {
      case 'granted':
        return true;
      case 'denied':
        request('ios.permission.PHOTO_LIBRARY');
        break;
      case 'blocked':
        popupPermissionDialog();
        break;
      case 'unavailable':
      case 'limited':
        showToast({
          type: 'error',
          title: '해당 디바이스에서 사용할 수 없어요 :(',
          description: '해당 디바이스에서 사용할 수 없는 기능입니다.',
        });
        break;
      default:
        break;
    }
    return false;
  };

  return {checkPermision, handlePermision};
}

export default usePermissions;

type Permissions = 'savePhoto';

const androidPermissions: Record<Permissions, AndroidPermission> = {
  savePhoto: 'android.permission.WRITE_EXTERNAL_STORAGE',
};
const iosPermissions: Record<Permissions, IOSPermission> = {
  savePhoto: 'ios.permission.PHOTO_LIBRARY',
};
