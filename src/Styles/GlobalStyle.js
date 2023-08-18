import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "omyu_pretty";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-01@1.0/omyu_pretty.woff2")
      format("woff2");
    font-weight: normal;
    font-style: normal;
  }

  * {
    box-sizing: border-box;
    font-family: "omyu_pretty";
  }

  body {
    margin: 0;
  }

  a, a:link, a:visited{
    color: #6c7178;
    text-decoration: none;
  }
`;

export default GlobalStyle;