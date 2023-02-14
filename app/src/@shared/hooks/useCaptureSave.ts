import {CameraRoll} from '@react-native-camera-roll/camera-roll';
import {useRef} from 'react';
import ViewShot from 'react-native-view-shot';
import usePermissions from './usePermissions';
import useToast from './useToast';

function useCaptureSave() {
  const ref = useRef<ViewShot>(null);
  const {clearToast, showToast} = useToast();
  const {handlePermision} = usePermissions();

  const showErrorToast = () =>
    showToast({
      type: 'error',
      title: '이미지 저장 실패 :(',
      description: '잠시 후에 다시 시도해주세요.',
    });

  const showSuccessToast = () => {
    showToast({
      type: 'success',
      title: '이미지 저장 성공 :)',
      description: '갤러리에서 이미지를 확인하세요.',
    });
  };

  const capture = async () => {
    try {
      clearToast();
      if (!ref.current?.capture) return;
      const uri = await ref.current.capture();
      return uri;
    } catch (err) {
      showErrorToast();
    }
  };

  const captureSave = async () => {
    try {
      clearToast();
      const isAble = await handlePermision('savePhoto');
      if (!isAble) return;

      const uri = await capture();
      if (!uri) return;

      await CameraRoll.save(uri);
      showSuccessToast();
    } catch (err) {
      showErrorToast();
    }
  };

  return {ref, captureSave};
}

export default useCaptureSave;
