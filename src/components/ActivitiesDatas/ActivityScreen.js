import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import useDates from '../../hooks/api/useDates';
import PaymentRequirement from './PaymentRequirement';
import ShowEvents from './ShowEvents';
import { useState } from 'react';

export default function ActivityScreen({ isPaid }) {
  const { dates } = useDates();
  const [dateId, setDateId] = useState(0);

  return (
    <>
      {isPaid ? (
        <>
          {dateId === 0 && <StyledTypography variant="h6">Primeiro, filtre pelo dia do evento:</StyledTypography>}

          <DateBox>
            {dates?.map((date) => (
              <Date key={date.id} onClick={() => setDateId(date.id)} active={date.id === dateId ? true : false}>
                {date.name}
              </Date>
            ))}
          </DateBox>

          {dateId !== 0 && <ShowEvents dateId={dateId} />}
        </>
      ) : (
        <PaymentRequirement />
      )}
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
  color: #8e8e8e;
`;

const DateBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  flex-wrap: wrap;
`;

const Date = styled.div`
  width: auto;
  height: 37px;
  font-size: 14px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  border-radius: 8px;
  background-color: ${({ active }) => (active ? '#FFD37D' : '#e0e0e0')};
  cursor: pointer;
`;
