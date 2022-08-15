export const fetcher = (url: string, sessionToken: string) =>
  fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${sessionToken}`,
    },
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => Promise.reject(err));
