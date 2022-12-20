import api from './api';

export async function getPayment(token) {
  const response = await api.get('/payment', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function postPayment(token) {
  const response = await api.post('/payment', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function updatePayment(token) {
  const response = await api.put('/payment', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
