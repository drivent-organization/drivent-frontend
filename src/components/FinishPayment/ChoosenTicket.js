import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
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

const ChoosenTicketStyle = styled.div`
  background-color: #ffeed2;
  border-radius: 20px;
  padding: 30px;
  margin-bottom: 20px !important;
  width: 23vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
