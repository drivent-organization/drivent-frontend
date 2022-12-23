import styled from 'styled-components';
import { Typography } from '@material-ui/core';

export const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
  color: #8e8e8e;
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 0 15px;
  margin-bottom: ${({ withHotel }) => (withHotel ? '35px' : 0)};
`;

export const Box = styled.div`
  width: 145px;
  height: 145px;
  border: 1px solid #cecece;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;

  > h2 {
    font-size: 16px;
    color: #454545;
    margin-bottom: 10px;
  }

  > p {
    font-size: 14px;
    color: #898989;
  }

  ${({ selected }) => {
    if (selected) {
      return `
        background-color: #FFEED2;
        border: 1px solid transparent;
      `;
    }
  }}
`;
