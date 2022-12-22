import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import UnavailablePayment from '../../../components/FinishPayment/UnavailablePayment';
import FinishPayment from '../../../components/FinishPayment';
import Tickets from '../../../components/Tickets';
import useEnrollment from '../../../hooks/api/useEnrollment';
import useLocalStorage from '../../../hooks/useLocalStorage';

export default function Payment() {
  const { enrollmentError } = useEnrollment();
  const [hasTicket, setHasTicket] = useLocalStorage('ticketData', null);

  return (
    <>
      <StyledTypography variant="h4">Ingresso e pagamento</StyledTypography>
      {enrollmentError && <UnavailablePayment />}
      {!enrollmentError && !hasTicket && <Tickets setHasTicket={setHasTicket} />}
      {!enrollmentError && hasTicket && <FinishPayment ticket={hasTicket} />}
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;
