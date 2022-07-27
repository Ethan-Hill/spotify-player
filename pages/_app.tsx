import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { spotifyTheme } from "../styling/spotify-profile-theme";
import { SessionProvider } from "next-auth/react";
import { DefaultSeo } from "next-seo";

import GlobalStyle from "../styling/globalStyles";
import SEO from "../assets/SEO/SEO";

import "../assets/scss/main.scss";
import { AsideNav } from "../components/Aside/Drawer";
import { MenuItem } from "../components/Aside/Item";
import { MusicNoteIcon } from "../components/SVG/MusicNoteIcon";

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <>
      <ThemeProvider theme={spotifyTheme}>
        <GlobalStyle />
        <SessionProvider session={session}>
          <DefaultSeo {...SEO} />
          <AsideNav>
            <MenuItem label="Player" href="/dashboard/player">
              <MusicNoteIcon />
            </MenuItem>
          </AsideNav>
          <Component {...pageProps} />
        </SessionProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
