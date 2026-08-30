# abdulrazzak.me

Static portfolio site. No build step, no dependencies, no database.

## 1. Add your images

Replace the placeholder files in `images/`. Keep the same filenames and everything works:

| File | What it is |
|---|---|
| `images/hero.jpg` | Full-screen opening frame. Landscape. Your single strongest image. |
| `images/work-01.jpg` … `work-12.jpg` | Gallery. Any mix of portrait / landscape / square. |
| `images/portrait.png` | Your headshot in the About section. |
| `reels/reel-01.mp4` … `reel-05.mp4` | Vertical 9:16 reels. |
| `reels/reel-01.jpg` … `reel-05.jpg` | Poster frame for each reel (first frame works). |
| `images/design/design-01…03.jpg` | Design section. Delete this folder if you'd rather drop the section. |
| `cv.pdf` | The file the Download CV buttons serve. |

**Photo export:** longest edge 2000px, quality 80, sRGB, strip metadata.

**Reel export:** 1080×1920, H.264, CRF 26–28, no audio track needed for the silent preview loop — but keep audio if the reel has voice or music, it plays when tapped. Aim for under 5 MB each.

```bash
# compress a reel for web
ffmpeg -i input.mov -vf scale=1080:1920 -c:v libx264 -crf 27 -preset slow \
  -c:a aac -b:a 96k -movflags +faststart reels/reel-01.mp4

# grab the poster frame
ffmpeg -i reels/reel-01.mp4 -ss 0 -frames:v 1 -q:v 3 reels/reel-01.jpg
```

```bash
# resize + strip EXIF for the whole folder (ImageMagick)
mogrify -resize 2000x2000\> -quality 80 -strip images/*.jpg
```

## 2. Edit the captions

Open `script.js`. Everything you can change sits in the first 40 lines.

- `PHOTOS` — one line per image: file, category, caption, EXIF string.
  Categories: `corporate` `events` `portraits` `product` `location`
  Leave `exif:""` to hide the technical line.
- `REELS` — add your video IDs. The Motion section hides itself until at least one `id` is filled in.
  - YouTube `youtube.com/watch?v=ABC123` → `{ host:"youtube", id:"ABC123" }`
  - Vimeo `vimeo.com/987654321` → `{ host:"vimeo", id:"987654321" }`
- `VREELS` — the vertical reels. Three ways to add one:
  - **Vimeo** (recommended): `{ type:"vimeo", id:"1222492466", hash:"24a25a8113", poster:"…", title:"…", note:"…" }`
    Unlisted videos need `hash` — it's the `h=` value in the player URL. Public videos don't need it.
    Find it: Vimeo → the video → Share → the embed code contains `player.vimeo.com/video/ID?h=HASH`.
  - **YouTube Short**: `{ type:"youtube", id:"ABC123", poster:"…", title:"…", note:"…" }`
  - **Your own file**: `{ type:"file", src:"reels/reel-01.mp4", poster:"reels/reel-01.jpg", title:"…", note:"…" }`
  Empty the array to hide the section.

  **Vimeo privacy setting:** the video must allow embedding anywhere, or your own domain.
  Vimeo → video → Settings → Privacy → "Where can this be embedded?" → Anywhere.
  Leave it on "Nowhere" and the card shows a Private Video error.
- `DESIGNS` — the three design images. Empty the array to hide the section.

Want more or fewer than 12 photos? Add or delete lines in `PHOTOS`. The grid and the frame numbers follow automatically.

## 3. Put it online — Cloudflare Pages (free)

1. Push this folder to a GitHub repo.
2. Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git.
3. Framework preset: **None**. Build command: **leave empty**. Output directory: **/**
4. Deploy.
5. Custom domains → Set up a domain → `abdulrazzak.me` → follow the DNS instructions.

No-Git alternative: [app.netlify.com/drop](https://app.netlify.com/drop) — drag this folder in, then add the domain under Site settings → Domain management.

## Checklist before you send the link

- [ ] Every placeholder image replaced
- [ ] Captions match the actual photographs
- [ ] Every reel under 5 MB, poster frame set
- [ ] Reels tested on mobile data, not wifi
- [ ] `cv.pdf` is the current version
- [ ] Opened on a phone
- [ ] Loads in under 3 seconds on mobile data
