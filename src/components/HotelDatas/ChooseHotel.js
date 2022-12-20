import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

export default function ChooseHotel({ hotel, key }) {
  return (
    <>
      <HotelBox>
        <img src={hotel.image} />
        <HotelName variant="subtitle1">{hotel.name}</HotelName>
      </HotelBox>
    </>
  );
}

const HotelBox = styled.div`
  width: 200px;
  height: 264px;
  background-color: #ebebeb;
  border-radius: 10px;
  margin-right: 20px;
  padding: 10px;
  img {
    display: flex;
    justify-content: center;
    width: 180px;
    height: 110px;
    border-radius: 5px;
    margin-bottom: 5px;
  }
`;

const HotelName = styled(Typography)``;
