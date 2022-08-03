import type { GetServerSideProps, NextPage } from "next";

import { useSession, getSession } from "next-auth/react";

import Head from "next/head";

import useSWR, { SWRResponse } from "swr";

import { fetcher } from "../../lib/fetcher";
import { PlayerMenu } from "../../components/Player/PlayerMenu";
import { TogglePlayback } from "../../components/Group/TogglePlayback";
import { PlayerInfo } from "../../components/Player/PlayerInfomaton";
import { SpotifyPlayerDataType } from "../../types/spotify";

const Player: NextPage = () => {
  const { data: session } = useSession();

  const SWRData: SWRResponse<SpotifyPlayerDataType> = useSWR(
    ["https://api.spotify.com/v1/me/player", session!.accessToken],
    fetcher,
    {
      refreshInterval: 2500,
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

            <h1>{playerData.item.name}</h1>
            <h2>{playerData.item.name}</h2>
            <h3>{playerData.item.name}</h3>
            <h4>{playerData.item.name}</h4>
            <p>{playerData.item.name}</p>
          </div>

          <PlayerMenu>
            <TogglePlayback session={session} playerData={playerData} />
          </PlayerMenu>
        </main>
      </>
    );
  }
  return (
    <div className="h-100 center">
      <p>No player available</p>
    </div>
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

export default Player;
