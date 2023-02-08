import client from './@client';
import {TodayQuest, UpdateProfileParams, User} from './types';

export async function getMe() {
  const res = await client.get<User>('/me');

  return res.data;
}

export async function updateProfile(params: UpdateProfileParams) {
  const res = await client.put('/me/profile', params);

  return res.data;
}

export async function getMyTodayQuests() {
  const res = await client.get<TodayQuest>('/me/quests');

  return res.data;
}
