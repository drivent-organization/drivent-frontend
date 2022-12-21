import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import ChooseRoom from './ChooseRoom';
import useLocalStorage from '../../hooks/useLocalStorage';
import ChooseHotel from './ChooseHotel';
import { useState } from 'react';
import BookingData from './BookingData';
import { useEffect } from 'react';

export default function HotelDatas({ hotelMessage, hotels }) {
  const [isBooked, setIsBooked] = useLocalStorage('bookingData', null);
  const [reqInfo, setReqInfo] = useState({ hotelId: 0, type: '', bookingId: 0 });
  const [showRooms, setShowRooms] = useState(false);

  const [hotelSelected, setHotelSelected] = useState(false);
  useEffect(() => {
    const states = new Array(hotels?.length).fill(false);
    setHotelSelected(states);
  }, [hotels]);

  return (
    <>
      {!isBooked && (
        <Container >
          {hotels.length === 0 ? (
            <HotelMessage variant="h6" color="textSecondary">
              {hotelMessage}
            </HotelMessage>
          ) : (
            hotels.map((hotel, index) => (
              <ChooseHotel
                hotel={hotel}
                key={index}
                setReqInfo={setReqInfo}
                setShowRooms={setShowRooms}
                setHotelSelected={setHotelSelected}
                hotelSelected={hotelSelected}
                currIndex={index}
              />
            ))
          )}
        </Container>
      )}

      {showRooms && <ChooseRoom setIsBooked={setIsBooked} reqInfo={reqInfo} setShowRooms={setShowRooms} />}
      {!showRooms && isBooked && <BookingData booking={isBooked} setReqInfo={setReqInfo} setShowRooms={setShowRooms} />}
    </>
  );
}

const HotelMessage = styled(Typography)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70%;
  word-wrap: break-word;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
