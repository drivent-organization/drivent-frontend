import useToken from '../../../hooks/useToken';
import { getHotelsData } from '../../../services/hotelApi';
import { useState, useEffect } from 'react';
import HotelDatas from '../../../components/HotelDatas';

export default function Hotel() {
  const token = useToken();
  const [hotelMessage, setHotelMessage] = useState('');
  const [hotels, setHotels] = useState([]);

  function loadHotelDatas() {
    const promise = getHotelsData(token);
    promise.then((answer) => {
      setHotels(answer.data);
    });
    promise.catch((answer) => {
      if (answer.response.status === 402 || answer.response.status === 404) {
        setHotelMessage('Você precisa ter confirmado pagamento antes de fazer a escolha de hospedagem');
      }
      if (answer.response.status === 401) {
        setHotelMessage('Sua modalidade de ingresso não inclui hospedagem. Prossiga para a escolha de atividades');
      }
    });
  }

  useEffect(() => {
    loadHotelDatas();
  }, []);

  return <HotelDatas hotelMessage={hotelMessage} hotels={hotels} />;
}
