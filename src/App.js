import React from "react";
import styled from "@emotion/styled";
import { useTheme } from "./ThemeContext";

const Wrapper = styled("div")`
  background: ${props => props.theme.background};
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Roboto";
  h1 {
    color: ${props => props.theme.body};
  }
  button {
    background: #61dafb;
    border: none;
    font-size: 16px;
    outline: none;
    padding: 1em;
  }
`;

const App = () => {
  const themeState = useTheme();
  return (
    <Wrapper>
      <h1>Dark Night Rises</h1>
      <div>
        <button onClick={() => themeState.toggle()}>
          {themeState.dark ? "Light Mode for Wayne" : "Dark Mode for Batman"}
        </button>
      </div>
    </Wrapper>
  );
};

export default App;
