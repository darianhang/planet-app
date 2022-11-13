import React from "react"
import { Routes, Route } from "react-router-dom"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { SpaceData } from "../data/data"
import SurfaceOverlay from "./surface-overlay"

const PlanetContainer = styled.div`
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 360px;
    @media only screen and (min-width: 460px) {
        margin: 0;
        width: 25%;
}
`

const PlanetImg = styled.img`
    transform: scale(0.5);
    @media only screen and (min-width: 460px) {
        transform: scale(0.8)
`


function Planet(props) {
    return (
        <PlanetContainer>
            <PlanetImg src={props.img}></PlanetImg>
            <SurfaceOverlay img={props.selected == 3 ? props.data.images.geology : ""}/>
        </PlanetContainer>
    );
  }
  
  export default Planet;