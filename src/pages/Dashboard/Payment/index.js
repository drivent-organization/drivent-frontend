import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

import FinishPayment from '../../../components/FinishPayment';

export default function Payment() {
  return (
    <>
      <StyledTypography variant="h4">Ingresso e pagamento</StyledTypography>
      <FinishPayment />
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;
