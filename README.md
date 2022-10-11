## Setup

1. Clone Repository
2. Setup new Github remote repository
3. Run `yarn upgrade-interactive --latest` to upgrade to latest dependencies
4. Go to [Favicon Generator](https://realfavicongenerator.net/) and create favicons `/favicon.ico /icon.svg /apple-touch-icon.png /browserconfig.xml /manifest.webmanifest` and put files in public folder
5. Open `public/manifest.webmanifest` & `/browserconfig.xml` and update paths
6. Open `/public/robots.txt` and update site url
7. Open `/astro.config.mjs` and update site url
8. Open `/layouts/Layout.astro` and update tags
9. Create `/og-image` file and put in public folder `/images` (1200 x 637)
10. Link fonts in `/layouts/Layout.astro` using `<link rel="preconnect" href="font link">`
11. Customize Tailwind config file `/tailwind.config.cjs`
12. Update package.json name and readme info

## Reminders

- For every page import `<Layout title=''>` for meta
- Use `<Image />` component for all images used
- Use [Hero Icons](https://heroicons.com/) for every icon and SVG
- Design mobile first and use responsive design tool

## Resources

[Astro Docs](https://docs.astro.build)\
[Tailwind CSS Docs](https://tailwindcss.com/docs/installation)\
[Tailwind UI Docs](https://tailwindui.com/)\
[Hero Icons](https://heroicons.com/)

## Commands

| Command             | Action                                             |
| :------------------ | :------------------------------------------------- |
| `yarn install`      | Installs dependencies                              |
| `yarn dev`          | Starts local dev server at `localhost:3000` and on network       |
| `yarn build`        | Build your production site to `./dist/`            |
| `yarn preview`      | Preview your build locally, before deploying       |
| `yarn astro ...`    | Run CLI commands like `astro add`, `astro preview` |
| `yarn astro --help` | Get help using the Astro CLI                       |
