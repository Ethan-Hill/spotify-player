import { PlayerItem } from "../Player/Controls/Play";
import { PauseIcon } from "../SVG/Player/PauseIcon";
import { PlayIcon } from "../SVG/Player/PlayIcon";

import { pausePlayback, resumePlayback } from "../../lib/spotify";
import { Session } from "next-auth";
import { PlayerData } from "../../types/playerData";
import { useSWRConfig } from "swr";

type Props = {
  session: Session;
  playerData: PlayerData;
};

export const TogglePlayback = ({ session, playerData }: Props) => {
  const { mutate } = useSWRConfig();

  const playAction = () => {
    resumePlayback(session!.accessToken);
    mutate("https://api.spotify.com/v1/me/player/play");
  };

  const pauseAction = async () => {
    pausePlayback(session!.accessToken);
    mutate("https://api.spotify.com/v1/me/player/pause");
  };

  return (
    <>
      {!playerData.is_playing ? (
        <PlayerItem action={playAction}>
          <PlayIcon />
        </PlayerItem>
      ) : (
        <PlayerItem action={pauseAction}>
          <PauseIcon />
        </PlayerItem>
      )}
    </>
  );
};
