import type { GetServerSideProps, NextPage } from "next";

import { useSession, getSession } from "next-auth/react";

import Head from "next/head";

import useSWR, { SWRResponse } from "swr";

import { fetcher } from "../../lib/fetcher";
import { PlayerMenu } from "../../components/Player/PlayerMenu";
import { TogglePlayback } from "../../components/Group/TogglePlayback";
import { PlayerInfo } from "../../components/Player/PlayerInfomaton";
import { SpotifyPlayerDataType } from "../../types/spotify";
import { NextPlayback } from "../../components/Player/Controls/NextPlayback";
import { PreviousPlayback } from "../../components/Player/Controls/PreviousPlayback";

const Player: NextPage = () => {
  const { data: session } = useSession();

  const SWRData: SWRResponse<SpotifyPlayerDataType> = useSWR(
    ["https://api.spotify.com/v1/me/player", session!.accessToken],
    fetcher,
    {
      refreshInterval: 500,
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

            <h4 className="text-center">{playerData.item.name}</h4>
          </div>

          <PlayerMenu>
            <PreviousPlayback session={session} />
            <TogglePlayback session={session} playerData={playerData} />
            <NextPlayback session={session} />
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
