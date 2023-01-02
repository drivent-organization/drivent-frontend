import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import ActivitiesDatas from '../../../components/ActivitiesDatas';

export default function Activities() {
  return (
    <>
      <StyledTypography variant="h4">Escolha de atividades</StyledTypography>
      <ActivitiesDatas />
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;
