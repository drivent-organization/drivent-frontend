import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import Button from '../Form/Button';
import { HotelBox, HotelName, Info, Content } from './HotelBoxWrapper';
import { useState, useEffect } from 'react';

export default function BookingData({ booking, setReqInfo, setShowRooms }) {
  const [capacity, setCapacity] = useState('');
  const [people, setPeople] = useState('');

  useEffect(() => {
    if (booking.Room.capacity === 1) setCapacity('Single');
    if (booking.Room.capacity === 2) setCapacity('Double');
    if (booking.Room.capacity === 3) setCapacity('Triple');

    if (booking.Room.bookings === 1) setPeople('Você');
    if (booking.Room.bookings === 2) setPeople('Você e mais 1');
    if (booking.Room.bookings === 3) setPeople('Você e mais 2');
  }, []);

  function updateBooking() {
    setReqInfo({
      hotelId: booking.Hotel.id,
      type: 'update',
      bookingId: booking.bookingId,
    });
    setShowRooms(true);
  }

  return (
    <>
      <StyledTypography variant="h6">Você já escolheu seu quarto:</StyledTypography>
      <HotelBox booking={true}>
        <img src={booking.Hotel.image} alt="" />
        <HotelName>{booking.Hotel.name}</HotelName>
        <Content>
          <Info>Quarto reservado</Info>
          <Info detail={true}>
            {booking.Room.name} ({capacity})
          </Info>
        </Content>
        <Content>
          <Info>Pessoas</Info>
          <Info detail={true}>{people}</Info>
        </Content>
      </HotelBox>
      <Button onClick={updateBooking}>TROCAR DE QUARTO</Button>
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
  color: #8e8e8e;
`;
