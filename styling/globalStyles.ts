import { createGlobalStyle } from "styled-components";
import { SpotifyTheme } from "../types/theme";

const GlobalStyle = createGlobalStyle<{ theme: SpotifyTheme }>`
  body {
    font-family: 'CircularStd Book', system, -apple-system, BlinkMacSystemFont, sans-serif;
    background-color: ${(props) => props.theme.backgroundColor};
    min-height: 100vh;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    font-size: 16px;
    color: white;
  }

  html,
body,
body > div:first-child,
div#__next,
div#__next > div {
height: 100%;
}
`;

export default GlobalStyle;
