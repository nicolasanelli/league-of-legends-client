import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    background-size: cover;
    background-color: #7a7a7a;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    font-family: "Roboto", -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: inherit;
  }

  ul {
    padding-inline-start: 0;
    margin-inline-start: 0;
    margin-block-start: 0;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;
