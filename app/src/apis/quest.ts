import client from './@client';
import {CreateQuestParams, GetQuestListResult, Quest} from './types';

export async function getQuestList(cursor?: number) {
  const res = await client.get<GetQuestListResult>('/quests', {
    params: {cursor},
  });

  return res.data;
}

export async function createQuest(params: CreateQuestParams) {
  const res = await client.post<Quest>('/quests', params);

  return res.data;
}
