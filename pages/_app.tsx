import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { spotifyTheme } from "../styling/spotify-profile-theme";
import { SessionProvider } from "next-auth/react";
import { DefaultSeo } from "next-seo";

import GlobalStyle from "../styling/globalStyles";
import SEO from "../assets/SEO/SEO";

import "../assets/scss/main.scss";

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <>
      <ThemeProvider theme={spotifyTheme}>
        <GlobalStyle />
        <SessionProvider session={session}>
          <DefaultSeo {...SEO} />
          <Component {...pageProps} />
        </SessionProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
