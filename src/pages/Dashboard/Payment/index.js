import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import UnavailablePayment from '../../../components/FinishPayment/UnavailablePayment';
import FinishPayment from '../../../components/FinishPayment';
import Tickets from '../../../components/Tickets';
import useEnrollment from '../../../hooks/api/useEnrollment';
import useLocalStorage from '../../../hooks/useLocalStorage';
import useTicket from '../../../hooks/api/useTicket';
import { useEffect } from 'react';

export default function Payment() {
  const { enrollmentError } = useEnrollment();
  const [hasTicket, setHasTicket] = useLocalStorage('ticketData', null);
  const [isPaid, setIsPaid] = useLocalStorage('isPaid', false);
  const { ticket } = useTicket();

  useEffect(() => {
    if (ticket) {
      setHasTicket(ticket);
      if (ticket.status === 'PAID') {
        setIsPaid(true);
      }
    }
  }, [ticket]);

  return (
    <>
      <StyledTypography variant="h4">Ingresso e pagamento</StyledTypography>
      {enrollmentError && <UnavailablePayment />}
      {!hasTicket && !enrollmentError && <Tickets setHasTicket={setHasTicket} />}
      {hasTicket && !enrollmentError && <FinishPayment ticket={hasTicket} isPaid={isPaid} setIsPaid={setIsPaid} />}
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;
