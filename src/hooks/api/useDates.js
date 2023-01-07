import useAsync from '../useAsync';
import useToken from '../useToken';

import * as activityApi from '../../services/activityApi';

export default function useDates() {
  const token = useToken();

  const { data: dates, loading: datesLoading, error: datesError } = useAsync(() => activityApi.getDates(token));

  return {
    dates,
    datesLoading,
    datesError,
  };
}
