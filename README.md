# Brand Images Search (Static)

Searchable gallery for [openfoodfacts/brand-images](https://github.com/openfoodfacts/brand-images).

Pure HTML/JS – works on **GitHub Pages**, Netlify, any static host.

## Features

- Search brands / stores / agencies
- Category + country filters (auto-apply)
- Prefer SVG when available
- Generate card images (color from logo + white/black)
- No server / no PHP required

## Deploy on GitHub Pages

1. Create a new repo (or use an existing one)
2. Upload the contents of this folder to the repo root (or `/docs`)
3. Settings → Pages → Source: **Deploy from a branch** → `main` / root (or `/docs`)
4. Wait a minute, open `https://<user>.github.io/<repo>/`

### Or with a `gh-pages` branch

```bash
git checkout --orphan gh-pages
git add .
git commit -m "Deploy brand images search"
git push origin gh-pages
```

Then set Pages source to the `gh-pages` branch.

## Local preview

```bash
# any static server
npx serve .
# or
python3 -m http.server 8080
```

Open http://localhost:8080

## Updating the index

If the upstream brand-images repo changes, regenerate `data/index.json` with the PHP tool from the full app (`generate_index.php` + NSI enrich), then replace the file here.
