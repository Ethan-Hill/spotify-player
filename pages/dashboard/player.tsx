import type { GetServerSideProps, NextPage } from "next";
import { useEffect, useState } from "react";

import { useSession, getSession } from "next-auth/react";

import Head from "next/head";
import { PlayerItem } from "../../components/Player/Controls/Play";
import { PlayerMenu } from "../../components/Player/PlayerMenu";
import { PlayIcon } from "../../components/SVG/Player/PlayIcon";
import { PauseIcon } from "../../components/SVG/Player/PauseIcon";

import {
  pausePlayback,
  resumePlayback,
  currentPlaybackState,
} from "../../lib/spotify";

const Player: NextPage = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const { data: session } = useSession();

  useEffect(() => {
    const interval = setInterval(() => {
      currentPlaybackState(session?.accessToken as string).then((state) => {
        if (state) {
          setIsPlaying(true);
        } else {
          setIsPlaying(false);
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }),
    [isPlaying];

  const playAction = () => {
    resumePlayback(session?.accessToken as string).then(async () => {
      await currentPlaybackState(session?.accessToken as string).then(
        (isPlaying) => setIsPlaying(isPlaying)
      );
    });
  };

  const pauseAction = async () => {
    pausePlayback(session?.accessToken as string).then(async () => {
      await currentPlaybackState(session?.accessToken as string).then(
        (isPlaying) => setIsPlaying(isPlaying)
      );
    });
  };

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <main className="center h-100">
        <PlayerMenu>
          {!isPlaying ? (
            <PlayerItem action={playAction}>
              <PlayIcon />
            </PlayerItem>
          ) : (
            <PlayerItem action={pauseAction}>
              <PauseIcon />
            </PlayerItem>
          )}
        </PlayerMenu>
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

export default Player;
