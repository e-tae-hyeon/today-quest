import useToast from '@shared/hooks/useToast';
import {updateProfile as fetchUpdateProfile} from 'apis/me';
import {UpdateProfileParams} from 'apis/types';
import useProfileStore from 'features/auth/stores/useProfileStore';

function useUpdateProfile() {
  const setProfile = useProfileStore(store => store.setProfile);
  const {clearToast, showToast} = useToast();

  return async (form: UpdateProfileParams) => {
    const {nickname} = form;
    try {
      clearToast();
      const newProfile = await fetchUpdateProfile({nickname});
      setProfile(newProfile);
      showToast({
        type: 'success',
        title: '프로필 업데이트 성공 :)',
        description: '프로필이 업데이트 되었어요.',
      });
    } catch (err) {
      showToast({
        type: 'error',
        title: '프로필 업데이트 실패 :(',
        description: '잠시 후에 다시 시도해주세요.',
      });
    }
  };
}

export default useUpdateProfile;
