import client from './@client';
import {UpdateProfileParams} from './types';

export async function getMyProfile() {
  const res = await client.get('/me');

  return res.data;
}

export async function updateProfile(params: UpdateProfileParams) {
  const res = await client.put('/me/profile', params);

  return res.data;
}
