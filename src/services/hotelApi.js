import api from './api';

export async function getHotelsData(token) {
  return api.get('/hotels', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function getHotelWithRooms(token) {
  const response = await api.get('/hotels/3', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function createBooking(body, token) {
  const response = await api.post('/booking', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
