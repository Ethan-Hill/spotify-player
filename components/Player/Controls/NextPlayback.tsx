import { PlayerControllerItem } from "./PlayerControllerItem";
import { NextIcon } from "../../SVG/Player/NextIcon";

import { nextPlayback } from "../../../lib/spotify";
import { Session } from "next-auth";

type Props = {
  session: Session;
};

export const NextPlayback = ({ session }: Props) => {
  const nextAction = () => {
    nextPlayback(session!.accessToken);
  };

  return (
    <>
      <PlayerControllerItem ariaLabel="Skip to next song" action={nextAction}>
        <NextIcon />
      </PlayerControllerItem>
    </>
  );
};
