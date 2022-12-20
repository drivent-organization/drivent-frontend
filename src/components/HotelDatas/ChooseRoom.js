import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { useEffect, useState } from 'react';
import Button from '../Form/Button';
import useRooms from '../../hooks/api/useRooms';
import { toast } from 'react-toastify';
import useBooking from '../../hooks/api/useBooking';
import Rooms from './Rooms';

export default function ChooseRoom({ setIsBooked, hotelId }) {
  const { hotelWithRooms } = useRooms(hotelId);
  const { booking, bookingLoading } = useBooking();

  const [roomId, setRoomId] = useState(0);
  const [roomState, setRoomState] = useState([]);

  useEffect(() => {
    const states = new Array(hotelWithRooms?.Rooms.length).fill(false);
    setRoomState(states);
  }, [hotelWithRooms]);

  async function submit(event) {
    event.preventDefault();

    try {
      if (roomId === 0) return;

      const id = await booking({ roomId });
      setIsBooked(id);
      toast('Reserva realizada com sucesso!');
    } catch (err) {
      toast('Não foi possível fazer a reserva!');
    }
  }

  return (
    <>
      <StyledTypography variant="h6">Ótima pedida! Agora escolha seu quarto:</StyledTypography>
      <Container>
        {hotelWithRooms?.Rooms.map((room, index) => (
          <Rooms
            key={room.id}
            bookings={room.Booking.length}
            vacancies={room.vacancies}
            name={room.name}
            id={room.id}
            setRoomId={setRoomId}
            currIndex={index}
            roomState={roomState}
            setRoomState={setRoomState}
          />
        ))}
      </Container>
      <Button onClick={submit} disabled={bookingLoading}>
        RESERVAR QUARTO
      </Button>
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
  color: #8e8e8e;
`;

const Container = styled.div`
  width: max-content;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  column-gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 30px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 810px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 430px) {
    width: auto;
    display: flex;
  }
`;
