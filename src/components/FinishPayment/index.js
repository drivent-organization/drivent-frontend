import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import PaymentForm from './PaymentForm';

export default function FinishPaymentScreen() {
  return (
    <>
      <StyledTypography variant="subtitle1" color="textSecondary">
        Ingresso escolhido
      </StyledTypography>
      <ChoosenTicket>
        <StyledCard variant="subtitle2" color="textPrimary">
          Presencial + Com Hotel
        </StyledCard>
        <StyledCard variant="body2" color="textSecondary">
          R$ 600
        </StyledCard>
      </ChoosenTicket>
      <StyledTypography variant="subtitle1" color="textSecondary">
        Pagamento
      </StyledTypography>
      <PaymentForm />
      <Button>
        <StyledCard variant="subtitle2">FINALIZAR PAGAMENTO</StyledCard>
      </Button>
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;

const StyledCard = styled(Typography)`
  margin: 1px !important;
`;

const Button = styled.div`
  background-color: #e0e0e0;
  border-radius: 4px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  padding: 10px;
  width: 16vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const ChoosenTicket = styled.div`
  background-color: #ffeed2;
  border-radius: 20px;
  padding: 30px;
  margin-bottom: 20px !important;
  width: 23vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
