import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import { AiFillCheckCircle } from 'react-icons/ai';
export default function PaymentConfirmation() {
  return (
    <Confirmation>
      <span>
        <AiFillCheckCircle color="#36B853" />
      </span>
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
  padding-bottom: 10px;
`;

const StyledSubTitle = styled(Typography)`
  margin: 1px !important;
`;

const Display = styled.div`
  display: flex;
  flex-direction: column;
`;

const Confirmation = styled.div`
  width: 80%;
  display: flex;
  align-items: center;

  > span {
    display: grid;
    place-items: center;
    font-size: 50px;
    margin-right: 15px;
  }
`;
