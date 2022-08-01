import { signOut } from "next-auth/react";

export const fetcher = (url: string, sessionToken: string) =>
  fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${sessionToken}`,
    },
  })
    .then((res) => {
      if (res.status === 401) {
        return signOut();
      }

      return res.json();
    })
    .catch((err) => Promise.reject(err));
