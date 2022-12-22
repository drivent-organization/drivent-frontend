import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import useTicketType from '../../hooks/api/useTicketType';
import OnlineChoice from './OnlineChoice';
import PresencialChoice from './PresencialChoice';
import { Content, StyledTypography, Box } from './TicketBoxWrapper';
import { Typography } from '@material-ui/core';
import { toast } from 'react-toastify';
import useTicket from '../../hooks/api/useTicket';

export default function Tickets({ setHasTicket }) {
  const { ticketType, ticketTypeLoading } = useTicketType();
  const { createTicket, ticketLoading } = useTicket();

  const [selected, setSelected] = useState([false, false]);
  const [ticketTypeId, setTicketTypeId] = useState(0);

  const [online, setOnline] = useState({});
  const [presential] = useState([]);
  const [presentialInitialInfo, setPresentialInitialInfo] = useState({});

  useEffect(() => {
    ticketType?.forEach((ticketType) => {
      ticketType.isRemote ? setOnline(ticketType) : presential.push(ticketType);
    });

    const lowestPrice = presential?.find((type) => type.includesHotel === false);
    setPresentialInitialInfo(lowestPrice);
  }, [ticketTypeLoading]);

  function chooseTicketType(type) {
    const prevSelectedIndex = selected.findIndex((state) => state === true);
    if (prevSelectedIndex !== -1) selected[prevSelectedIndex] = false;

    if (type === 'presencial') {
      selected[0] = true;
    } else {
      selected[1] = true;
      setTicketTypeId(online.id);
    }

    setSelected([...selected]);
  }

  async function bookTicket(event) {
    event.preventDefault();

    try {
      const ticketData = await createTicket({ ticketTypeId });
      setHasTicket(ticketData);
      toast('Ingresso reservado com sucesso!');
    } catch (err) {
      toast('Não foi possível reservar o ingresso!');
    }
  }

  return (
    <>
      {ticketType?.length === 0 ? (
        <Styled variant="h6" color="textSecondary">
          Ops! Não foi possível encontrar o ingresso
        </Styled>
      ) : (
        <Wrapper>
          <StyledTypography variant="h6">Primeiro, escolha sua modalidade de ingresso</StyledTypography>
          <Content>
            <Box onClick={() => chooseTicketType('presencial')} selected={selected[0]}>
              <h2>{presentialInitialInfo?.name}</h2>
              <p>R$ {presentialInitialInfo?.price}</p>
            </Box>
            <Box onClick={() => chooseTicketType('online')} selected={selected[1]}>
              <h2>{online?.name}</h2>
              <p>R$ {online?.price}</p>
            </Box>
          </Content>
          {selected[0] && (
            <PresencialChoice
              ticketInfo={presential}
              setTicketTypeId={setTicketTypeId}
              bookTicket={bookTicket}
              loading={ticketLoading}
            />
          )}
          {selected[1] && <OnlineChoice bookTicket={bookTicket} loading={ticketLoading} />}
        </Wrapper>
      )}
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Styled = styled(Typography)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20% 5% 0 0;
`;
