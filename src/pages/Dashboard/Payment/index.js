import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import UnavailablePayment from '../../../components/FinishPayment/UnavailablePayment';
import FinishPayment from '../../../components/FinishPayment';
import Tickets from '../../../components/Tickets';
import useEnrollment from '../../../hooks/api/useEnrollment';
import useLocalStorage from '../../../hooks/useLocalStorage';
import useGetTicket from '../../../hooks/api/useGetTicket';
import { useEffect } from 'react';

export default function Payment() {
  const { enrollmentError } = useEnrollment();
  const [hasTicket, setHasTicket] = useLocalStorage('ticketData', null);
  const [isPaid, setIsPaid] = useLocalStorage('isPaid', false);
  const { ticket } = useGetTicket();

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
      {enrollmentError ? (
        <UnavailablePayment />
      ) : !hasTicket ? (
        <Tickets setHasTicket={setHasTicket} />
      ) : (
        <FinishPayment ticket={hasTicket} isPaid={isPaid} setIsPaid={setIsPaid}/>
      )}
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;
