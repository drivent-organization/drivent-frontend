import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import { ChoosenTicketStyle } from './ChoosenTicketStyle';
import PaymentConfirmation from './PaymentConfirmation';
import PaymentForm from './PaymentForm';

export default function ChoosenTicket({ ticketData }) {
  const { ticketPrice, includesHotel, isRemote, ticketId, status } = ticketData;

  return (
    <>
      <StyledTypography variant="h6" color="textSecondary">
        Ingresso escolhido
      </StyledTypography>
      <ChoosenTicketStyle>
        <StyledCard variant="subtitle1" color="textPrimary">
          {isRemote ? 'Online' : `Presencial + ${includesHotel ? 'Com Hotel' : 'Sem Hotel'}`}
        </StyledCard>
        <StyledCard variant="subtitle1" color="textSecondary">
          R$ {ticketPrice}
        </StyledCard>
      </ChoosenTicketStyle>
      <StyledTypography variant="h6" color="textSecondary">
        Pagamento
      </StyledTypography>
      {status === 'PAID' ? <PaymentConfirmation /> : <PaymentForm ticketId={ticketId} />}
    </>
  );
}

const StyledCard = styled(Typography)`
  margin: 1px !important;
`;

const StyledTypography = styled(Typography)`
  margin-bottom: 8px !important;
`;
