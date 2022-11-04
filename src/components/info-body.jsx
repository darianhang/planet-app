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
  font-family: 'League Spartan', sans-serif;
  color: #fff;
  font-size: 11px;
  font-weight: 200;
  line-height: 22px;
  text-align: center;
  width: 80%;
`

function InfoBody(props) {
  return (
    <InfoWRapper>
      <Title>{props.name}</Title>
      <Body>{props.body}</Body>
      <Source>Source : Wikipedia</Source>
    </InfoWRapper>
  );
}

export default InfoBody;