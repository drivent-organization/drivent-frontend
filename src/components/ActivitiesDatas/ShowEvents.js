import { Typography } from '@material-ui/core';
import { useEffect } from 'react';
import styled from 'styled-components';
import useActivities from '../../hooks/api/useActivities';
import usePlaces from '../../hooks/api/usePlaces';
import Activity from './Activity';

export default function ShowEvents({ dateId }) {
  const { activities, getActivitiesByDate } = useActivities();
  const { places: auditorium } = usePlaces();

  async function getActivities() {
    await getActivitiesByDate(dateId);
  }

  useEffect(() => {
    getActivities();
  }, [dateId]);

  return (
    <>
      <AuditoriumWrap>
        {auditorium?.map((auditorium) => (
          <AuditoriumName key={auditorium.id} variant="h6" color="textSecondary">
            {auditorium.name}
          </AuditoriumName>
        ))}
      </AuditoriumWrap>

      <AuditoriumContainer>
        {auditorium?.map((auditorium) => (
          <ActivitiesByAuditorium key={auditorium.id} activities={activities} auditorium={auditorium} />
        ))}
      </AuditoriumContainer>
    </>
  );
}

function ActivitiesByAuditorium({ activities, auditorium }) {
  const activitiesByAuditorium = activities?.filter((activity) => activity.placeName === auditorium.name);

  return (
    <AudtoriumBox>
      {activitiesByAuditorium?.map((activity) => (
        <Activity key={activity.id} activity={activity} />
      ))}
    </AudtoriumBox>
  );
}

const AuditoriumContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 70%;
  height: auto;
`;

const AudtoriumBox = styled.div`
  border: 1px solid #d7d7d7;
  border-right: 0 solid #d7d7d7;
  width: calc(100% / 3);
  height: auto;
  padding: 12px;
  :last-child {
    border-right: 1px solid #d7d7d7;
  }
  word-break: break-word;
`;

const AuditoriumWrap = styled.div`
  width: 99%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 10px;
`;

const AuditoriumName = styled(Typography)``;
