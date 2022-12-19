import ChooseRoom from '../../../components/ChooseRoom';
import useLocalStorage from '../../../hooks/useLocalStorage';

export default function Hotel() {
  const [isBooked, setIsBooked] = useLocalStorage('bookingData', null);

  return <>{isBooked ? '' : <ChooseRoom setIsBooked={setIsBooked} />}</>;
}
