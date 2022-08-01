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
import { ArrowLeft } from "../components/SVG/Common/ArrowLeft";
import { BackButton } from "../components/Shared/Back";
import { useRouter } from "next/router";

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const router = useRouter();

  return (
    <>
      <ThemeProvider theme={spotifyTheme}>
        <GlobalStyle />
        <SessionProvider session={session}>
          <DefaultSeo {...SEO} />

          <BackButton action={() => router.push("/dashboard")}>
            <ArrowLeft />
          </BackButton>

          {session ? (
            <AsideNav>
              <MenuItem label="Player" href="/dashboard/player">
                <MusicNoteIcon />
              </MenuItem>
            </AsideNav>
          ) : null}

          <Component {...pageProps} />
        </SessionProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
