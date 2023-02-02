import client from './@client';
import {AuthPayload, RegisterParams, VerifyEmailResult} from './types';

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

export async function register(params: RegisterParams) {
  const res = await client.post<AuthPayload>('/auth/register', params);

  return res.data;
}
