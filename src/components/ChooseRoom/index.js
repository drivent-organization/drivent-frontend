import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { hotel } from './mockData';
import { BiUser } from 'react-icons/bi';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLayoutEffect } from 'react';

export default function ChooseRoom() {
  return (
    <>
      <StyledTypography variant="subtitle1">Ótima pedida! Agora escolha seu quarto:</StyledTypography>
      <Container>
        {hotel.Rooms.map((room) => (
          <Room>
            <em>{room.name}</em>
            {room.capacity === 1 ? (
              <span>
                <BiUser />
              </span>
            ) : room.capacity === 2 ? (
              <span>
                <BiUser />
                <BiUser />
              </span>
            ) : (
              <span>
                <BiUser />
                <BiUser />
                <BiUser />
              </span>
            )}
          </Room>
        ))}
      </Container>
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
  color: #8e8e8e;
  // background-color: #bab8de78;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  //background-color: #95424263;

  /*  @media (max-width: 600px) {
  
  }  */
`;

const Room = styled.div`
  width: 190px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  border: 1px solid #cecece;
  border-radius: 10px;
  //background-color: #64678363;
  margin-bottom: 10px;

  > span {
    font-size: 22px;
  }
`;
