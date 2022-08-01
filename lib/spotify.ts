import { CurrentlyPlayingStateHandler } from "./handlers/currentlyPlayingState";
import { PausePlaybackHandler } from "./handlers/pausePlayback";
import { PlaybackStateHandler } from "./handlers/playbackState";
import { ResumePlaybackHandler } from "./handlers/resumePlayback";

import { signOut } from "next-auth/react";

export const currentlyPlayingSong = async (token: string) => {
  return fetch("https://api.spotify.com/v1/me/player/currently-playing", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      return CurrentlyPlayingStateHandler(res);
    })
    .catch((err) => Promise.reject(err));
};

export const pausePlayback = async (token: string) => {
  return fetch("https://api.spotify.com/v1/me/player/pause", {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      const result = PausePlaybackHandler(res);

      if (result.status === 401) {
        return signOut();
      }

      return result;
    })
    .catch((err) => Promise.reject(err));
};

export const resumePlayback = async (token: string) => {
  return fetch("https://api.spotify.com/v1/me/player/play", {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      const result = ResumePlaybackHandler(res);

      if (result.status === 401) {
        return signOut();
      }

      return result;
    })
    .catch((err) => Promise.reject(err));
};

export const currentPlaybackState = async (token: string) => {
  return fetch("https://api.spotify.com/v1/me/player", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      const result = PlaybackStateHandler(res);

      if (result?.status) {
        if (result.status === 401) {
          return signOut();
        }
      }

      return result;
    })
    .catch((err) => Promise.reject(err));
};
