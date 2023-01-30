import {Tokens} from 'apis/types';
import EncryptedStorage from 'react-native-encrypted-storage';

const KEY = 'AUTH';

const authStorage = {
  async set(tokens: Tokens) {
    try {
      await EncryptedStorage.setItem(KEY, JSON.stringify(tokens));
    } catch (err) {
      //
    }
  },
  async get() {
    try {
      const data = await EncryptedStorage.getItem(KEY);

      if (!data) return undefined;

      return JSON.parse(data) as Tokens;
    } catch (err) {
      //
    }
  },
  async clear() {
    try {
      await EncryptedStorage.removeItem(KEY);
    } catch (err) {
      //
    }
  },
};

export default authStorage;
