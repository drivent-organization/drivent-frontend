import { Typography } from '@material-ui/core';
import { IoEnterOutline } from 'react-icons/io5';
import { IconContext } from 'react-icons/lib';
import styled from 'styled-components';

export default function ShowEvents() {
  return (
    <>
      <AuditoriumWrap>
        <AuditoriumName variant="h6" color="textSecondary">
          Auditório Principal
        </AuditoriumName>
        <AuditoriumName variant="h6" color="textSecondary">
          Auditório Lateral
        </AuditoriumName>
        <AuditoriumName variant="h6" color="textSecondary">
          Sala de Workshop
        </AuditoriumName>
      </AuditoriumWrap>

      <AuditoriumContainer>
        <AudtoriumBox>
          <ActivityBox>
            <SubtitleInfo>Minecraft: montando o pc ideal</SubtitleInfo>
            <TimeInfo>12:00 - 14:00</TimeInfo>
            <Icon>
              <IconContext.Provider value={{ color: '#078632', className: 'enter-icon' }}>
                <IoEnterOutline />
              </IconContext.Provider>
            </Icon>

            <DivisionLine></DivisionLine>
          </ActivityBox>
          <ActivityBox></ActivityBox>
        </AudtoriumBox>
        <AudtoriumBox></AudtoriumBox>
        <AudtoriumBox></AudtoriumBox>
      </AuditoriumContainer>
    </>
  );
}

const AuditoriumContainer = styled.div`
  display: flex;
  width: 100%;
  height: 60%;
`;

const AudtoriumBox = styled.div`
  border: 1px solid #d7d7d7;
  border-right: 0 solid #d7d7d7;
  width: calc(100% / 3);
  height: 100%;
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

//ARRUMAR A PROPORÇAO DO ICON
const Icon = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 12%;
  left: 82%;
  .enter-icon {
    width: 25px;
    height: 25px;
    vertical-align: middle;
  }
`;
