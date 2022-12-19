import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import { AiFillCheckCircle } from 'react-icons/ai';
export default function PaymentConfirmation() {
  return (
    <Confirmation>
      <AiFillCheckCircle size="15%" color="#36B853" />

      <Display>
        <StyledTitle variant="subtitle1" color="textPrimary">
          Pagamento confirmado!
        </StyledTitle>
        <StyledSubTitle variant="body2" color="textPrimary">
          Prossiga para escolha de hospedagem e atividades
        </StyledSubTitle>
      </Display>
    </Confirmation>
  );
}

const StyledTitle = styled(Typography)`
  
  font-weight: bold !important;
`;

const StyledSubTitle = styled(Typography)`
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
