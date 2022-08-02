import type { GetServerSideProps, NextPage } from "next";

import { useSession, getSession } from "next-auth/react";

import Head from "next/head";

import useSWR, { SWRResponse } from "swr";

import { fetcher } from "../../lib/fetcher";
import { PlayerData } from "../../types/playerData";
import { PlayerMenu } from "../../components/Player/PlayerMenu";
import { TogglePlayback } from "../../components/Group/TogglePlayback";
import { PlayerInfo } from "../../components/Player/PlayerInfomaton";

const Player: NextPage = () => {
  const { data: session } = useSession();

  const SWRData: SWRResponse<PlayerData> = useSWR(
    ["https://api.spotify.com/v1/me/player", session!.accessToken],
    fetcher,
    {
      refreshInterval: 5000,
    }
  );

  if (session && SWRData.data?.item) {
    const playerData = SWRData.data;

    return (
      <>
        <Head>
          <title>Home</title>
        </Head>

        <main className="center h-100-player">
          <div>
            <div className="center mb-md">
              <PlayerInfo
                src={playerData.item.album.images[0].url}
                alt="album"
              />
            </div>

            <p>{playerData.item.name}</p>
          </div>

          <PlayerMenu>
            <TogglePlayback session={session} playerData={playerData} />
          </PlayerMenu>
        </main>
      </>
    );
  }
  return <div>No player available</div>;
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

export default Player;
