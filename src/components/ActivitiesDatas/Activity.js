import dayjs from 'dayjs';
import { IoEnterOutline, IoCloseCircleOutline, IoCheckmarkCircleOutline } from 'react-icons/io5';
import { IconContext } from 'react-icons/lib';
import styled from 'styled-components';
import useSaveActivities from '../../hooks/api/useSaveActivities';
import { toast } from 'react-toastify';

export default function Activity({ activity, reload, setReload }) {
  const startsAtBrazil = activity.startsAt.slice(0, activity.startsAt.length - 1);
  const endsAtBrazil = activity.endsAt.slice(0, activity.endsAt.length - 1);
  const startsAt = dayjs(startsAtBrazil).format('HH:mm');
  const endsAt = dayjs(endsAtBrazil).format('HH:mm');
  const heightFactor = (Number(endsAt.replace(':', '')) - Number(startsAt.replace(':', ''))) / 100;

  return (
    <>
      <ActivityBox heightFactor={heightFactor} subscribed={activity.subscribed}>
        <SubtitleInfo>{activity.activityName}</SubtitleInfo>
        <TimeInfo>{`${startsAt} - ${endsAt}`}</TimeInfo>

        <DivisionLine></DivisionLine>
        <Icon vacancies={activity.vacancies} subscribed={activity.subscribed}>
          {activity.vacancies !== 0 && !activity.subscribed && <SubscribeIcon activityId={activity.id} reload={reload} setReload={setReload} />}
          {activity.vacancies !== 0 && activity.subscribed && <SubscribedIcon />}
          {activity.vacancies === 0 && !activity.subscribed && <SoldOffIcon />}
          {activity.vacancies === 0 && activity.subscribed && <SubscribedIcon />}
          <h6>
            {activity.vacancies !== 0 && !activity.subscribed && <>{activity.vacancies}</>}
            {activity.vacancies !== 0 && activity.subscribed && <>{'Inscrito'}</>}
            {activity.vacancies === 0 && !activity.subscribed && <>{'Esgotado'}</>}
            {activity.vacancies === 0 && activity.subscribed && <>{'Inscrito'}</>}
          </h6>
        </Icon>
      </ActivityBox>
    </>
  );
}

function SubscribeIcon({ activityId, reload, setReload }) {
  const { saveActivityLoading, saveActivity } = useSaveActivities();

  async function BookActivity() {
    if (saveActivityLoading) return;

    try {
      await saveActivity({ activityId });
      setReload(!reload);
      toast('Informações salvas com sucesso!');
    } catch (err) {
      toast('Não foi possível salvar suas informações!');
    }
  }

  return (
    <IconContext.Provider value={{ color: '#078632', className: 'enter-icon' }}>
      <IoEnterOutline onClick={BookActivity} />
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

function SubscribedIcon() {
  return (
    <IconContext.Provider value={{ color: '#078632', className: 'enter-icon' }}>
      <IoCheckmarkCircleOutline />
    </IconContext.Provider>
  );
}

const ActivityBox = styled.div`
  background-color: ${({ subscribed }) => (subscribed ? '#D0FFDB' : '#f1f1f1')};
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

  cursor: ${({ vacancies, subscribed }) => {
    if (vacancies === 0) return 'default';
    if (subscribed) return 'default';
    return 'pointer';
  }};
}

h6 {
  font-size: 9px;
  font-weight: 400;
  color: ${({ vacancies, subscribed }) => {
    if (subscribed) return '#078632';
    if (vacancies === 0) return '#CC6666';
    return '#078632';
  }};
  margin-top: 2px;
}
`;
