# Gear Zero – FRC Team 8173 website

A static site (HTML, CSS, one small JS file) with no build step. Everything the site serves lives in `public/`.

## Preview locally
```
cd public
python3 -m http.server 8000
```
Open http://localhost:8000

## Deploy with GitHub Pages
1. Create a GitHub repo and push this folder to the `main` branch.
2. In the repo, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Each push to `main` runs `.github/workflows/pages.yml` and publishes `public/`.

All paths are relative, so it works at `username.github.io/repo-name/` and on a custom domain. For Netlify, Vercel or Cloudflare Pages, set the publish directory to `public` and leave the build command empty.

## Social links and daughter teams
Edit `public/js/config.js`:

- `socials` – paste your Instagram and TikTok URLs (GitHub is already set). An empty url keeps the icon but makes it non-clickable.
- `ftcTeams` – one line per FTC team (`name`, `number`, `url`, optional `logo`). Add or delete lines to change how many cards appear. An empty list hides the section.

## Replace the placeholder images
The images in `public/assets/` were cropped from the design mockup. Swap in real files with the same names:

- `logo.png` – team logo (header, footer, favicon)
- `img/hero-robot.jpg` – robot photo on the right of the hero (wide, subject on the right)
- `img/team.jpg` – team group photo
- `img/robot.jpg` – robot photo in "Our robot"
- `img/build.jpg`, `program.jpg`, `design.jpg`, `outreach.jpg` – the four team cards
- `img/outreach-feature.jpg` – outreach section photo

## Check before going live
Robot specs (weight, size, drive, control system) and the sponsor list come from the mockup or earlier public sources. Confirm them in `public/index.html`.
