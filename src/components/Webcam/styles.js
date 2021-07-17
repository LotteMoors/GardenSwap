import styled from "styled-components";

export const WebcamContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  margin-top: 10px;
  width: 100%;
`;


export const Img = styled.img`
  border-radius: 45px;
`;

export const WebcamButton = styled.button`
  width: 75%;
  padding: 0.2em;
  border: none;
  font-size: 1.2em;
  border-radius: 0 0 1em 1em;
  background-color: #241516;
  color: #e4dee3;
  margin-bottom: 0.9em;
  &:hover {
    background-color: #333333;
  }
  &:focus{
    outline:none ;
  }
`;

export const Button = styled.button`
  width: 12em;
  padding: 0.7em;
  border: none;
  font-size: 1.2em;
  border-radius: 1em;
  background-color:#6b2f37 ;
  color: #e4dee3;
  &:hover {
    background-color: #8f474d ;
  }
  &:focus{
    outline:none ;
  }
`;
