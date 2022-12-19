import { useNavigate } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import UnavailablePayment from './UnavailablePayment';
import useTicket from '../../hooks/api/useTicket';
import ChoosenTicket from './ChoosenTicket';

export default function FinishPaymentScreen() {
  const { ticket } = useTicket();

  const [ticketData, setTicketData] = useState({});

  useEffect(() => {
    if (ticket) {
      setTicketData({
        ticketName: ticket.TicketType.name,
        ticketPrice: ticket.TicketType.price,
        status: ticket.TicketType.status,
        includesHotel: ticket.TicketType.includesHotel,
        isRemote: ticket.TicketType.isRemote,
      });
    }
  }, [ticket]);

  return <>{ticketData.length === 0 ? <UnavailablePayment /> : <ChoosenTicket ticketData={ticketData} />}</>;
}
