import useAsync from '../useAsync';
import useToken from '../useToken';
import * as activityApi from '../../services/activityApi';

export default function useSaveActivities() {
  const token = useToken();

  const {
    loading: saveActivityLoading,
    error: saveActivityError,
    act: saveActivity,
  } = useAsync((data) => activityApi.save(data, token), false);

  return {
    saveActivityLoading,
    saveActivityError,
    saveActivity,
  };
}
