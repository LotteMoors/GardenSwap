import styled from "styled-components";

export const Button = styled.div`
  width: 5em;
  text-align: center;
  font-size: 1em;
  font-weight: 300;
  padding: 0.2em;
  border-radius: 2em;
  position: absolute;
  border: 2px solid #96d474;
  bottom: 0.5em;
  left: 0.5em;
  cursor: pointer;
  &:hover {
    background-color: #a1cf83;
  }
`;

export const Icon = styled.img`
  height: 2em;
  width: 2em;
  margin: 3em;
  cursor: pointer;
  position: absolute;
  bottom: -2.5em;
  right: -2.3em;
`;
