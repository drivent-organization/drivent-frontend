import useAsync from '../useAsync';
import useToken from '../useToken';

import * as hotelApi from '../../services/hotelApi';

export default function useRooms(id) {
  const token = useToken();

  const {
    data: hotelWithRooms,
    loading: hotelWithRoomsLoading,
    error: hotelWithRoomsError,
  } = useAsync(() => hotelApi.getHotelWithRooms(id, token));

  return {
    hotelWithRooms,
    hotelWithRoomsLoading,
    hotelWithRoomsError,
  };
}
