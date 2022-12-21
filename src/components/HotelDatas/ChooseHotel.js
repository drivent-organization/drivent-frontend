import { HotelBox, HotelName } from './HotelBoxWrapper';

export default function ChooseHotel({ hotel, setReqInfo, reqInfo, setShowRooms }) {
  function handleClick() {
    reqInfo.hotelId = hotel.id;
    reqInfo.type = 'create';

    setReqInfo({ ...reqInfo });
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
