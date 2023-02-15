import client from './@client';
import {CreateFeedbackParams} from './types';

export async function createFeedback(params: CreateFeedbackParams) {
  const res = await client.post('/feedback', params);

  return res.data;
}
