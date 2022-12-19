import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { IoPersonOutline, IoPerson } from 'react-icons/io5';
import { useEffect, useState } from 'react';
import Button from '../Form/Button';
import useRooms from '../../hooks/api/useRooms';
import { toast } from 'react-toastify';
import useBooking from '../../hooks/api/useBooking';

function Room({ vacancies, bookings, name, id, setRoomId /* , selected, setSelected */ }) {
  const free = [];
  for (let i = 0; i < vacancies; i++) free.push(i);

  const occupied = [];
  for (let i = 0; i < bookings; i++) occupied.push(i);

  const [selected, setSelected] = useState(false);

  const handleClick = (e) => {
    if (vacancies === 0) return;

    /*  const selectedRoom = document.querySelector('.selected');
    if (selectedRoom !== null) {
      selectedRoom.classList.remove('selected');
    } 
    console.log(selectedRoom);*/

    setSelected(!selected);
  };

  useEffect(() => {
    if (selected) setRoomId(id);
    else setRoomId(0);
  }, [selected]);

  return (
    <StyledRoom onClick={(e) => handleClick(e)} selected={selected} vacancies={vacancies}>
      <em>{name}</em>
      <span>
        {selected && (
          <>
            {free.slice(0, -1).map((i) => (
              <IoPersonOutline key={i} />
            ))}
            <IoPerson fill="#FF4791" />
          </>
        )}
        {!selected && free.map((i) => <IoPersonOutline key={i} />)}
        {occupied.map((i) => (
          <IoPerson key={i} />
        ))}
      </span>
    </StyledRoom>
  );
}

export default function ChooseRoom() {
  const { hotelWithRooms } = useRooms();
  const [roomId, setRoomId] = useState(0);
  const [bookingId, setBookingId] = useState(0);
  const { booking, bookingLoading } = useBooking();

  // const [selected, setSelected] = useState(Array(hotelWithRooms.Rooms.length).fill(false));

  async function submit(event) {
    event.preventDefault();

    try {
      if (roomId !== 0) {
        const id = await booking({ roomId });
        setBookingId(id);
        toast('Reserva realizada com sucesso!');
      }
    } catch (err) {
      toast('Não foi possível fazer a reserva!');
    }
  }

  //console.log(roomId, bookingId);
  return (
    <>
      <StyledTypography variant="subtitle1">Ótima pedida! Agora escolha seu quarto:</StyledTypography>
      <Container>
        {hotelWithRooms?.Rooms.map((room) => (
          <Room
            key={room.id}
            bookings={room.Booking.length}
            vacancies={room.vacancies}
            name={room.name}
            id={room.id}
            setRoomId={setRoomId}
            /*   selected={selected}
            setSelected={setSelected} */
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

const StyledRoom = styled.div`
  width: 190px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 16px;
  border: 1px solid #cecece;
  border-radius: 10px;
  margin-bottom: 10px;
  opacity: 1;
  background-color: transparent;
  cursor: pointer;

  > span {
    font-size: 22px;
  }

  ${({ vacancies, selected }) => {
    if (vacancies === 0) {
      return `
        opacity: 0.6;
        background-color: #E9E9E9;
      `;
    }
    if (selected) {
      return `
        background-color: #FFEED2;
      `;
    }
  }}
`;
