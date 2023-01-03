import useAsync from '../useAsync';
import useToken from '../useToken';

import * as bookingApi from '../../services/bookingApi';

export default function useSaveBooking() {
  const token = useToken();

  const {
    loading: bookingLoading,
    error: bookingError,
    act: upsertBooking,
  } = useAsync((data) => bookingApi.upsertBooking(data, token), false);

  return {
    bookingLoading,
    bookingError,
    upsertBooking,
  };
}
