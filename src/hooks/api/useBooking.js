import useAsync from '../useAsync';
import useToken from '../useToken';

import * as hotelApi from '../../services/hotelApi';

export default function useBooking() {
  const token = useToken();

  const {
    loading: bookingLoading,
    error: bookingError,
    act: upsertBooking,
  } = useAsync((data) => hotelApi.upsertBooking(data, token), false);

  return {
    bookingLoading,
    bookingError,
    upsertBooking,
  };
}
