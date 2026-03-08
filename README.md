# NEXUS Corp – Enterprise Systems Spiel

## Setup

```bash
npm install
npm run dev
```

## Build für Deployment

```bash
npm run build
```

Der `dist/` Ordner kann auf GitHub Pages, Netlify oder Vercel deployed werden.

## Netlify Deployment (empfohlen)

1. GitHub Repo erstellen, diesen Ordner pushen
2. netlify.com → "Add new site" → "Import from Git"
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy → fertig

## GitHub Pages Deployment

1. `npm run build`
2. Den `dist/` Inhalt in einen `gh-pages` Branch pushen
   (oder GitHub Actions nutzen)
