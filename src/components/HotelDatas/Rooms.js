import styled from 'styled-components';
import { IoPersonOutline, IoPerson } from 'react-icons/io5';

export default function Rooms({ vacancies, bookings, name, id, roomState, setRoomState, setRoomId, currIndex }) {
  const free = [];
  for (let i = 0; i < vacancies; i++) free.push(i);

  const occupied = [];
  for (let i = 0; i < bookings; i++) occupied.push(i);

  function handleClick() {
    if (vacancies === 0) return;

    const prevSelectedIndex = roomState.findIndex((state) => state === true);
    if (prevSelectedIndex !== -1) roomState[prevSelectedIndex] = false;

    if (prevSelectedIndex === currIndex) {
      roomState[currIndex] = false;
      setRoomId(0);
    } else {
      roomState[currIndex] = true;
      setRoomId(id);
    }

    setRoomState([...roomState]);
  }

  return (
    <StyledRoom onClick={handleClick} selected={roomState[currIndex]} vacancies={vacancies}>
      <em>{name}</em>
      <span>
        {roomState[currIndex] && (
          <>
            {free.slice(0, -1).map((i) => (
              <IoPersonOutline key={i} />
            ))}
            <IoPerson fill="#FF4791" />
          </>
        )}
        {!roomState[currIndex] && free.map((i) => <IoPersonOutline key={i} />)}
        {occupied.map((i) => (
          <IoPerson key={i} />
        ))}
      </span>
    </StyledRoom>
  );
}

const StyledRoom = styled.div`
  width: 190px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  border: 1px solid #cecece;
  border-radius: 10px;
  margin-bottom: 10px;
  opacity: 1;
  background-color: transparent;
  cursor: pointer;

  > span {
    font-size: 22px;
  }

  ${({ vacancies, selected }) => {
    if (vacancies === 0) {
      return `
        opacity: 0.6;
        background-color: #E9E9E9;
      `;
    }
    if (selected) {
      return `
        background-color: #FFEED2;
      `;
    }
  }}
`;
