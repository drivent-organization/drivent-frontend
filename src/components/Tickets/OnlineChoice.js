import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import Button from '../Form/Button';

export default function OnlineChoice({ bookTicket, loading }) {
  return (
    <Container>
      <StyledTypography variant="h6">
        Fechado! O total ficou em <strong>R$ 100</strong>. Agora é só confirmar:
      </StyledTypography>
      <Button onClick={bookTicket} disabled={loading}>
        RESERVAR INGRESSO
      </Button>
    </Container>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
  color: #8e8e8e;
`;

const Container = styled.div`
  margin-top: 44px;
`;
