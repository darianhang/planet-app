import React from "react"
import { Routes, Route } from "react-router-dom"
import styled, { keyframes } from "styled-components"
import { SpaceData } from "../data/data"

const StatsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  width: 80%;
  height: 50px;
  margin: 5px 5px 25px 5px;
  padding: 0 20px 0 20px;
`

const StatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const StatTitle = styled.h2`
  text-transform: uppercase;
  font-family: 'League Spartan', sans-serif;
  font-size: 10px;
  opacity: 50%;
  color: #fff;
  padding-bottom: 3px;
`

const Stat = styled.h3`
  text-transform: uppercase;
  color: #fff;
  padding-bottom: 5px;

`

function Stats(props) {

  return (
    <StatWrapper>
      <StatsContainer>
        <StatTitle>Rotation Time</StatTitle>
        <Stat>56.7 Days</Stat>
      </StatsContainer>
      <StatsContainer>
        <StatTitle>Revolution Time</StatTitle>
        <Stat></Stat>
      </StatsContainer>
      <StatsContainer>
        <StatTitle>Radius</StatTitle>
        <Stat></Stat>
      </StatsContainer>
      <StatsContainer>
        <StatTitle>Average Temp</StatTitle>
        <Stat></Stat>
      </StatsContainer>
    </StatWrapper>
  );
}

export default Stats;