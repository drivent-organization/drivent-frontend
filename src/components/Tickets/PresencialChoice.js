import styled from 'styled-components';
import { useState } from 'react';
import PresencialWithHotel from './PresencialWithHotel';
import PresencialWithoutHotel from './PresencialWithoutHotel';

export default function PresencialChoice() {
  const [withHotel, setWithHotel] = useState(false);
  const [withoutHotel, setWithoutHotel] = useState(false);

  const handleColorChangeWithHotel = () => {
    if (withHotel === false) {
      setWithHotel(true);
    }
    if (withHotel === true) {
      setWithHotel(false);
    }
    if (withoutHotel === true) {
      setWithoutHotel(false);
    }
  };

  const handleColorChangeWithoutHotel = () => {
    if (withoutHotel === false) {
      setWithoutHotel(true);
    }
    if (withoutHotel === true) {
      setWithoutHotel(false);
    }
    if (withHotel === true) {
      setWithHotel(false);
    }
  };

  return (
    <StyledPresencialChoice>
      <p>Ótimo! Agora escolha sua modalidade de hospedagem</p>
      <CenterHotelChoice>
        <NoHotelBox
          onClick={handleColorChangeWithoutHotel}
          style={withoutHotel ? { background: '#FFEED2' } : { background: '' }}
        >
          <h2>Sem Hotel</h2>
          <p>+ R$ 0</p>
        </NoHotelBox>
        <WithHotelBox
          onClick={handleColorChangeWithHotel}
          style={withHotel ? { background: '#FFEED2' } : { background: '' }}
        >
          <h2>Com Hotel</h2>
          <p>+ R$ 350</p>
        </WithHotelBox>
      </CenterHotelChoice>
      {withoutHotel ? <PresencialWithoutHotel /> : ''}
      {withHotel ? <PresencialWithHotel /> : ''}
    </StyledPresencialChoice>
  );
}

const StyledPresencialChoice = styled.div`
    margin-top: 44px;
  > p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #8e8e8e;
    margin-bottom: 17px;
  }
`;

const CenterHotelChoice = styled.div`
  display: flex;
`;

const WithHotelBox = styled.div`
  width: 145px;
  height: 145px;
  border: 1px solid #cecece;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 24px;

  > h2 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #454545;
  }

  > p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #898989;
  }
`;

const NoHotelBox = styled.div`
  width: 145px;
  height: 145px;
  border: 1px solid #cecece;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 24px;

  > h2 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #454545;
  }

  > p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #898989;
  }
`;
