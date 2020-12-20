import { createGlobalStyle } from 'styled-components';
import bg from './assets/images/clouds-2.jpeg';

declare module 'styled-components' {
  /* tslint:disable */
  export interface DefaultTheme {}
}

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: inherit;
}
html {
  font-size: 16px;
}
body {
  font-family: 'Poppins', sans-serif;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  background: url(${bg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
}
#root {
  width: 100%;
  padding: 0 2rem 5rem;
  @media (max-width: 500px) {
    padding: 0 1.3rem 4rem;
  }
}
`;
