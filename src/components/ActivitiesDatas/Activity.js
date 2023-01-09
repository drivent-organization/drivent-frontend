import dayjs from 'dayjs';
import { IoEnterOutline, IoCloseCircleOutline } from 'react-icons/io5';
import { IconContext } from 'react-icons/lib';
import styled from 'styled-components';
import useSaveActivities from '../../hooks/api/useSaveActivities';
import { toast } from 'react-toastify';
const utc = require('dayjs/plugin/utc');
const timezone = require('dayjs/plugin/timezone'); // dependent on utc plugin

dayjs.extend(utc);
dayjs.extend(timezone);
export default function Activity({ activity }) {
  // const tz = 'America/Sao_Paulo';
  const startsAtBrazil = activity.startsAt.slice(0, activity.startsAt.length - 1);
  const endsAtBrazil = activity.endsAt.slice(0, activity.endsAt.length - 1);
  const startsAt = dayjs(startsAtBrazil).format('HH:mm');

  const endsAt = dayjs(endsAtBrazil).format('HH:mm');
  const heightFactor = (Number(endsAt.replace(':', '')) - Number(startsAt.replace(':', ''))) / 100;

  return (
    <>
      <ActivityBox heightFactor={heightFactor}>
        <SubtitleInfo>{activity.activityName}</SubtitleInfo>
        <TimeInfo>{`${startsAt} - ${endsAt}`}</TimeInfo>

        <DivisionLine></DivisionLine>
        <Icon available={activity.vacancies}>
          {activity.vacancies ? <SubscribeIcon activityId={activity.id} /> : <SoldOffIcon />}
          <h6>{activity.vacancies ? activity.vacancies : 'Esgotado'}</h6>
        </Icon>
      </ActivityBox>
    </>
  );
}

function SubscribeIcon({ activityId }) {
  const { saveActivityLoading, saveActivity } = useSaveActivities();
  async function BookActivity(activityId) {
    const body = { activityId: activityId };

    try {
      await saveActivity(body);

      toast('Informações salvas com sucesso!');
    } catch (err) {
      toast('Não foi possível salvar suas informações!');
    }
  }

  return (
    <IconContext.Provider value={{ color: '#078632', className: 'enter-icon' }}>
      <IoEnterOutline onClick={() => BookActivity(activityId)} />
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
  height: ${({ heightFactor }) => heightFactor * 80 + 'px'};
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

    cursor: ${({ available }) => (available ? 'pointer' : 'default')};
  }

  h6 {
    font-size: 9px;
    font-weight: 400;
    color: ${({ available }) => (available ? '#078632' : '#CC6666')};
    margin-top: 2px;
  }
`;
