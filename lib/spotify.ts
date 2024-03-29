import { CurrentlyPlayingStateHandler } from "./handlers/currentlyPlayingState";
import { PausePlaybackHandler } from "./handlers/pausePlayback";
import { PlaybackStateHandler } from "./handlers/playbackState";
import { ResumePlaybackHandler } from "./handlers/resumePlayback";
import { NextPlaybackHandler } from "./handlers/nextPlayback";
import { PreviousPlaybackHandler } from "./handlers/previousPlayback";

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

      return result;
    })
    .catch((err) => Promise.reject(err));
};

export const nextPlayback = async (token: string) => {
  return fetch("https://api.spotify.com/v1/me/player/next", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      const result = NextPlaybackHandler(res);

      return result;
    })
    .catch((err) => Promise.reject(err));
};

export const previousPlayback = async (token: string) => {
  return fetch("https://api.spotify.com/v1/me/player/previous", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      const result = PreviousPlaybackHandler(res);

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

      return result;
    })
    .catch((err) => Promise.reject(err));
};
