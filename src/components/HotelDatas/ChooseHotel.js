import useRooms from '../../hooks/api/useRooms';
import { HotelBox, HotelName, Info, Content } from './HotelBoxWrapper';

export default function ChooseHotel({ hotel, setReqInfo, setShowRooms, reqInfo }) {
  const { hotelWithRooms } = useRooms(hotel.id);
  const vacancies = calculateVacancies(hotelWithRooms);
  const accommodationType = nameAccommodationTypes(hotelWithRooms);
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
        <Content>
          <Info>Tipos de acomodação</Info>
          <Info detail={true}>{accommodationType}</Info>
        </Content>
        <Content>
          <Info>Vagas disponíveis</Info>
          <Info detail={true}>{vacancies}</Info>
        </Content>
      </HotelBox>
    </>
  );
}

function calculateVacancies(hotelWithRooms) {
  const roomsQuantity = hotelWithRooms?.Rooms.length;
  let vacancies = 0;
  for (let i = 0; i < roomsQuantity; i++) {
    vacancies += hotelWithRooms?.Rooms[i].vacancies;
  }
  return vacancies;
}

function nameAccommodationTypes(hotelWithRooms) {
  let single = '';
  let double = '';
  let triple = '';
  let accommodationArray = [];

  const roomsQuantity = hotelWithRooms?.Rooms.length;

  for (let i = 0; i < roomsQuantity; i++) {
    let roomCapacity = hotelWithRooms?.Rooms[i].capacity;
    if (roomCapacity === 1) {
      single = 'Single';
    }
    if (roomCapacity === 2) {
      double = 'Double';
    }
    if (roomCapacity > 2) {
      triple = 'Triple';
    }
  }

  if (single !== '') {
    accommodationArray.push(single);
  }
  if (double !== '') {
    accommodationArray.push(double);
  }
  if (triple !== '') {
    accommodationArray.push(triple);
  }

  if (accommodationArray.length === 1) {
    return accommodationArray[0];
  }

  if (accommodationArray.length === 2) {
    return accommodationArray.join(' e ');
  }

  if (accommodationArray.length > 2) {
    return 'Single, Double e Triple';
  }
}
