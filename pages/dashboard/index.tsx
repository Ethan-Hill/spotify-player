import type { GetServerSideProps, NextPage } from "next";
import { ActionButton } from "../../components/Shared/Button";
import { Link } from "../../components/Shared/Link";

import { Avatar } from "../../components/User/Avatar";
import { useSession, signIn, signOut, getSession } from "next-auth/react";

import Head from "next/head";

const Dashboard: NextPage = () => {
  const { data: session } = useSession();

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <main className="center h-100 flex flex-col">
        <p className="text-center">{JSON.stringify(session)}</p>
        <div className="center flex-col my-lg">
          <Avatar
            avatarSrc={session?.user?.image as string}
            className="mb-sm"
          />
          <Link
            url={`https://open.spotify.com/user/${session?.id}`}
            altText="Spotify Profile"
            label={session?.user?.name}
            className="text-xxl font-w-bold"
            target="_blank"
          />
        </div>
        <ActionButton action={() => signOut()} label="Log out" />
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
};

export default Dashboard;
