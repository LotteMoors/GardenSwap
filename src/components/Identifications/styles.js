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
  font-weight: semi-bold;
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
    &:last-child {
      margin-bottom: 0em;
    }
  }
`;

export const CardBody = styled.div`
  height: 13em;
  display: flex;
  position: relative;
  flex-flow: column;
  width:100%;
  &second-child
`;

export const Img = styled.img`
  height: 20em;
  border: 3px solid black;
  border-radius: 15px;
  width: 20em;
  margin-bottom: 1em;
  margin-top: 0.5em;
 
`;

export const Name = styled.h4`
  padding: 0.7em;
  height: 3em;
  text-align: center;
`;

export const CommonName = styled.h5`
  height: 1.5em;
  text-align: center;
  font-style: italic;
`;

export const ProgressContainer = styled.div`
  width: 10em;
  align-items: center;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: -0.6em;
  left:50%;
  transform: translate(-50%, 0);
`;

export const Progress = styled.div`
  width: 70px;
  height: 70px;
  margin: 1em;
  display: flex;
`;

