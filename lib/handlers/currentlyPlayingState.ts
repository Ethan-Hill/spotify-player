export const CurrentlyPlayingStateHandler = (res: Response) => {
  switch (res.status) {
    case 200:
      return res
        .json()
        .then((data) => Promise.resolve(data))
        .catch((err) => Promise.reject(err));

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
