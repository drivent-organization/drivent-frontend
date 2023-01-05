import api from './api';

export async function signIn({ email, password, type }) {
  let param = '';
  if (type !== 'form') param = type;

  const response = await api.post(`/auth/sign-in/${param}`, { email, password });
  return response.data;
}
//
