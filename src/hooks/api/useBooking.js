import useAsync from '../useAsync';
import useToken from '../useToken';

import * as hotelApi from '../../services/hotelApi';

export default function useBooking() {
  const token = useToken();

  const {
    loading: bookingLoading,
    error: bookingError,
    act: booking,
  } = useAsync((data) => hotelApi.createBooking(data, token), false);

  return {
    bookingLoading,
    bookingError,
    booking,
  };
}
