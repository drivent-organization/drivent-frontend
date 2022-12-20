import useToken from '../../../hooks/useToken';
import { getHotelsData } from '../../../services/hotelApi';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

export default function Hotel() {
  const token = useToken();
  const [hotelMessage, setHotelMessage] = useState('');
  const [hotels, setHotels] = useState([]);
  function loadHotelDatas() {
    const promise = getHotelsData(token);
    promise.then((answer) => {
      setHotels(answer.data);
    });
    promise.catch((answer) => {
      if (answer.response.status === 402 || answer.response.status === 404) {
        setHotelMessage('Você precisa ter confirmado pagamento antes de fazer a escolha de hospedagem');
      }
      if (answer.response.status === 401) {
        setHotelMessage('Sua modalidade de ingresso não inclui hospedagem. Prossiga para a escolha de atividades');
      }
    });
  }

  useEffect(() => {
    loadHotelDatas();
  }, []);

  return <HotelDatas hotelMessage={hotelMessage} hotels={hotels} />;
}

function HotelDatas({ hotelMessage, hotels }) {
  return (
    <>
      <StyledTypography variant="h4">Escolha de hotel e quarto</StyledTypography>
      <Container>
        {hotels.length === 0 ? (
          <HotelMessage variant="subtitle1" color="textSecondary">
            {hotelMessage}
          </HotelMessage>
        ) : (
          hotels.map((hotel, index) => <HotelEntity hotel={hotel} key={index} />)
        )}
      </Container>
    </>
  );
}

function HotelEntity({ hotel, key }) {
  return (
    <>
      <HotelBox>
        <img src={hotel.image} />
        <HotelName variant="subtitle1">{hotel.name}</HotelName>
      </HotelBox>
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;

const HotelMessage = styled(Typography)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70%;
  word-break: break-all;
`;

const HotelName = styled(Typography)``;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const HotelBox = styled.div`
  width: 200px;
  height: 264px;
  background-color: #ebebeb;
  border-radius: 10px;
  margin-right: 20px;
  padding: 10px;
  img {
    display: flex;
    justify-content: center;
    width: 180px;
    height: 110px;
    border-radius: 5px;
    margin-bottom: 5px;
  }
`;
