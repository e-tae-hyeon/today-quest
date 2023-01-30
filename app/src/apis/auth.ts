import client from './@client';
import {VerifyEmailResult} from './types';

export async function sendEmail(email: string) {
  const res = await client.post('/auth', {email});

  return res.data;
}

export async function verifyEmail({
  email,
  code,
}: {
  email: string;
  code: number;
}) {
  const res = await client.post<VerifyEmailResult>('/auth/verify-email', {
    email,
    code,
  });

  return res.data;
}
