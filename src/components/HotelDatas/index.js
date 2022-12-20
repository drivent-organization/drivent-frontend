import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import ChooseRoom from '../ChooseRoom';
import useLocalStorage from '../../hooks/useLocalStorage';
import ChooseHotel from './ChooseHotel';

export default function HotelDatas({ hotelMessage, hotels }) {
  const [isBooked, setIsBooked] = useLocalStorage('bookingData', null);
  return (
    <>
      <StyledTypography variant="h4">Escolha de hotel e quarto</StyledTypography>
      <Container>
        {hotels.length === 0 ? (
          <HotelMessage variant="subtitle1" color="textSecondary">
            {hotelMessage}
          </HotelMessage>
        ) : (
          hotels.map((hotel, index) => <ChooseHotel hotel={hotel} key={index} />)
        )}
        {isBooked ? '' : <ChooseRoom setIsBooked={setIsBooked} />}
      </Container>
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;

const HotelMessage = styled(Typography)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70%;
  word-break: break-all;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
