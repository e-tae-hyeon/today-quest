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

export async function doneQuest(itemId: number, controller?: AbortController) {
  const res = await client.post(`/me/quests/${itemId}`, null, {
    signal: controller?.signal,
  });

  return res.data;
}

export async function undoneQuest(
  itemId: number,
  controller?: AbortController,
) {
  const res = await client.delete(`/me/quests/${itemId}`, {
    signal: controller?.signal,
  });

  return res.data;
}

export async function completeToday() {
  const res = await client.get('/me/quests/complete');

  return res.data;
}

export async function getNewTodayQuest() {
  const res = await client.get<TodayQuest>('/me/quests/new');

  return res.data;
}
