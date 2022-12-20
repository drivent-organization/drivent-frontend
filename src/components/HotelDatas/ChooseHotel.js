import { HotelBox, HotelName } from './HotelBoxWrapper';

export default function ChooseHotel({ hotel, setHotelId }) {
  return (
    <>
      <HotelBox onClick={() => setHotelId(hotel.id)}>
        <img src={hotel.image} alt="" />
        <HotelName variant="subtitle1">{hotel.name}</HotelName>
      </HotelBox>
    </>
  );
}
