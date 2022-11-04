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
    z-index: 1;
    background-color: #070724;
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
    height: 40px;
    width: 80px;
`

function SectionNavBar(props) {

    const SectionOne = styled(SectionStyles)`
    border-bottom: ${props.selected == 1 ? "3px solid #419EBB" : ""};
    opacity: ${props.selected == 1 ? "100%" : "50%"} 
    `

    const SectionTwo = styled(SectionStyles)`
    border-bottom: ${props.selected == 2 ? "3px solid #419EBB" : ""};
    opacity: ${props.selected == 2 ? "100%" : "50%"} 
    `

    const SectionThree = styled(SectionStyles)`
    border-bottom: ${props.selected == 3 ? "3px solid #419EBB" : ""};
    opacity: ${props.selected == 3 ? "100%" : "50%"} 
    `

    return (
        <SectionNavWRapper>
            <SectionOne onClick={() => {props.setSelected(1)}}>
                OVERVIEW
            </SectionOne>
            <SectionTwo onClick={() => props.setSelected(2)}>
                STRUCTURE
            </SectionTwo>
            <SectionThree onClick={() => props.setSelected(3)}>
                SURFACE
            </SectionThree>
        </SectionNavWRapper>
    );
}

export default SectionNavBar;