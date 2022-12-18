import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { hotel } from './mockData';
import { IoPersonOutline, IoPerson } from 'react-icons/io5';
import { useState } from 'react';

function Room({ vacancies, bookings, name }) {
  const free = [];
  for (let i = 0; i < vacancies; i++) free.push(i);

  const occupied = [];
  for (let i = 0; i < bookings; i++) occupied.push(i);

  const [selected, setSelected] = useState(false);
  const handleClick = (vacancies) => {
    if (vacancies !== 0) setSelected(!selected);
  };

  return (
    <StyledRoom onClick={() => handleClick(vacancies)} selected={selected} vacancies={vacancies}>
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
  return (
    <>
      <StyledTypography variant="subtitle1">Ótima pedida! Agora escolha seu quarto:</StyledTypography>
      <Container>
        {hotel.Rooms.map((room) => (
          <Room key={room.id} bookings={room.Booking.length} vacancies={room.vacancies} name={room.name} />
        ))}
      </Container>
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
  color: #8e8e8e;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 797px) {
    justify-content: center;
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
