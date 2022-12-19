import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import { AiFillCheckCircle } from 'react-icons/ai';
export default function PaymentConfirmation() {
  return (
    <Confirmation>
      <AiFillCheckCircle size="15%" color="#36B853" />

      <Display>
        <StyledCard variant="subtitle1" color="textPrimary">
          Pagamento confirmado!
        </StyledCard>
        <StyledCard variant="body2" color="textSecondary">
          Prossiga para escolha de hospedagem e atividades
        </StyledCard>
      </Display>
    </Confirmation>
  );
}

const StyledCard = styled(Typography)`
  margin: 1px !important;
`;

const Display = styled.div`
  display: flex;
  flex-direction: column;
`;

const Confirmation = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
