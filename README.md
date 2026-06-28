# Kiyo Projects

Kiyo Projects is a polished link portal for Kiyo's web service portfolio.

## Overview

This site collects multiple web services on one responsive portfolio page. It is built with Next.js App Router, TypeScript, and Tailwind CSS, and is ready to deploy on Vercel.

## Edit Service Links

Service names, descriptions, and URLs are managed in one array:

```ts
// data/projects.ts
export const projects = [
  {
    name: "Chance Vault",
    description: "Opportunities, ideas, and next actions in one place.",
    url: "#",
  },
];
```

When production URLs are ready, replace each `url: "#"` value with the live service URL. Add new services by adding another object to the same array.

## Local Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality Checks

```bash
npm run lint
npm run build
```

Both commands should pass before deploying.

## GitHub Setup

If this project is not connected to GitHub yet:

```bash
git init
git add .
git commit -m "Initial Kiyo Projects site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/kiyo-projects.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username and create the repository on GitHub before pushing.

## Deploy To Vercel

1. Go to [Vercel](https://vercel.com/) and choose **Add New Project**.
2. Import the GitHub repository for this site.
3. Keep the framework preset as **Next.js**.
4. Use the default settings:
   - Install command: `npm install`
   - Build command: `npm run build`
   - Output directory: leave blank
5. Click **Deploy**.

After deployment, update `data/projects.ts` with each service's final production URL and push again. Vercel will redeploy automatically.

## Favicon

The favicon is configured in `app/layout.tsx` and can be replaced by updating files in `public/`.
