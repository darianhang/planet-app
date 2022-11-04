import React from "react"
import { Routes, Route } from "react-router-dom"
import styled, { keyframes } from "styled-components"
import { Link } from "react-router-dom"
import { SpaceData } from "../data/data"

const slideRight = keyframes`
 0% { transform: translateY(-1000px); opacity: 0 }
 100% { transform: translateY(0); opacity: 1 }
`

const MenuContainer = styled.div`
  position: fixed;
  z-index: 1;
  background-color: #070724;
  width: 100%;
  animation-name: ${slideRight};
 animation-duration: 0.5s;
 animation-iteration-count: 1;
`

const NavLinks = styled.div`
    display: flex;
    flex-direction: column;
    color: #fff;
`

const StyledLink = styled(Link)`
    display: flex;
    text-decoration: none;
    color: #fff;
    font-family: 'League Spartan', sans-serif;
    font-weight: 600;
    font-size: 18px;
    text-transform: uppercase;
    line-height: 25px;
    letter-spacing: 1.36px;
    padding: 20px 20px 15px 20px;
    width: 100%;
`

const Icon = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: red;
  margin-right: 20px;
`

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 5px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`

function NavMenu(props) {
  console.log(SpaceData[0])

  function handleClick(){
    props.setOpen()
    props.resetSelected()
  }
  return (
    <MenuContainer className="poop" style={props.toggleOpen ? { display: "block" } : { display: "none" }}>
      <NavLinks>
        {SpaceData.map((data, i) => {
          return (
            <LinkContainer style={{ borderBottom: i == SpaceData.length - 1 ? "none" : "" }}>
              <StyledLink onClick={handleClick} to={data.name}>
                <Icon style={{ backgroundColor: data.color }}></Icon>
                {data.name}</StyledLink>
            </LinkContainer>
          )
        })}
      </NavLinks>
    </MenuContainer>
  );
}

export default NavMenu;