import styled from 'styled-components';

export const HotelBox = styled.div`
  width: 200px;
  height: 264px;
  background-color: #ebebeb;
  border-radius: 10px;
  margin: 0 20px 50px 0px;
  padding: 15px;
  color: #343434;
  cursor: ${({ booking }) => (booking ? 'default' : 'pointer')};

  > img {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 110px;
    border-radius: 5px;
    margin-bottom: 5px;
    object-fit: cover;
  }

  ${({ booking, isSelected }) => {
    if (booking || isSelected) {
      return `
       background-color: #FFEED2;
      `;
    }
  }}
`;

export const HotelName = styled.h5`
  font-size: 20px;
  padding-top: 5px;
`;

export const Content = styled.div`
  margin: 15px 0;
`;

export const Info = styled.h6`
  font-size: 12px;
  font-weight: 700;
  margin-top: 5px;

  ${({ detail }) => {
    if (detail) {
      return `
        color: #3C3C3C;
        font-weight: 400;
      `;
    }
  }}
`;
