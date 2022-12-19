import styled from 'styled-components';

export default function OnlineChoice() {
  return (
    <StyledOnlineChoice>
      <p>
        Fechado! O total ficou em <strong>R$ 100</strong>. Agora é só confirmar:
      </p>
      <div>
        <p>RESERVAR INGRESSO</p>
      </div>
    </StyledOnlineChoice>
  );
}

const StyledOnlineChoice = styled.div`
  margin-top: 44px;

  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #8e8e8e;
    margin-bottom: 17px;
  }

  div {
    width: 162px;
    height: 37px;
    background: #e0e0e0;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    display: flex;
    justify-content: center;

    p {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      color: #000000;
      margin-top: 11px;
      margin-bottom: 10px;
    }
  }
`;
