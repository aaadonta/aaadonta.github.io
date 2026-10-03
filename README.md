# Personal Website

Jaewook Lee's Personal Website

## Font and loading assets

The site serves the same Carlito v4 and Font Awesome 6.4.0 WOFF2 files locally,
so text and icons do not wait for third-party stylesheets and connections.
`src/assets/styles/icons.css` contains the original rules for the icon classes
used in the HTML. After adding a new Font Awesome icon, run:

```sh
python3 scripts/vendor-fonts.py
```

This refreshes the font assets and CSS (network access required). Carlito keeps
all upstream language ranges and four styles; browsers fetch only the faces
and language ranges used on the page. Korean text uses the existing local IBM
Plex Sans KR files. Carlito and IBM font licenses are beside their fonts;
Font Awesome's license attribution is retained in `icons.css`.

Each page preloads the existing background and regular Latin Carlito font.
Image bytes, texture sizing/repetition, and layout CSS are unchanged. The shared
background is still approximately 21 MB, so first visits on slow connections
remain limited by that download. GitHub Pages controls HTTP cache headers.
