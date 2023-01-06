import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import HotelDatas from '../../../components/HotelDatas';
import UnavailableHotel from '../../../components/HotelDatas/UnavailableHotel';
import useHotels from '../../../hooks/api/useHotels';

export default function Hotel() {
  const { hotels, hotelsError } = useHotels();
  console.log(hotels);
  return (
    <>
      <StyledTypography variant="h4">Escolha de hotel e quarto</StyledTypography>
      {hotelsError && <UnavailableHotel error={hotelsError} />}
      {hotels && <HotelDatas hotels={hotels} />}
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;
