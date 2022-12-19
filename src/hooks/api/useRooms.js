import useAsync from '../useAsync';
import useToken from '../useToken';

import * as hotelApi from '../../services/hotelApi';

export default function useRooms() {
  const token = useToken();

  const {
    data: hotelWithRooms,
    loading: hotelWithRoomsLoading,
    error: hotelWithRoomsError,
  } = useAsync(() => hotelApi.getHotelWithRooms(token));

  return {
    hotelWithRooms,
    hotelWithRoomsLoading,
    hotelWithRoomsError,
  };
}
