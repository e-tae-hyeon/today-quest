import EncryptedStorage from 'react-native-encrypted-storage';

type Key = 'isFirstLaunched';

const systemStorage = {
  async setIsFirstLaunched() {
    try {
      await EncryptedStorage.setItem('isFirstLaunched', JSON.stringify(true));
    } catch (err) {
      //
    }
  },
  async getIsFirstLaunched() {
    try {
      const data = await EncryptedStorage.getItem('isFirstLaunched');
      if (!data) return true;
      return false;
    } catch (err) {
      //
      return true;
    }
  },
  async clear(key: Key) {
    try {
      await EncryptedStorage.removeItem(key);
    } catch (err) {
      //
    }
  },
};

export default systemStorage;
