import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`html,body{
  @import url('https://fonts.googleapis.com/css?family=Source+Code+Pro:400,900|Source+Sans+Pro:300,900&display=swap');
    font-family: "Source Sans Pro",Source-code-pro , monospace, 
    sans-serif;
    -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color:#fff;
  color:black;
  font-size:16px;

}`;
