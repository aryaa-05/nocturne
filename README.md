# Current Moon — A Nocturne for Tonight's Phase

*Current Moon* is a minimal web app that displays a curated, public-domain nocturne painting matching the actual current phase of the moon.

Designed as an aesthetic desktop dashboard or screensaver, the app calculates the moon's phase in real-time, displays local system date and time, and opens a window into history through scientific data, historical folklore, and fine art.

---

## Features

### Curated Fine Art Database
Includes a collection of 30 public-domain nocturne masterpieces from renowned artists such as James McNeill Whistler, Vincent van Gogh, Caspar David Friedrich, John Atkinson Grimshaw, Albert Pinkham Ryder, Ralph Albert Blakelock, Winslow Homer, and Utagawa Hiroshige. Each painting is fully audited with links to verified museum collections and source images.

### Offline Astronomical Math
Calculates exact moon data client-side using Jean Meeus's astronomical algorithms (Chapter 49) based on the J2000 epoch.
- **Illumination %**: Live calculation of current moon surface brightness.
- **Moon Age**: Precise days elapsed since the last new moon.
- **Next Phase Countdown**: Live calculation of days, hours, and minutes remaining until the next phase transition occurs.

###  Lunar Almanac & Folklore
Provides historical and mythic contexts for each of the 8 moon phases:
- **Science Section**: Displays current illumination and exact age in days.
- **Folklore Card**: Details cultural and agricultural lore associated with each phase (such as Diana's bow, swelling harvest tides, and ancient planting cycles).
- **Time to Next Painting**: Tells you exactly when the next phase begins and a new default nocturne will arrive.

###  Ambient Art Controls & Clock
- **Another Painting (Cycle)**: Cycle through alternative nocturnes. While initial boot strictly loads the most astronomically relevant painting, cycling allows you to discover atmospheric, phase-unspecific fallbacks.
- **Plaque Details**: Tap the painting title to view a details plaque explaining the medium, museum collection page, public-domain license, and an analysis of why the painting fits the mood.
- **All Nocturnes Gallery**: Browse the complete 30-painting curated collection with filter chips showing specific phase tags.
- **Topbar Clock**: A beautiful, minimal top-right clock showing the time, weekday, and date, designed to blend in as a screensaver.

---

## File Structure

```text
├── index.html       # Clean, semantic structure with Almanac panel and Plaque overlays
├── style.css        # Minimalist, dark glassmorphism styling and pulse micro-animations
├── app.js           # Main application state, DOM event binding, and clock updates
├── moon.js          # Client-side Meeus phase math, countdown formulas, and folklore data
├── paintings.js     # Audited database of 30 public-domain nocturnes and selection priority list
└── README.md        # Project overview and documentation
```

---

## How it Works: Astronomical Calculations

*Current Moon* requires **no internet connection** or API keys to function. All astronomical computations occur client-side:
- **Phase Fraction**: Calculated by taking the elapsed milliseconds since a known new moon epoch (January 6, 2000 18:14 UTC) and wrapping it by the mean synodic month length of `29.530588853 days`.
- **Illumination Percentage**: Derived mathematically via `(1 - cos(phase * 2π)) / 2 * 100`.
- **Phase Transition Countdown**: The app maps the current phase fraction against the phase boundaries in `PHASE_INFO`. It computes the remaining fraction until the next boundary is crossed and multiplies it by the synodic month duration, converting the result dynamically into days, hours, and minutes.

---

## Running Locally

To run the project locally, serve the directory using any HTTP server:

### Python 3
```bash
python -m http.server 8000
```
Then navigate to `http://localhost:8000`.

### Node.js (npx)
```bash
npx serve .
```
Then navigate to the URL shown (typically `http://localhost:3000` or `http://localhost:5000`).

---

## Art Attribution & Database

All paintings in the curated set are confirmed public domain under Met Open Access or Wikimedia Commons:
- View the full list of paintings, museum accession links, and source URLs in [paintings_table.md](paintings_table.md).
