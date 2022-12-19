import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import { ChoosenTicketStyle } from './ChoosenTicketStyle';
import PaymentConfirmation from './PaymentConfirmation';
import PaymentForm from './PaymentForm';
export default function ChoosenTicket({ ticketData }) {
  const { ticketPrice, includesHotel, isRemote } = ticketData;
  
  return (
    <>
      <StyledTypography variant="subtitle1" color="textSecondary">
        Ingresso escolhido
      </StyledTypography>
      <ChoosenTicketStyle>
        <StyledCard variant="subtitle2" color="textPrimary">
          {isRemote ? 'Online' : `Presencial + ${includesHotel ? 'Com Hotel' : 'Sem Hotel'}`}
        </StyledCard>
        <StyledCard variant="body2" color="textSecondary">
          R$ {ticketPrice}
        </StyledCard>
      </ChoosenTicketStyle>
      <StyledTypography variant="subtitle1" color="textSecondary">
        Pagamento
      </StyledTypography>
      {ticketData.status === 'PAID' ? <PaymentConfirmation /> : <PaymentForm />}
    </>
  );
}

const StyledCard = styled(Typography)`
  margin: 1px !important;
`;

const StyledTypography = styled(Typography)`
  margin-bottom: 8px !important;
`;
