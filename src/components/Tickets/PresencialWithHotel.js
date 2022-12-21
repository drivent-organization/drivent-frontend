import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import useToken from '../../hooks/useToken';
import { getTicketType, postTicket } from '../../services/ticketApi';

export default function PresencialWithHotel() {
  const [ticketType, setTicketType] = useState();
  const token = useToken();

  useEffect(() => {
    const presentialWithHotel = async() => {
      try {
        const ticketTypeInfo = await getTicketType(token);
        setTicketType(ticketTypeInfo);
      } catch (error) {
        toast('Ops! Não foi possível encontrar o ingresso.');
      }
    };
    presentialWithHotel();
  }, []);

  async function ReservePresentialWithHotel(e) {
    e.preventDefault();

    const onlineTicketTypeId = ticketType.find(({ price }) => price === 600);
    const ticketTypeId = Number(onlineTicketTypeId.id);

    try {
      await postTicket(ticketTypeId, token);
      toast('Ticket Reservado com sucesso!');
    } catch (error) {
      toast('Ops! Não foi possível reservar o ingresso.');
    }
  } 

  return (
    <StyledPresencialWithHotel>
      <p>
        Fechado! O total ficou em <strong>R$ 600</strong>. Agora é só confirmar:
      </p>
      <div>
        <p onClick={ReservePresentialWithHotel}>RESERVAR INGRESSO</p>
      </div>
    </StyledPresencialWithHotel>
  );
}

const StyledPresencialWithHotel = styled.div`
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
