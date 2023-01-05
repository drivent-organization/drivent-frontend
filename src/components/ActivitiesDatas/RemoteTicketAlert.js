import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

export default function RemoteTicketAlert() {
  return (
    <>
      <StyledTypography variant="h4">Escolha de hotel e quarto</StyledTypography>
      <Styled variant="h6" color="textSecondary">
        Sua modalidade de ingresso não necessita escolher atividade. Você terá acesso a todas as atividades.
      </Styled>
    </>
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

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;
