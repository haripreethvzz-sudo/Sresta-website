This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

Deploy on Vercel (recommended):

1. Push this repository to GitHub, GitLab, or Bitbucket.
2. Go to Vercel and import the project: https://vercel.com/new
3. For Framework Preset choose **Next.js** (Vercel usually detects it automatically).
4. Build Command: `npm run build` (or `yarn build`). Output directory: leave empty (Next.js default).
5. Set any environment variables in the Vercel Dashboard under Project Settings → Environment Variables.
6. Click Deploy. Vercel will run the `vercel-build`/`build` script and publish the site.

Local test before deploying:

```bash
npm install
npm run build
npm run start
```

If you need serverless functions or edge configuration, set them in `vercel.json` or the Vercel dashboard.

See the Next.js docs for advanced deployment options: https://nextjs.org/docs/deployment
