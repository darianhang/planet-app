import React from "react"
import { Routes, Route } from "react-router-dom"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { SpaceData } from "../data/data"

const NavContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #070724;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  height: 50px;
  padding: 10px 25px 10px 25px;
  z-index: 2;
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

const Ham = styled.img`
position: fixed;
right: 25px;
width: 100%;
height: 17px;
width: 24px;

opacity: ${props => props.hamStatus ? "30%" : ""};

@media only screen and (min-width: 460px) {
  display: none;
}

`

const NavLinks = styled.div`
  margin-right: 40px;
@media only screen and (max-width: 460px) {
    display: none;
}
`

const StyledLink = styled(Link)`
  display: inline-block;
  margin: 0 20px 0 20px;
  font-family: 'League Spartan', sans-serif;
  font-size: 12px;
  text-transform: uppercase;
  text-decoration: none;
  transition: transform 0.3s ease-out;
	-webkit-transition: transform 0.3s ease-out;
    -moz-transition: transform 0.3s ease-out;
    -o-transition: transform 0.3s ease-out;
    color: #fff;
    &:hover {
      cursor:pointer;
      transform: translateY(-2px);
  }
`

function NavBar(props) {
  console.log(SpaceData[0].overview.source)

  return (
    <NavContainer>
      <NavTitle>THE PLANETS</NavTitle>
      <Ham hamStatus={props.hamStatus} onClick={props.toggleOpen} src="../assets/icon-hamburger.svg"></Ham>
      <NavLinks>
        {SpaceData.map((data) => {
          return (
            <StyledLink to={data.name}>{data.name}</StyledLink>
          )
        })}
      </NavLinks>
    </NavContainer>
  );
}

export default NavBar;