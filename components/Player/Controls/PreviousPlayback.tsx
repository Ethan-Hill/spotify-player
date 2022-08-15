import { PlayerControllerItem } from "./PlayerControllerItem";
import { PreviousIcon } from "../../SVG/Player/PreviousIcon";

import { previousPlayback } from "../../../lib/spotify";
import { Session } from "next-auth";

type Props = {
  session: Session;
};

export const PreviousPlayback = ({ session }: Props) => {
  const previousAction = () => {
    previousPlayback(session!.accessToken);
  };

  return (
    <>
      <PlayerControllerItem
        ariaLabel="Skip to previous song"
        action={previousAction}
      >
        <PreviousIcon />
      </PlayerControllerItem>
    </>
  );
};
