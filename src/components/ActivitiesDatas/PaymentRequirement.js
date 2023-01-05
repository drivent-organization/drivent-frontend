import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

export default function PaymentRequirement() {
  return (
    <Styled variant="h6" color="textSecondary">
      Você precisa ter confirmado pagamento antes de fazer a escolha de atividades
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
