import styled from "styled-components";

export const FileDiv = styled.div`
 display:flex;
 flex-flow: column;
 align-items:center;
 justify-content:center;
 width:100%;
 margin: 0;
 padding: 0;
`

export const Img = styled.img`
 height: 20em;
 border:3px solid black;
 border-radius:15px;
 width: 20em;
 margin-bottom:1em;
`


export const Button = styled.button`
  width: 12em;
  padding: 0.7em;
  border:none;
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


