import styled from "styled-components";

export const Full = styled.div`
  display: flex;
  flex-flow: column;
  min-height: 100vh;
  height: auto;
  margin: 0;
  padding: 0;
  width: 100vw;
  align-items: center;
  background-image: url("https://images.unsplash.com/photo-1477554193778-9562c28588c0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80");
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 450px) {
    background-image: none;
  }
`;

export const IDContainer = styled.div`
  display: flex;
  flex-flow: column;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  max-width: 100vw;
  min-width: 80vw;
  align-items: center;
  justify-content: center;
  background-image: url("https://images.unsplash.com/photo-1547937233-48fbe662b51e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1366&q=80");
  background-repeat: no-repeat;
  background-size: cover;
`;

export const TitleContainer = styled.div`
  margin-top: 4vh;
  font-size: 1.9em;
  text-align: center;
  color: #5c2d05;
  @media (max-width: 450px) {
    margin: 2vh;
  }
`;

export const Container = styled.div`
  display: flex;
  height: 65vh;
  min-width: 60vw;
  max-width: 100vw;
  align-items: center;
  justify-content: center;
`;

export const IconContainer = styled.div`
  height: 15em;
  width: 35em;
  border-radius: 1em;
  background-color: rgba(255, 254, 250, 0.8);
  display: flex;
  flex-flow: row;
  justify-content:center;
  align-items:center;
  @media (max-width: 650px) {
    background-color: white;
  }
`;

export const UploadContainer = styled.div`
  display: flex;
  flex-flow: column;
  height: 50vh;
  margin: 5em;
  padding: 0em 2em 1em 2em;
  width: 100vw;
  align-items: center;
  justify-content: center;
`;

export const WebcamContainer = styled.div`
  display: flex;
  flex-flow: column;
  height: 65vh;
  margin: 3em;
  padding: 1em;
  width: 100vw;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  width: 7em;
  padding: 0.3em;
  border: none;
  font-size: 1.2em;
  border-radius: 1em;
  background-color: #6b2f37;
  color: #e4dee3;
  &:hover {
    background-color: #513438;
  }
  &:focus {
    outline: none;
  }
`;

export const Img = styled.img`
  height: 9em;
  width: 9em;
  margin: 5em;
  border: 3px solid #006600;
  border-radius: 30px;
  cursor: pointer;
  padding: 5px;
  @media (max-width: 450px) {
    margin:0.5em;
  }
`;

export const Error = styled.h3`
  margin-top: 2em;
  margin-bottom: -1em;
  font-weight: 300;
  color: #f0380e;
  @media (max-width: 450px) {
    margin-bottom: 0.8em;
    margin-top: 0;
  }
`;
