import {Tokens} from 'apis/types';
import EncryptedStorage from 'react-native-encrypted-storage';

type Key = 'tokens';

const authStorage = {
  async setTokens(tokens: Tokens) {
    try {
      await EncryptedStorage.setItem('tokens', JSON.stringify(tokens));
    } catch (err) {
      //
    }
  },
  async getTokens() {
    try {
      const data = await EncryptedStorage.getItem('tokens');

      if (!data) return undefined;

      return JSON.parse(data) as Tokens;
    } catch (err) {
      //
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

export default authStorage;
