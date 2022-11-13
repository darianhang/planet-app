import React from "react"
import { Routes, Route } from "react-router-dom"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { SpaceData } from "../data/data"

const SectionNavWRapper = styled.div`
  position: fixed;
  top: 71px;
  width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    height: 43px;
    z-index: 2;
    background-color: #070724;
    
    @media only screen and (min-width: 810px) {
    position: static;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 200px;
    border: none;
}
`

const SectionStyles = styled.div`
    display: flex;
    align-items: center;
    color: #fff;
    font-size: 10px;
    font-weight: bold;
    letter-spacing: 1.93px;
    font-family: 'League Spartan', sans-serif;
    text-align: center;
    justify-content: center;
    padding-top: 3px;
    width: 80px;
    @media only screen and (min-width: 810px) {
        font-size: 12px;
}
`

const SectionOne = styled(SectionStyles)`
border-bottom: ${props => props.selected == 1 ? `3px solid ${props.color}` : ""};
opacity: ${props => props.selected == 1 ? "100%" : "50%"};
height: 40px;
@media only screen and (min-width: 810px) {
    background-color: ${props => props.selected == 1 ? props.color : ""};
    border: 1px solid rgba(255, 255, 255, 0.1);
    width: 100%;
}
`

const SectionTwo = styled(SectionStyles)`
border-bottom: ${props => props.selected == 2 ? `3px solid ${props.color}` : ""};
opacity: ${props => props.selected == 2 ? "100%" : "50%"};
height: 40px;
@media only screen and (min-width: 810px) {
    background-color: ${props => props.selected == 2 ? props.color : ""};
    border: 1px solid rgba(255, 255, 255, 0.1);
    width: 100%;
}
`

const SectionThree = styled(SectionStyles)`
border-bottom: ${props => props.selected == 3 ? `3px solid ${props.color}` : ""};
opacity: ${props => props.selected == 3 ? "100%" : "50%"};
height: 40px;
@media only screen and (min-width: 810px) {
    background-color: ${props => props.selected == 3 ? props.color : ""};
    border: 1px solid rgba(255, 255, 255, 0.1);
    width: 100%;
}
`

function SectionNavBar(props) {
    console.log(props.selected)
    return (
        <SectionNavWRapper>
            <SectionOne color={props.color} selected={props.selected} onClick={() => { props.setSelected(1) }}>
                OVERVIEW
            </SectionOne>
            <SectionTwo color={props.color} selected={props.selected} onClick={() => props.setSelected(2)}>
                STRUCTURE
            </SectionTwo>
            <SectionThree color={props.color} selected={props.selected} onClick={() => props.setSelected(3)}>
                SURFACE
            </SectionThree>
        </SectionNavWRapper>
    );
}

export default SectionNavBar;