import { useNavigate } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import UnavailablePayment from './UnavailablePayment';
import AvailablePayment from './AvailablePayment';
import useTicket from '../../hooks/api/useTicket';

export default function FinishPaymentScreen() {
  const { ticket } = useTicket();
  const [ticketData, setTicketData] = useState([]);

  useEffect(() => {
    if (ticket) {
      setTicketData({
        ticketName: ticket.TicketType.name,
        ticketPrice: ticket.TicketType.price,
        status: ticket.TicketType.status
      });
    }
  }, []);

  return <>{ticketData.length === 0 ? <UnavailablePayment /> : <AvailablePayment />}</>;
}
