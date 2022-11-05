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
    top: 50px;
    left: 0;
    right: 0;
    margin: auto;
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