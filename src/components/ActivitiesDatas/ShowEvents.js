import { Typography } from '@material-ui/core';
import { useEffect } from 'react';
import styled from 'styled-components';
import useActivities from '../../hooks/api/useActivities';
import Activity from './Activity';

export default function ShowEvents({ dateId }) {
  const { activities, getActivitiesByDate } = useActivities();
  const auditoriums = ['Auditório Principal', 'Auditório Lateral', 'Sala de Workshop'];

  async function getActivities() {
    await getActivitiesByDate(dateId);
  }

  useEffect(() => {
    if (!activities) getActivities();
  }, [dateId]);

  return (
    <>
      <AuditoriumWrap>
        {auditoriums.map((auditorium, index) => (
          <AuditoriumName variant="h6" color="textSecondary">
            {auditorium}
          </AuditoriumName>
        ))}
      </AuditoriumWrap>

      <AuditoriumContainer>
        {auditoriums.map((auditorium, index) => (
          <ActivitiesByAuditorium key={index} activities={activities} auditorium={auditorium} />
        ))}
      </AuditoriumContainer>
    </>
  );
}

function ActivitiesByAuditorium({ activities, auditorium }) {
  const activitiesByAuditorium = activities?.filter((activity) => activity.placeName === auditorium);

  return (
    <AudtoriumBox>
      {activitiesByAuditorium?.map((activity) => (
        <Activity activity={activity} />
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
