import useAsync from '../useAsync';
import useToken from '../useToken';

import * as activityApi from '../../services/activityApi';

export default function usePlaces() {
  const token = useToken();

  const { data: places, loading: placesLoading, error: placesError } = useAsync(() => activityApi.getPlaces(token));

  return {
    places,
    placesLoading,
    placesError,
  };
}
