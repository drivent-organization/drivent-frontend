import useAsync from '../useAsync';
import useToken from '../useToken';

import * as activityApi from '../../services/activityApi';

export default function useActivities() {
  const token = useToken();

  const {
    data: activities,
    loading: activitiesLoading,
    error: activitiesError,
    act: getActivitiesByDate,
  } = useAsync((data) => activityApi.getActivitiesByDate(data, token), false);

  return {
    activities,
    activitiesLoading,
    activitiesError,
    getActivitiesByDate,
  };
}
