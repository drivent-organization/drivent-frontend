import api from './api';

export async function getActivitiesByDate(dateId, token) {
  const response = await api.get(`/activities/${dateId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
