import type { NextPage } from "next";
import { ActionButton, Button } from "../components/Shared/Button";
import { useSession, signIn, signOut } from "next-auth/react";

import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <main className="center h-100">
        <ActionButton seeMore action={() => signIn("spotify")} label="Login" />
      </main>
    </>
  );
};

export default Home;
