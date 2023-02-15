import {useNavigation} from '@react-navigation/native';
import useToast from '@shared/hooks/useToast';
import {useQueryClient} from '@tanstack/react-query';
import {createQuest as fetchCreateQuest} from 'apis/quest';
import {RootStackNavigationProps} from 'navigations/RootStack/types';
import useWriteStore from '../store/useWriteStore';

function useCreateQuest() {
  const {title, clearTitle} = useWriteStore();
  const {navigate} = useNavigation<RootStackNavigationProps>();
  const queryClinet = useQueryClient();
  const {showToast, clearToast} = useToast();

  return async () => {
    try {
      clearToast();
      await fetchCreateQuest({title});
      queryClinet.invalidateQueries(['questList']);
      navigate('mainTab');
      clearTitle();
    } catch (err) {
      showToast({
        type: 'error',
        title: '퀘스트 작성 실패 :(',
        description: '잠시 후에 다시 시도해주세요.',
      });
    }
  };
}

export default useCreateQuest;
