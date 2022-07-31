import { resolve } from "path";

export const currentlyPlayingSong = async (token: string) => {
  return fetch("https://api.spotify.com/v1/me/player/currently-playing", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const pausePlayback = async (token: string) => {
  return fetch("https://api.spotify.com/v1/me/player/pause", {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const resumePlayback = async (token: string) => {
  return fetch("https://api.spotify.com/v1/me/player/play", {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const currentPlaybackState = async (token: string) => {
  return fetch("https://api.spotify.com/v1/me/player", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      switch (res.status) {
        case 200:
          return res.json().then((data) => Promise.resolve(data.is_playing));

        case 204:
          return { message: "Playback not available", status: res.status };

        case 401:
          return { message: "Token has expired", status: res.status };

        case 429:
          return { message: "Too many requests", status: res.status };

        default:
          return {
            message: "Error when trying to get playback",
            status: res.status,
          };
      }
    })
    .catch((err) => Promise.reject(err));
};
