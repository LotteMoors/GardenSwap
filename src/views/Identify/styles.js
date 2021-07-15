import styled from "styled-components";

export const Full = styled.div`
  display: flex;
  flex-flow: column;
  height: 100vh;
  margin: 0;
  padding:0;
  width: 100vw;
  align-items: center;
  background-image: url("https://images.unsplash.com/photo-1477554193778-9562c28588c0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80");
  background-repeat: no-repeat;
  background-size:cover;
`;

export const TitleContainer = styled.div`
  margin-top: 10vh;
  font-size: 1.5em;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-flow: row;
  height: 55vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-flow: column;
  height: 55vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  width: 10em;
  height: 3em;
`;

export const Img = styled.img`
  height: 9em;
  width: 9em;
  margin: 3em;
  border: 3px solid black;
  border-radius: 20px;
  cursor: pointer;
  padding: 5px;
`;
