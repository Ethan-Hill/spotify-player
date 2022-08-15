import { PlayerControllerItem } from "../Player/Controls/PlayerControllerItem";
import { PauseIcon } from "../SVG/Player/PauseIcon";
import { PlayIcon } from "../SVG/Player/PlayIcon";

import { pausePlayback, resumePlayback } from "../../lib/spotify";
import { Session } from "next-auth";
import { SpotifyPlayerDataType } from "../../types/spotify";

type Props = {
  session: Session;
  playerData: SpotifyPlayerDataType;
};

export const TogglePlayback = ({ session, playerData }: Props) => {
  const playAction = () => {
    resumePlayback(session!.accessToken);
  };

  const pauseAction = async () => {
    pausePlayback(session!.accessToken);
  };

  return (
    <>
      {!playerData.is_playing ? (
        <PlayerControllerItem ariaLabel="Resume Song" action={playAction}>
          <PlayIcon />
        </PlayerControllerItem>
      ) : (
        <PlayerControllerItem ariaLabel="Pause Song" action={pauseAction}>
          <PauseIcon />
        </PlayerControllerItem>
      )}
    </>
  );
};
