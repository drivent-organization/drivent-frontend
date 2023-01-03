import styled from 'styled-components';
import ChooseRoom from './ChooseRoom';
import ChooseHotel from './ChooseHotel';
import { useState } from 'react';
import BookingData from './BookingData';
import { useEffect } from 'react';
import useBooking from '../../hooks/api/useBooking';

export default function HotelDatas({ hotels }) {
  const { booking, getBooking } = useBooking();
  const [isBooked, setIsBooked] = useState(null);
  const [reqInfo, setReqInfo] = useState({ hotelId: 0, type: '', bookingId: 0 });
  const [showRooms, setShowRooms] = useState(false);

  async function getUserBooking() {
    await getBooking();
  }

  useEffect(() => {
    if (!booking) getUserBooking();
    setIsBooked(booking);
  }, [booking]);

  const [hotelSelected, setHotelSelected] = useState(false);
  useEffect(() => {
    const states = new Array(hotels?.length).fill(false);
    setHotelSelected(states);
  }, [hotels]);

  return (
    <>
      {!isBooked && (
        <Container>
          {hotels?.map((hotel, index) => (
            <ChooseHotel
              hotel={hotel}
              key={index}
              setReqInfo={setReqInfo}
              setShowRooms={setShowRooms}
              setHotelSelected={setHotelSelected}
              hotelSelected={hotelSelected}
              currIndex={index}
            />
          ))}
        </Container>
      )}

      {showRooms && <ChooseRoom setIsBooked={setIsBooked} reqInfo={reqInfo} setShowRooms={setShowRooms} />}
      {!showRooms && isBooked && <BookingData booking={isBooked} setReqInfo={setReqInfo} setShowRooms={setShowRooms} />}
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
