import { useEffect, useState } from 'react';
import ChoosenTicket from './ChoosenTicket';

export default function FinishPaymentScreen({ ticket, isPaid, setIsPaid }) {
  const [ticketData, setTicketData] = useState({});

  useEffect(() => {
    if (ticket) {
      setTicketData({
        ticketId: ticket.id,
        ticketName: ticket.TicketType.name,
        ticketPrice: ticket.TicketType.price,
        status: ticket.status,
        includesHotel: ticket.TicketType.includesHotel,
        isRemote: ticket.TicketType.isRemote,
      });
    }
  }, [ticket]);

  return <ChoosenTicket ticketData={ticketData} isPaid={isPaid} setIsPaid={setIsPaid} />;
}
