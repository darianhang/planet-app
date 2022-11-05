import React from "react"
import { Routes, Route } from "react-router-dom"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { SpaceData } from "../data/data"

const OverlayContainer = styled.div`
    position: absolute;
    left: 25px;
    top: 175px;
    z-index: 1;
`

const OverlayImg = styled.img`
    transform: scale(0.4)
`

function SurfaceOverlay(props) {
    return (
        <OverlayContainer>
            <OverlayImg src={props.img}></OverlayImg>
        </OverlayContainer>
    );
  }
  
  export default SurfaceOverlay;