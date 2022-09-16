import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --mobile: 23.43rem;
    --desktop: 90rem;

    --Dark-Blue: hsl(209, 23%, 22%);
    --Very-Dark-Blue: hsl(207, 26%, 17%);
    --Dark-Blue-Text: hsl(200, 15%, 8%);
    --Dark-Gray: hsl(0, 0%, 52%);
    --Very-Light-Gray: hsl(0, 0%, 98%);
    --White: hsl(0, 0%, 100%);

  }
  * {
    box-sizing: border-box;
  }
  body {
    font-family: 'Nunito', sans-serif;
    font-size: 1.0rem;
    margin: 0px;
    padding: 0px;
    background: var(--Very-Light-Gray);
  }
  h1, h2, h3, h4, p, ul, li, ol, span, a {
    list-style: none;
    font-size: 1rem;
    text-decoration: none;
  }
  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

export default GlobalStyle;
