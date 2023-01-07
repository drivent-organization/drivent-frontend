import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import PaymentRequirement from './PaymentRequirement';
import ShowEvents from './ShowEvents';
export default function ActivityScreen({ isPaid }) {
  //DADO MOCKADO
  const dateId = 2;

  return (
    <>
      <StyledTypography variant="h4">Ingresso de atividades</StyledTypography>
      {!isPaid && <PaymentRequirement />}
      {isPaid && <ShowEvents dateId={dateId} />}
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;
