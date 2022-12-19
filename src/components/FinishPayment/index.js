import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import PaymentForm from './PaymentForm';
import ChoosenTicket from './ChoosenTicket';
//import PaymentConfirmation from './PaymentConfirmation';

export default function FinishPaymentScreen() {
  return (
    <>
      <StyledTypography variant="subtitle1" color="textSecondary">
        Ingresso escolhido
      </StyledTypography>
      <ChoosenTicket />

      <StyledTypography variant="subtitle1" color="textSecondary">
        Pagamento
      </StyledTypography>
      <PaymentForm />
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 8px !important;
`;
