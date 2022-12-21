import styled from 'styled-components';
import useToken from '../../hooks/useToken';
import { postTicket, getTicketType } from '../../services/ticketApi';
import { toast } from 'react-toastify';
import { useState, useEffect } from 'react';

export default function OnlineChoice() {
  const [ticketTypes, setTicketTypes] = useState();
  const token = useToken();

  useEffect(() => {
    const onlineTicketTypeId = async() => {
      try {
        const ticketTypeInfo = await getTicketType(token);
        setTicketTypes(ticketTypeInfo);
      } catch (error) {
        console.log(error.message);
      }
    };
    onlineTicketTypeId();
  }, []);

  async function ReservarIngressoOnline(e) {
    e.preventDefault();

    const onlineTicketTypeId = ticketTypes.find(({ price }) => price === 100);

    const ticketTypeId = Number(onlineTicketTypeId.id);
    try {
      await postTicket(ticketTypeId, token);
      toast('Ticket Reservado com sucesso!');
    } catch (error) {
      toast('Ops! Não foi possível reservar o ingresso.');
    }
  }

  return (
    <StyledOnlineChoice>
      <p>
        Fechado! O total ficou em <strong>R$ 100</strong>. Agora é só confirmar:
      </p>
      <div>
        <p onClick={ReservarIngressoOnline}>RESERVAR INGRESSO</p>
      </div>
    </StyledOnlineChoice>
  );
}

const StyledOnlineChoice = styled.div`
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

  > div {
    width: 162px;
    height: 37px;
    background: #e0e0e0;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    display: flex;
    justify-content: center;

    > p {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      color: #000000;
      margin-top: 11px;
      margin-bottom: 10px;
    }
  }
`;
