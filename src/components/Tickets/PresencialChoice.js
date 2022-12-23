import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import { useState } from 'react';
import { Content, Box } from './TicketBoxWrapper';
import Button from '../Form/Button';

export default function PresencialChoice({ ticketInfo, setTicketTypeId, bookTicket, loading }) {
  const [selected, setSelected] = useState([false, false]);
  const [totalPrice, setTotalPrice] = useState(null);

  function handleClick(includesHotel, id, price) {
    const prevSelectedIndex = selected.findIndex((state) => state === true);
    if (prevSelectedIndex !== -1) selected[prevSelectedIndex] = false;

    if (includesHotel) {
      selected[0] = true;
      setTotalPrice(price);
    } else {
      selected[1] = true;
      setTotalPrice(price);
    }
    setTicketTypeId(id);
    setSelected([...selected]);
  }

  return (
    <Container>
      <StyledTypography variant="h6">Primeiro, escolha sua modalidade de ingresso</StyledTypography>
      <Content withHotel={true}>
        {ticketInfo.map((ticket, index) =>
          ticket.includesHotel === true ? (
            <Box
              key={index}
              onClick={() => handleClick(ticket.includesHotel, ticket.id, ticket.price)}
              selected={selected[0]}
            >
              <h2>Com Hotel</h2>
              <p>+ R$ 350</p>
            </Box>
          ) : (
            <Box
              key={index}
              onClick={() => handleClick(ticket.includesHotel, ticket.id, ticket.price)}
              selected={selected[1]}
            >
              <h2>Sem Hotel</h2>
              <p>+ R$ 0</p>
            </Box>
          )
        )}
      </Content>
      {(selected[0] || selected[1]) && (
        <>
          <StyledTypography variant="h6">
            Fechado! O total ficou em <strong>R$ {totalPrice}</strong>. Agora é só confirmar:
          </StyledTypography>
          <Button onClick={bookTicket} disabled={loading}>
            RESERVAR INGRESSO
          </Button>
        </>
      )}
    </Container>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
  color: #8e8e8e;
`;

const Container = styled.div`
  margin-top: 44px;
`;
