import styled from 'styled-components';
import { useState, useNavigate } from 'react';
import OnlineChoice from './OnlineChoice';
import PresencialChoice from './PresencialChoice';

export default function Tickets() {
  const [click, setClick] = useState(false);
  const [click2, setClick2] = useState(false);

  const handleColorChangePresencial = () => {
    if (click === false) {
      setClick(true);
    }
    if (click === true) {
      setClick(false);
    }
    if (click2 === true) {
      setClick2(false);
    }
  };

  const handleColorChangeOnline = () => {
    if (click2 === false) {
      setClick2(true);
    }
    if (click2 === true) {
      setClick2(false);
    }
    if (click === true) {
      setClick(false);
    }
  };

  return (
    <StyledTicketOptions>
      <h3>Ingresso e Pagamento</h3>
      <p>Primeiro, escolha sua modalidade de ingresso</p>
      <CenterTickets>
        <PresencialBox
          onClick={handleColorChangePresencial}
          style={click ? { background: '#FFEED2' } : { background: '' }}
        >
          <h2>Presencial</h2>
          <p>R$ 250</p>
        </PresencialBox>
        <OnlineBox onClick={handleColorChangeOnline} style={click2 ? { background: '#FFEED2' } : { background: '' }}>
          <h2>Online</h2>
          <p>R$ 100</p>
        </OnlineBox>
      </CenterTickets>
      {click2 ? <OnlineChoice /> : ''}
      {click ? <PresencialChoice /> : ''}
    </StyledTicketOptions>
  );
}

const StyledTicketOptions = styled.div`
  h3 {
    margin-bottom: 37px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 34px;
    line-height: 40px;
    color: #000000;
  }

  p {
    margin-bottom: 17px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #8e8e8e;
  }
`;

const CenterTickets = styled.div`
  display: flex;
`;

const PresencialBox = styled.div`
  width: 145px;
  height: 145px;
  border: 1px solid #cecece;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 24px;

  h2 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #454545;
  }

  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #898989;
  }
`;

const OnlineBox = styled.div`
  width: 145px;
  height: 145px;
  border: 1px solid #cecece;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #454545;
  }

  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #898989;
  }
`;
