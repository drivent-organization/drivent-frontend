import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

export default function UnavailablePayment() {
  return (
    <Styled variant="h6" color="textSecondary">
      Você precisa completar sua inscrição antes de prosseguir pra escolha de ingresso
    </Styled>
  );
}

const Styled = styled(Typography)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20% 5% 0 0;
`;
