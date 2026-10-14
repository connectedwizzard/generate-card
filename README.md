# Brand Images Search (Static / GitHub Pages)

**Version:** `1.1.0+bff39fe5`  
**Build date:** 2026-10-15  

See `VERSION.txt` for feature list and identification.

---

Pure HTML/JS gallery for [openfoodfacts/brand-images](https://github.com/openfoodfacts/brand-images).  
Works on **GitHub Pages**, Netlify, or any static host.

## Features

- Search + category + country filters (client-side)
- SVG preferred when available
- Card generator (detected colors + white/black)
- Local logo file upload
- No server / no PHP

## Deploy on GitHub Pages

1. Upload folder contents to a repo root (or `/docs`)
2. Settings → Pages → Deploy from branch → `main` / root
3. Open `https://<user>.github.io/<repo>/`

## Local preview

```bash
python3 -m http.server 8080
# or: npx serve .
```

## Files

| Path | Purpose |
|------|---------|
| `index.html` | Search UI |
| `generate-card.html` | Card generator |
- Local logo file upload
| `data/index.json` | Logo index |
| `VERSION.txt` | Build identity |
