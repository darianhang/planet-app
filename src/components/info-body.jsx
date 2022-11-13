import { Link } from "react-router-dom";
import styled from "styled-components";
import SectionNavBar from "./section-nav";

const InfoWRapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (min-width: 460px) {
    justify-content: center;
    position: static;
    width: 350px;
    margin-top: 5%;
}
`

const Title = styled.h1`
  color: #fff;
  margin-bottom: 20px;
  text-transform: uppercase;
  @media only screen and (min-width: 460px) {
    text-align: left;
    width: 100%;
    font-size: 80px;
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
  @media only screen and (min-width: 460px) {
    text-align: left;
    width: 100%;
    height: 120px;
    font-size: 14px;
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

function InfoBody(props) {
  return (
    <InfoWRapper>
      <Title>{props.name}</Title>
      <Body>{props.body}</Body>
      <Source>Source :&nbsp;<Anc href={props.source}>Wikipedia<SourceIcon src="../assets/icon-source.svg"></SourceIcon></Anc></Source>
      {props.mobile ? <SectionNavBar selected={props.selected} setSelected={props.setSelected}/> : ""}
    </InfoWRapper>
  );
}

export default InfoBody;