# Jana & Yves – Video-Website

Statische Website zur Wiedergabe eines Videos vom Webserver.

## Entwicklung (mit Hot Reload)

```bash
npm install
npm run dev
```

Öffnet automatisch http://localhost:3000 im Browser mit Hot Reload.

## Video hinzufügen

Videodatei nach `public/videos/video.mp4` kopieren.
Der Pfad in `index.html` kann bei Bedarf angepasst werden:

```html
<source src="/videos/meinanderesvideo.mp4" type="video/mp4" />
```

## Build (für Produktiv-Server)

```bash
npm run build
```

Der fertige Output liegt in `dist/` und kann direkt auf dem Webserver deployed werden.
