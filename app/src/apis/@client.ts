import axios from 'axios';
import Config from 'react-native-config';

const {SERVER_URL} = Config;

const client = axios.create({
  baseURL: `${SERVER_URL}/api`,
  withCredentials: true,
});

export default client;

export function applyAuthClient(accessToken: string) {
  client.defaults.headers.Authorization = `Bearer ${accessToken}`;
}

export function clearAuthClient() {
  client.defaults.headers.Authorization = '';
}
