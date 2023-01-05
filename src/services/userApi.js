import api from './api';

export async function signUp({ email, password, type }) {
  let param = '';
  if (type !== 'form') param = type;

  const response = await api.post(`/users/${param}`, { email, password });
  return response.data;
}
//
