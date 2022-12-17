import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
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
        </StyledCard >
      </ChoosenTicket>
      <StyledTypography variant="subtitle1" color="textSecondary">
        Pagamento
      </StyledTypography>
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;

const StyledCard = styled(Typography)`
  margin: 1px !important;
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
