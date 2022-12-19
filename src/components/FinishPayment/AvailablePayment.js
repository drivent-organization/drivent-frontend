import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
//import PaymentForm from './PaymentForm';
import ChoosenTicket from './ChoosenTicket';
import PaymentConfirmation from './PaymentConfirmation';
import UnavailablePayment from './UnavailablePayment';

export default function AvailablePayment() {
  return (
    <>
      <StyledTypography variant="subtitle1" color="textSecondary">
        Ingresso escolhido
      </StyledTypography>
      <ChoosenTicket />

      <StyledTypography variant="subtitle1" color="textSecondary">
        Pagamento
      </StyledTypography>
      <PaymentConfirmation />
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 8px !important;
`;
