import React from "react"
import { Routes, Route } from "react-router-dom"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { SpaceData } from "../data/data"

const OverlayContainer = styled.div`
    position: absolute;
    width: 100vw;
    z-index: 1;
`

const OverlayImg = styled.img`
    position: absolute;
    top: -120px;
    left: 0;
    right: 0;
    margin: auto;
    transform: scale(0.4);
    @media only screen and (min-width: 810px) {
    top: -40px;
    left: 25%;
    right: 25%;
    transform: scale(0.7);
    @media only screen and (min-width:810px) and (max-width:1080px) {
        transform: scale(0.5);
}
}
`

function SurfaceOverlay(props) {
    return (
        <OverlayContainer>
            <OverlayImg src={props.img}></OverlayImg>
        </OverlayContainer>
    );
  }
  
  export default SurfaceOverlay;