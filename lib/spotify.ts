import { CurrentlyPlayingStateHandler } from "./handlers/currentlyPlayingState";
import { PausePlaybackHandler } from "./handlers/pausePlayback";
import { PlaybackStateHandler } from "./handlers/playbackState";
import { ResumePlaybackHandler } from "./handlers/resumePlayback";

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
      return PausePlaybackHandler(res);
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
      return ResumePlaybackHandler(res);
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
      return PlaybackStateHandler(res);
    })
    .catch((err) => Promise.reject(err));
};
