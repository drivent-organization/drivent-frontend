import styled from 'styled-components';

export const FormWrapper = styled.form`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 3vh !important;

  > div {
    width: calc(70% - 20px);
    margin: 0 10px 0 0;
  }

  @media (max-width: 600px) {
    > div {
      width: 100%;
      padding-left: 0px !important;
    }
  }
`;
