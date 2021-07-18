import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  position: relative;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  width: 20em;
  min-height: 30em;  
`;

export const Container = styled.div`
  display: flex;
  position: relative;
  flex-flow: column;
  justify-content: space-around;
  align-items:center;
  width: 15em;
  height: 25em; 
`;

export const Cross = styled.h3`
position: absolute;
top:-0.4em;
right:0.2em;
cursor: pointer;
`;

export const Title = styled.h2`
`

export const List = styled.ul`
height:100%;
display:flex;
flex-flow: column;
justify-content:center;
padding: 0.5em;
`

export const ListItem = styled.li`
margin:0.4em;
`

export const Link = styled.a`
font-size:1.3em;
text-decoration: underline;
color:black;
&:hover{
  color: #319615;
}
`