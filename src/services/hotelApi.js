import api from './api';

export async function getHotelsData(token) {
  const response = await api.get('/hotels', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function getHotelWithRooms(hotelId, token) {
  const response = await api.get(`/hotels/${hotelId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

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
  //TODO
  const response = await api.get('/booking', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
