import useTicket from '../../../hooks/api/useTicket';
import { useEffect, useState } from 'react';
import ActivityScreen from '../../../components/ActivitiesDatas/ActivityScreen';
import RemoteTicketAlert from '../../../components/ActivitiesDatas/ActivityScreen';

export default function Activities() {
  const [isPaid, setIsPaid] = useState(false);
  const [isRemote, setIsRemote] = useState(false);
  const [hasTicket, setHasTicket] = useState();
  const { ticket } = useTicket();
  useEffect(() => {
    if (ticket) {
      setHasTicket(ticket);
      if (ticket.status === 'PAID') {
        setIsPaid(true);
      }

      if (ticket.TicketType.isRemote) {
        setIsRemote(true);
      }
    }
  }, [ticket]);

  return (
    <>
      {!isRemote && <ActivityScreen isPaid={isPaid} />}
      {isPaid && isRemote && <RemoteTicketAlert />}
    </>
  );
}
