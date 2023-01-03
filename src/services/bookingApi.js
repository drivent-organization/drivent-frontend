import api from './api';

export async function upsertBooking(data, token) {
  const body = { roomId: data.roomId };
  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  let response;

  if (data.type === 'create') {
    response = await api.post('/booking', body, headers);
  } else {
    response = await api.put(`/booking/${data.bookingId}`, body, headers);
  }

  return response.data;
}

export async function getBooking(token) {
  const response = await api.get('/booking', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
