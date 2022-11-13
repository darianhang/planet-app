import React from "react"
import { Routes, Route } from "react-router-dom"
import styled, { keyframes } from "styled-components"
import { SpaceData } from "../data/data"

const StatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (min-width: 460px) {
    flex-direction: row;
}
`

const StatsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  width: 80%;
  height: 50px;
  margin: 5px 5px 25px 5px;
  padding: 0 20px 0 20px;
  @media only screen and (min-width: 460px) {
    flex-direction: column;
    width: 180px;
    height: 128px;
    justify-content: center;
    align-items: flex-start;
    margin: 50px 13px 30px 13px;
}
`

const StatTitle = styled.h2`
  text-transform: uppercase;
  font-family: 'League Spartan', sans-serif;
  font-size: 10px;
  opacity: 50%;
  color: #fff;
  padding-top: 2px;
  @media only screen and (min-width: 460px) {
    font-size: 12px;
}
`

const Stat = styled.h3`
  text-transform: uppercase;
  color: #fff;
  padding-bottom: 2.5px;
  @media only screen and (min-width: 460px) {
    font-size: 40px;
}
`

function Stats(props) {

  return (
    <StatWrapper mobile={props.mobile}>
      <StatsContainer>
        <StatTitle>Rotation Time</StatTitle>
        <Stat>{props.rotation}</Stat>
      </StatsContainer>
      <StatsContainer>
        <StatTitle>Revolution Time</StatTitle>
        <Stat>{props.revolution}</Stat>
      </StatsContainer>
      <StatsContainer>
        <StatTitle>Radius</StatTitle>
        <Stat>{props.radius}</Stat>
      </StatsContainer>
      <StatsContainer>
        <StatTitle>Average Temp</StatTitle>
        <Stat>{props.average}</Stat>
      </StatsContainer>
    </StatWrapper>
  );
}

export default Stats;