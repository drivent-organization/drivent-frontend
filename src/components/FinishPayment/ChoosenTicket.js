import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import { ChoosenTicketStyle } from './ChoosenTicketStyle';
export default function ChoosenTicket() {
  return (
    <ChoosenTicketStyle>
      <StyledCard variant="subtitle2" color="textPrimary">
        Presencial + Com Hotel
      </StyledCard>
      <StyledCard variant="body2" color="textSecondary">
        R$ 600
      </StyledCard>
    </ChoosenTicketStyle>
  );
}

const StyledCard = styled(Typography)`
  margin: 1px !important;
`;

