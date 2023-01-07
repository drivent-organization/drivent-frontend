import dayjs from 'dayjs';
import { IoEnterOutline, IoCloseCircleOutline } from 'react-icons/io5';
import { IconContext } from 'react-icons/lib';
import styled from 'styled-components';

export default function Activity({ activity }) {
  const startsAt = Number(dayjs(activity.startsAt).format('HH')) + 3;
  const endsAt = Number(dayjs(activity.endsAt).format('HH')) + 3;
  const heighFactor = (startsAt - endsAt) * 100;
  return (
    <>
      <ActivityBox>
        <SubtitleInfo>{activity.activityName}</SubtitleInfo>
        <TimeInfo>{`${startsAt}:00 - ${endsAt}:00`}</TimeInfo>

        <DivisionLine></DivisionLine>
        <Icon available={activity.vacancies}>
          {activity.vacancies ? <SubscribeIcon /> : <SoldOffIcon />}
          <h6>{activity.vacancies ? activity.vacancies : 'Esgotado'}</h6>
        </Icon>
      </ActivityBox>
    </>
  );
}

function SubscribeIcon() {
  return (
    <IconContext.Provider value={{ color: '#078632', className: 'enter-icon' }}>
      <IoEnterOutline />
    </IconContext.Provider>
  );
}

function SoldOffIcon() {
  return (
    <IconContext.Provider value={{ color: '#CC6666', className: 'enter-icon' }}>
      <IoCloseCircleOutline />
    </IconContext.Provider>
  );
}

const ActivityBox = styled.div`
  background-color: #f1f1f1;
  width: 100%;
  height: 100px;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 5px;
  position: relative;
`;

const DivisionLine = styled.div`
  background-color: #cfcfcf;
  width: 1px;
  position: absolute;
  top: 12%;
  left: 75%;
  bottom: 12%;
  margin-left: 5px;
`;

const SubtitleInfo = styled.h5`
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 5px;
  margin-right: 50px;
`;

const TimeInfo = styled.h6`
  font-size: 12px;
  font-weight: 400;
`;

const Icon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 25%;
  min-width: 40px;
  .enter-icon {
    width: 25px;
    height: 25px;
    vertical-align: middle;
  }

  h6 {
    font-size: 9px;
    font-weight: 400;
    color: ${({ available }) => (available ? '#078632' : '#CC6666')};
    margin-top: 2px;
  }
`;
