import useAsync from '../useAsync';
import useToken from '../useToken';

import * as ticketApi from '../../services/ticketApi';

export default function useSaveTicket() {
  const token = useToken();

  const {
    data: ticket,
    loading: ticketLoading,
    error: ticketError,
    act: createTicket,
  } = useAsync((data) => ticketApi.save(data, token), false);

  return {
    ticket,
    ticketLoading,
    ticketError,
    createTicket,
  };
}
