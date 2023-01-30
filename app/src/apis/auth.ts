import client from './@client';

export async function sendEmail(email: string) {
  const res = await client.post('/auth', {email});

  return res.data;
}
