import api from './api';

export async function signUp({ email, password, type }) {
  let oAuth = '';
  if (type !== 'form') oAuth = type;

  const response = await api.post(`/users/${oAuth}`, { email, password });
  return response.data;
}
