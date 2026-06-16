# 🎂 Happy 23rd Birthday, Sara Kutty

A personal, romantic, funny, and heartfelt birthday website for **Sara Jain** — built with pure HTML, CSS, and JavaScript. Ready to deploy directly to GitHub Pages.

---

## 📁 Project Structure

```
/
├── index.html          ← Main page (all sections)
├── style.css           ← All styles, themes, and animations
├── script.js           ← All interactivity and JS logic
├── README.md           ← This file
└── assets/
    ├── goofy1.jpg      ← Goofy Hall of Fame photo 1
    ├── goofy2.jpg      ← Goofy Hall of Fame photo 2
    ├── goofy3.jpg      ← Goofy Hall of Fame photo 3
    ├── goofy4.jpg      ← Goofy Hall of Fame photo 4
    ├── goofy5.jpg      ← Goofy Hall of Fame photo 5
    ├── goofy6.jpg      ← Goofy Hall of Fame photo 6
    ├── baby1.jpg       ← Childhood timeline photo 1
    ├── baby2.jpg       ← Childhood timeline photo 2
    ├── baby3.jpg       ← Childhood timeline photo 3
    ├── baby4.jpg       ← Childhood timeline photo 4
    ├── flowers.jpg     ← Flower Princess section photo
    ├── beautiful.jpg   ← "Stunning Sara" section photo
    ├── poop_run.mp4    ← Emergency Sprint section video
    ├── dance.mp4       ← Dance Floor section video
    └── birthday_music.mp3  ← Optional background music
```

> **Important:** All photos and videos are loaded from the `/assets/` folder. The site works without them (it shows styled placeholders), but it comes alive with real photos.

---

## 🚀 Deploying to GitHub Pages

### Step 1 — Create the repository

1. Go to [github.com](https://github.com) and create a new **public** repository.  
   Name it whatever you like (e.g. `sara-birthday`).
2. Clone it locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/sara-birthday.git
   cd sara-birthday
   ```

### Step 2 — Add your files

Copy all four project files and the `assets/` folder into the repository:

```
sara-birthday/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── goofy1.jpg
    ├── ... (all your photos & videos)
    └── birthday_music.mp3
```

### Step 3 — Replace the placeholder media

Place **Sara's actual photos and videos** in the `/assets/` folder with these exact filenames:

| File | Used in |
|------|---------|
| `goofy1.jpg` – `goofy6.jpg` | Goofy Hall of Fame gallery |
| `baby1.jpg` – `baby4.jpg` | Baby Sara timeline |
| `flowers.jpg` | Flower Princess section |
| `beautiful.jpg` | Stunning Sara section |
| `poop_run.mp4` | Emergency Sprint section |
| `dance.mp4` | Dance Floor section |
| `birthday_music.mp3` | Optional background music |

> You can use **any common image format** (JPG, PNG, WEBP) as long as you keep the filenames identical. For videos, MP4 with H.264 encoding works best across browsers.

### Step 4 — Commit and push

```bash
git add .
git commit -m "Happy Birthday Sara 🎂"
git push origin main
```

### Step 5 — Enable GitHub Pages

1. In your repository, go to **Settings → Pages**.
2. Under **Source**, select **Deploy from a branch**.
3. Choose `main` branch and `/ (root)` folder. Click **Save**.
4. Wait about 1–2 minutes, then visit:

```
https://YOUR_USERNAME.github.io/sara-birthday/
```

That's it! Share the link with Sara on June 17th. 🎉

---

## 🎨 Customisation Guide

### Changing the birthday message (letter section)

Open `index.html` and find the section with `id="letter"`. The letter content is inside `.letter-body` — just edit the `<p>` tags directly.

### Changing rotating subtitles (hero section)

Open `script.js` and find the `subtitles` array near the top:

```js
const subtitles = [
  'My Bubbu 💕',
  'My Monkey 🐒',
  ...
];
```

Add, remove, or edit any line.

### Changing the colour palette

Open `style.css` and edit the CSS variables at the top of the `:root` block:

```css
:root {
  --rose:     #FF85A1;   /* primary pink */
  --lavender: #C084FC;   /* purple accent */
  --coral:    #FF6B6B;   /* warm red */
  ...
}
```

### Changing the music

Replace `assets/birthday_music.mp3` with your chosen audio file and keep the same filename. The music is muted by default — Sara clicks the 🎵 button to start it.

### Swapping photo captions in the gallery

In `index.html`, find the `.masonry-grid` section. Each image has a `<p class="photo-caption">` directly underneath — edit the text inside.

---

## ✨ Features

- **Loading screen** with animated progress bar
- **Dark / Light mode** toggle (preference saved across sessions)
- **Scroll progress bar** along the top of the page
- **Background music** support with toggle button
- **Rotating hero subtitle** with smooth fade transitions
- **Floating hearts** and **falling petals** animations
- **Glassmorphism trait cards** with hover lift
- **Masonry photo gallery** with hover captions and lightbox viewer
- **Animated timeline** for the Baby Sara section
- **Floral frame** with corner flower animations
- **Split-screen Football & Muscles section** with animated stat bars
- **TV broadcast section** with live ticker and clock
- **Neon dance floor** with wave bar animations
- **Cinematic reveal** for the beautiful photo section
- **Handwritten-style birthday letter** with elegant styling
- **Confetti + fireworks** celebration finale
- **Replay button** to scroll back to the top
- **Reduced-motion** support for accessibility
- **Mobile-first** responsive design

---

## 💡 Tips

- **Video file size:** Keep videos under 50 MB each for fast loading. You can compress them with [HandBrake](https://handbrake.fr/) (free).
- **Photo file size:** Aim for under 500 KB per photo. Use [Squoosh](https://squoosh.app/) to compress without losing quality.
- **Testing locally:** Open `index.html` directly in Chrome or Firefox. Some features (like video autoplay) behave slightly differently on localhost vs. a hosted domain.
- **Custom domain:** If you have a domain (e.g. `sara.yourname.com`), you can add a `CNAME` file to the repo root and configure it in GitHub Pages settings.

---

Made with 💕 for Sara Jain — turning 23 on June 17th.
