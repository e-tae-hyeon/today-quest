import axios from 'axios';
import Config from 'react-native-config';

const {SERVER_URL} = Config;

const client = axios.create({
  baseURL: `${SERVER_URL}/api`,
  withCredentials: true,
});

export default client;
