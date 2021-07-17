import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%;
  @media (max-width: 650px) {
    margin: 0;
   }
`;

export const Title = styled.h1`
  margin-bottom: 0.5em;
  font-size: 3.5em;
  font-weight:semi-bold;
  color: #f5eedc;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  width: 85%;
  align-items: flex-start;
`;

export const Card = styled.div`
  background-color: white;
  width: 20em;
  min-height: 30em;
  position: relative;
  border-radius: 1em;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1em; 
  @media (max-width: 400px) {
    &:last-child{
      margin-bottom: 0em;
    }
   }
`;

export const CardBody = styled.div`
  height: 13em;
  display: flex;  
  position: relative;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  
`;

export const Img = styled.img`
  height: 20em;
  border: 3px solid black;
  border-radius: 15px;
  width: 20em;
  margin-bottom: 1em;
`;

export const Name = styled.h4`
  padding: 0.7em;
  height: 3em;
  text-align: center;
`;

export const CommonName = styled.h5`
  height: 1.5em;
  text-align: center;
  font-style: italic ;
`;

export const Progress = styled.div`
  width: 70px;
  height: 70px;
  margin: 1em;
`;

export const Icon = styled.img`
height: 2em;
width: 2em;
margin: 3em;
cursor: pointer;
position: absolute;
bottom: -2.5em;
right: -2.5em;
cursor: pointer;
`

export const Button = styled.div`
width: auto;
font-size: 1em;
font-weight: 300;
padding: 0.2em;
border-radius:2em;
position: absolute;
border: 2px solid green;
bottom:0.5em;
left: 0.5em;
`
