import api from './api';

export async function getHotelsData(token) {
  return api.get('/hotels', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
