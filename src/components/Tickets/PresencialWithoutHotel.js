import styled from 'styled-components';
import { useState, useEffect } from 'react';
import useToken from '../../hooks/useToken';
import { toast } from 'react-toastify';
import { getTicketType, postTicket } from '../../services/ticketApi';

export default function PresencialWithoutHotel() {
  const [ticketType, setTicketType] = useState();
  const token = useToken();

  useEffect(() => {
    const presencialWithoutHotel = async() => {
      try {
        const ticketTypeInfo = await getTicketType(token);
        setTicketType(ticketTypeInfo);
      } catch (error) {
        toast('Ops! Não foi possível encontrar o ingresso.');
      }
    };
    presencialWithoutHotel();
  }, []);

  async function ReservePresentialWithoutHotel(e) {
    e.preventDefault();

    const onlineTicketTypeId = ticketType.find(({ price }) => price === 250);
    const ticketTypeId = Number(onlineTicketTypeId.id);

    try {
      await postTicket(ticketTypeId, token);
      toast('Ticket Reservado com sucesso!');
    } catch (error) {
      toast('Ops! Não foi possível reservar o ingresso.');
    }
  }

  return (
    <StyledPresencialWithoutHotel>
      <p>
        Fechado! O total ficou em <strong>R$ 250</strong>. Agora é só confirmar:
      </p>
      <div>
        <p onClick={ReservePresentialWithoutHotel}>RESERVAR INGRESSO</p>
      </div>
    </StyledPresencialWithoutHotel>
  );
}

const StyledPresencialWithoutHotel = styled.div`
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
