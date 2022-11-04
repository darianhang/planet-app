import React from "react"
import { Routes, Route } from "react-router-dom"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { SpaceData } from "../data/data"

const NavContainer = styled.div`
  position: relative;
  background-color: #070724;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  height: 50px;
  padding: 10px 25px 10px 25px;
  z-index: 1000;
`

const NavTitle = styled.h1`
  margin: 0;
  padding: 0;
  font-weight: 600;
  font-size: 28px;
  color: #FFFFFF;
  letter-spacing: -1.05px;
  padding-bottom: 5px;
`

const NavLinks = styled.div`

@media only screen and (max-width: 460px) {
    display: none;
}
`

function NavBar(props) {
  console.log(SpaceData[0])

  const Ham = styled.img`
  height: 17px;
  width: 24px;

  opacity: ${props.hamStatus ? "30%" : ""};

  @media only screen and (min-width: 460px) {
    display: none;
}

`
  return (
    <NavContainer>
      <NavTitle>THE PLANETS</NavTitle>
      <Ham onClick={props.toggleOpen} src="../assets/icon-hamburger.svg"></Ham>
      <NavLinks>
        {SpaceData.map((data) => {
          return (
            <Link to={data.name}>{data.name}</Link>
          )
        })}
      </NavLinks>
    </NavContainer>
  );
}

export default NavBar;