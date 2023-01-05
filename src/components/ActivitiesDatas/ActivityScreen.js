import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import PaymentRequirement from './PaymentRequirement';
import ShowEvents from './ShowEvents';
export default function ActivityScreen({ isPaid }) {
  return (
    <>
      <StyledTypography variant="h4">Ingresso de atividades</StyledTypography>
      {!isPaid && <PaymentRequirement />}
      {isPaid && <ShowEvents />}
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;
