import { Link } from "react-router-dom";
import styled from "styled-components";
import SectionNavBar from "./section-nav";

const InfoWRapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 810px) {
    justify-content: center;
    position: static;
    width: 350px;
    margin-top: 5%;
}

@media only screen and (min-width:810px) and (max-width:1080px) {
    flex-direction: row;
    width: 100%;
}
`

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

    @media only screen and (min-width: 810px) {
    justify-content: center;
    position: static;
    width: 350px;
    margin-top: 5%;
}

@media only screen and (min-width:810px) and (max-width:1080px) {
    justify-content: space-around;
    align-items: flex-start;
    width: 50%;
}

`

const Title = styled.h1`
  color: #fff;
  margin-bottom: 20px;
  text-transform: uppercase;
  @media only screen and (min-width: 810px) {
    text-align: left;
    width: 100%;
    font-size: 80px;
}

@media only screen and (min-width:810px) and (max-width:1080px) {
  font-size: 48px;
}
`

const Body = styled.p`
  font-family: 'League Spartan', sans-serif;
  color: #fff;
  font-size: 11px;
  font-weight: 200;
  line-height: 22px;
  text-align: center;
  width: 80%;
  margin-bottom: 20px;
  @media only screen and (min-width: 810px) {
    text-align: left;
    width: 100%;
    height: 120px;
    font-size: 14px;
}

@media only screen and (min-width:810px) and (max-width:1080px) {
    justify-content: space-around;
    width: 80%;
}

`

const Source = styled.p`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
  font-family: 'League Spartan', sans-serif;
  color: #fff;
  font-size: 11px;
  font-weight: 500;
  line-height: 22px;
  text-align: center;
  width: 80%;
  margin-bottom: 24px;

  @media only screen and (min-width:810px) and (max-width:1080px) {
    text-align: left;
    justify-content: flex-start;
}
`

const SourceIcon = styled.img`
  height: 10px;
  width: 10px;
  margin-left: 3px;
`

const Anc = styled.a`
  text-decoration: none;
  color: #fff;
`

const NavWrapper = styled.div`
    justify-content: center;
    position: static;
    width: 350px;
    margin-top: 5%;
    @media only screen and (max-width: 810px) {
      width: 100vw;
}
`

function InfoBody(props) {
  return (
    <InfoWRapper>
      <BodyWrapper>
        <Title>{props.name}</Title>
        <Body>{props.body}</Body>
        <Source>Source :&nbsp;<Anc href={props.source}>Wikipedia<SourceIcon src="../assets/icon-source.svg"></SourceIcon></Anc></Source>
      </BodyWrapper>
      <NavWrapper>{props.mobile ? <SectionNavBar color={props.color} selected={props.selected} setSelected={props.setSelected} /> : ""}</NavWrapper>
    </InfoWRapper>
  );
}

export default InfoBody;