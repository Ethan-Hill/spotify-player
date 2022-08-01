export const PausePlaybackHandler = (res: Response) => {
  switch (res.status) {
    case 204:
      return { message: "Playback resumed", status: res.status };

    case 401:
      return { message: "Token has expired", status: res.status };

    case 403:
      return { message: "Bad OAuth request", status: res.status };

    case 429:
      return { message: "Too many requests", status: res.status };

    default:
      return {
        message: "Error when trying to get playback",
        status: res.status,
      };
  }
};
