/*
* Prefixed by https://autoprefixer.github.io
* PostCSS: v7.0.29,
* Autoprefixer: v9.7.6
* Browsers: last 4 version
*/

import { createGlobalStyle } from "styled-components";
import Background from '../assets/images/pexels-adonyi-gábor-1414651.jpg';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
    --green: #78B00D;
    --yellow: #DDBF2F;
    --tan: #B6A133;
    --brown: #754A39;
    --purple: #352F33;
  }
  body {
    background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.75)), to(rgba(0, 0, 0, 0.25))),  url(${Background});
    background-image: -o-linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.25)),  url(${Background});
    background-image: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.25)),  url(${Background});
    background-color: var(--green);
    min-height: 100vh; 
    background-position: center;
    background-repeat: no-repeat; 
    background-size: cover;
    background-attachment: fixed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  h1 {
    font-family: 'Sacramento', cursive;
  }
`;

export default GlobalStyle;