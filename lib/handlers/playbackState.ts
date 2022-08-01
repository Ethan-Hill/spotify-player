export const PlaybackStateHandler = (res: Response): any => {
  switch (res.status) {
    case 200:
      return res.json().then((data) => Promise.resolve(data.is_playing));

    case 204:
      return { message: "Playback not available", status: res.status };

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
