import { HotelBox, HotelName } from './HotelBoxWrapper';

export default function ChooseHotel({ hotel, setReqInfo, setShowRooms }) {
  function handleClick() {
    setReqInfo({
      hotelId: hotel.id,
      type: 'create',
    });
    setShowRooms(true);
  }

  return (
    <>
      <HotelBox onClick={handleClick}>
        <img src={hotel.image} alt="" />
        <HotelName variant="subtitle1">{hotel.name}</HotelName>
      </HotelBox>
    </>
  );
}
