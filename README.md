# Happy Birthday ♡

A one-page birthday site: a greeting, a sealed vintage letter that opens into a worn parchment page, polaroid photos with messages, reasons I love her, and a closing video message.

## Personalising it

Everything personal lives in **`content.js`** — her name, the letter, photo captions and messages, the reasons, and the video path.

- **Photos:** add them to `public/photos/` as `photo-1.jpg` … `photo-4.jpg` (or point `src` in `content.js` at other filenames). Add or remove entries to show more or fewer.
- **Video:** add an MP4 to `public/video/birthday-message.mp4`.

Until a photo or video is added, a soft placeholder is shown in its place.

## Running locally

```bash
npm install
netlify dev
```
