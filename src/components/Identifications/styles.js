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
  color: #f7f6f2;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  width: 80%;
  align-items: flex-start;
  @media (max-width:768px){
    width:95%;
  }
`;

export const Card = styled.div`
  background-color: white;
  width: 20em;
  min-height: 31.5em;
  max-height:31.5em;
  position: relative;
  border-radius: 0.4em 0.4em 0em 0em;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin: 1em 0 1em 1em;
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
  border: 2px solid black;
  border-radius: 15px;
  width: 20em;
  margin-bottom: 1em;
  margin-top: 0.5em;
  @media (max-width:450px){
    margin-top:4em;
  }
 
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


export const Button = styled.button`
width: 7em;
padding: 0.3em;
border: none;
font-size: 1.2em;
border-radius: 1em;
background-color: white;
color: black;
position: absolute;
top: 0.8em;
left:1em;
&:focus {
  outline: none;
}
@media (max-width: 1024px) {
  left:1em;
}
@media (max-width: 450px) {
  left:50%;
  transform: translate(-50%, 0);
}
`
