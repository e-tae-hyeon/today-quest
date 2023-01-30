import Toast from 'react-native-toast-message';

type ToastType = 'success' | 'error';

function useToast() {
  const showToast = ({
    type,
    title,
    description,
  }: {
    type: ToastType;
    title: string;
    description?: string;
  }) => {
    Toast.show({
      type,
      text1: title,
      text2: description,
    });
  };

  const clearToast = () => Toast.hide();

  return {showToast, clearToast};
}

export default useToast;
