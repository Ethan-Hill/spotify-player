This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

- Create a file called`.env.local` within the root of the project.
- Within this file we will need to declare some environment variables,
  ```
  SPOTIFY_CLIENT_ID=
  SPOTIFY_CLIENT_SECRET=
  NEXTAUTH_URL=http://localhost:3000
  SECRET=
  JWT_SCERET=
  ```
  # - Notes -
  - This will not work without all of these variables defined.
  - You will need a spotify application to get the SPOTIFY_CLIENT_ID and SPOTIFY_CLIENT_SECRET .
    You can make one [here](https://developer.spotify.com/dashboard/).

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
