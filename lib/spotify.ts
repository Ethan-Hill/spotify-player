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
  }).then((res) => res.json().then((data) => Promise.resolve(data.is_playing)));
};
