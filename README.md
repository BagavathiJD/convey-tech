# Convey Tech — React conversion

React + Vite conversion of the Induyst ThemeForest HTML/PHP site, keeping the original layout, CSS, fonts, icons, and assets.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Production build

```bash
npm run build
npm run preview
```

Serve the `dist/` folder with any static host. If you need PHP contact handling, copy `public/api/contact.php` to your PHP server and point the form fetch URL at it.

## Source

Original theme files live under `theme-source/` (HTML/PHP) and `public/` (CSS, fonts, images, JS plugins).
