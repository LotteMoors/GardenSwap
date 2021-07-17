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
  justify-content: center;
  width: 15em;
  min-height: 30em;  
`;

export const Cross = styled.h3`
position: absolute;
top:0.2em;
right:0.2em;
cursor: pointer;
`;