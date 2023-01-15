import api from './api';

export async function signIn({ email, password, type }) {
  let oAuth = '';
  if (type !== 'form') oAuth = type;

  const response = await api.post(`/auth/sign-in/${oAuth}`, { email, password });
  return response.data;
}
