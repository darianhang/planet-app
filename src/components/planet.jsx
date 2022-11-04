import React from "react"
import { Routes, Route } from "react-router-dom"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { SpaceData } from "../data/data"

const PlanetContainer = styled.div`
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 360px;
`

const PlanetImg = styled.img`
    transform: scale(0.5)
`

function Planet(props) {
    return (
        <PlanetContainer>
            <PlanetImg src={props.img}></PlanetImg>
        </PlanetContainer>
    );
  }
  
  export default Planet;