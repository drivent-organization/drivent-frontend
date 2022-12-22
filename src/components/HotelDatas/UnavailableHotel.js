import Typography from '@material-ui/core/Typography';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function UnavailableHotel({ error }) {
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (error.status === 401) {
      setErrorMessage('Sua modalidade de ingresso não inclui hospedagem. Prossiga para a escolha de atividades');
    } else {
      setErrorMessage('Você precisa ter confirmado pagamento antes de fazer a escolha de hospedagem');
    }
  }, []);

  return (
    <Styled variant="h6" color="textSecondary">
      {errorMessage}
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
