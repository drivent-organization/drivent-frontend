import api from './api';

export async function getHotelsData(token) {
  return api.get('/hotels', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function getHotelWithRooms(id, token) {
  const response = await api.get(`/hotels/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function upsertBooking({ data, token, bookingId }) {
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
    response = await api.put(`/booking/${bookingId}`, body, headers);
  }

  return response.data;
}
