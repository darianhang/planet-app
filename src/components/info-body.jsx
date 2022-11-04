import { Link } from "react-router-dom";
import styled from "styled-components";

const InfoWRapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Title = styled.h1`
  color: #fff;
  margin-bottom: 20px;
  text-transform: uppercase;
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
    </InfoWRapper>
  );
}

export default InfoBody;