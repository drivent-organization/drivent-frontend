import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import useTicket from '../../../hooks/api/useTicket';
import { useEffect, useState } from 'react';
import ActivityScreen from '../../../components/ActivitiesDatas/ActivityScreen';
import RemoteTicketAlert from '../../../components/ActivitiesDatas/RemoteTicketAlert';

export default function Activities() {
  const [isPaid, setIsPaid] = useState(false);
  const [isRemote, setIsRemote] = useState(false);
  const { ticket } = useTicket();

  useEffect(() => {
    if (ticket) {
      if (ticket.status === 'PAID') {
        setIsPaid(true);
      }

      if (ticket.TicketType.isRemote) {
        setIsRemote(true);
      }
    }
  }, [ticket]);

  return (
    <>
      <StyledTypography variant="h4">Ingresso de atividades</StyledTypography>
      {ticket ? (
        <>
          {!isRemote && <ActivityScreen isPaid={isPaid} />}
          {isRemote && <RemoteTicketAlert />}
        </>
      ) : (
        <Styled variant="h6" color="textSecondary">
          Você precisa ter escolhido um ingresso para continuar.
        </Styled>
      )}
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;

export const Styled = styled(Typography)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20% 5% 0 0;
`;
