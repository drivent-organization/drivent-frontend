import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

export default function UnavailablePayment() {
  return (
    <Styled variant="subtitle1" color="textSecondary">
      Você precisa completar sua inscrição antes de prosseguir pra escolha de ingresso
    </Styled>
  );
}

const Styled = styled(Typography)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20% 5%;
  
  
`;
