import client from './@client';
import {GetQuestListResult} from './types';

export async function getQuestList(cursor?: number) {
  const res = await client.get<GetQuestListResult>('/quests', {
    params: {cursor},
  });

  return res.data;
}
