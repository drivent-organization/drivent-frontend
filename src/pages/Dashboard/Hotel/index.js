import useToken from '../../../hooks/useToken';
import { getHotelsData } from '../../../services/hotelApi';
import { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

export default function Hotel() {
  const token = useToken();
  const [hotelMessage, setHotelMessage] = useState('');
  function loadHotelDatas() {
    const promise = getHotelsData(token);
    promise.then((answer) => {
      console.log(answer, 'deu bom');
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

  return <HotelDatas hotelMessage={hotelMessage} />;
}

function HotelDatas({ hotelMessage }) {
  return (
    <>
      <StyledTypography variant="h4">Escolha de hotel e quarto</StyledTypography>

      <HotelMessage variant="subtitle1" color="textSecondary">
        <h1>{hotelMessage}</h1>
      </HotelMessage>
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
