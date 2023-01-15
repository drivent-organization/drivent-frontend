import api from './api';

export async function getActivitiesByDate(dateId, token) {
  const response = await api.get(`/activities/${dateId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function getPlaces(token) {
  const response = await api.get('/activities/places', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function getDates(token) {
  const response = await api.get('/activities', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function save(body, token) {
  const response = await api.post('/activities/process', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
