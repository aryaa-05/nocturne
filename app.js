// app.js — Nocturne main application logic
import { getMoonPhase, getDaySeed, PHASE_INFO, LUNAR_FOLKLORE, SYNODIC_MONTH_MS } from './moon.js';
import { PAINTINGS, selectPainting } from './paintings.js';

// ─── State ──────────────────────────────────────────────────────────────────
const state = {
  moon: null,
  painting: null,
  sidebarOpen: true,
  plaqueOpen: false,
  galleryOpen: false,
};

// ─── DOM refs ────────────────────────────────────────────────────────────────
const $ = id => document.getElementById(id);

const els = {
  loadingScreen:   $('loading-screen'),
  paintingBg:      $('painting-bg'),

  // Topbar
  galleryBtn:      $('gallery-btn'),
  sidebarToggle:   $('sidebar-toggle'),
  refreshBtn:      $('refresh-btn'),
  topbarTime:      $('topbar-time'),
  topbarDay:       $('topbar-day'),
  topbarDate:      $('topbar-date'),

  // Sidebar
  sidebar:             $('sidebar'),
  sidebarClose:        $('sidebar-close'),
  almanacPhaseTitle:   $('almanac-phase-title'),
  almanacIllumination: $('almanac-illumination'),
  almanacAge:          $('almanac-age'),
  folkloreTheme:       $('folklore-theme'),
  folkloreLore:        $('folklore-lore'),
  transitionCountdown: $('transition-countdown'),

  // Caption
  phaseText:       $('phase-text'),
  illuminationPct: $('illumination-pct'),
  phaseLine:       $('phase-line'),
  paintingTitle:   $('painting-title'),
  paintingMeta:    $('painting-meta'),

  // Plaque
  plaqueOverlay:   $('plaque-overlay'),
  plaqueClose:     $('plaque-close'),
  plaqueArtist:    $('plaque-artist'),
  plaquePaintingTitle: $('plaque-painting-title'),
  plaqueYear:      $('plaque-year'),
  plaqueMedium:    $('plaque-medium'),
  plaqueMuseum:    $('plaque-museum'),
  plaqueLicense:   $('plaque-license'),
  plaquePhase:     $('plaque-phase'),
  plaqueWhyText:   $('plaque-why-text'),
  plaqueTags:      $('plaque-tags'),
  plaqueLinks:     $('plaque-links'),

  // Gallery
  galleryOverlay:  $('gallery-overlay'),
  galleryClose:    $('gallery-close'),
  galleryGrid:     $('gallery-grid'),
  galleryCount:    $('gallery-count'),
};

// ─── Phase description sentences ─────────────────────────────────────────────
const PHASE_SENTENCES = {
  new:             "Tonight's moon is new — invisible, dark, and new. The sky belongs entirely to the stars.",
  waxing_crescent: "A waxing crescent moon hangs in the western sky — a thin sliver of returning light.",
  first_quarter:   "The moon is at first quarter tonight — exactly half-lit, balanced between darkness and full light.",
  waxing_gibbous:  "Tonight's moon is waxing gibbous, more than half-lit and growing toward full. The night is bright.",
  full:            "The moon is full tonight — maximum illumination, rising opposite the sun, flooding the landscape with light.",
  waning_gibbous:  "Past full, the moon is waning gibbous — still bright, but the slow retreat toward dark has begun.",
  last_quarter:    "The moon is at last quarter — half dark, half lit, rising at midnight, setting at noon.",
  waning_crescent: "A waning crescent moon rises before dawn — the last sliver before darkness. Ancient and quiet.",
};

// ─── Utility ────────────────────────────────────────────────────────────────
function formatPhaseSentence(moon, painting) {
  const base = PHASE_SENTENCES[moon.phaseKey] || '';
  const illum = moon.illumination;
  return `${base} ${illum}% illuminated.`;
}

function updateTopbarTime() {
  const d = new Date();
  const hours = d.getHours();
  const minutes = d.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const displayHours = hours % 12 || 12;
  const displayMinutes = String(minutes).padStart(2, '0');
  const timeString = `${displayHours}:${displayMinutes} ${ampm}`;

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const dayName = days[d.getDay()];
  const monthName = months[d.getMonth()];
  const dateNum = d.getDate();
  const yearNum = d.getFullYear();

  if (els.topbarTime) els.topbarTime.textContent = timeString;
  if (els.topbarDay) els.topbarDay.textContent = dayName;
  if (els.topbarDate) els.topbarDate.textContent = `${monthName} ${dateNum}, ${yearNum}`;
}

function updateAlmanac() {
  const moon = state.moon;
  if (!moon) return;

  // 1. Phase title
  if (els.almanacPhaseTitle) {
    els.almanacPhaseTitle.textContent = moon.phaseName;
  }

  // 2. Science stats
  if (els.almanacIllumination) {
    els.almanacIllumination.textContent = `${moon.illumination}%`;
  }
  if (els.almanacAge) {
    els.almanacAge.textContent = `${moon.daysSinceNew.toFixed(1)} days`;
  }

  // 3. Folklore
  const folklore = LUNAR_FOLKLORE[moon.phaseKey];
  if (folklore) {
    if (els.folkloreTheme) els.folkloreTheme.textContent = folklore.theme;
    if (els.folkloreLore) els.folkloreLore.textContent = folklore.lore;
  }

  // 4. Next painting transition
  const currentPhaseConfig = PHASE_INFO.find(p => moon.phaseKey === p.key);
  if (currentPhaseConfig) {
    let fractionRemaining = currentPhaseConfig.end - moon.phase;
    if (fractionRemaining < 0) fractionRemaining = 0;
    const msRemaining = fractionRemaining * SYNODIC_MONTH_MS;

    const currentIndex = PHASE_INFO.findIndex(p => moon.phaseKey === p.key);
    const nextIndex = (currentIndex + 1) % PHASE_INFO.length;
    const nextPhaseConfig = PHASE_INFO[nextIndex];

    const days = Math.floor(msRemaining / (24 * 3600 * 1000));
    const hours = Math.floor((msRemaining % (24 * 3600 * 1000)) / (3600 * 1000));
    const minutes = Math.floor((msRemaining % (3600 * 1000)) / (60 * 1000));

    let countdownStr = '';
    if (days > 0) {
      countdownStr = `${nextPhaseConfig.name} in ${days}d ${hours}h`;
    } else if (hours > 0) {
      countdownStr = `${nextPhaseConfig.name} in ${hours}h ${minutes}m`;
    } else {
      countdownStr = `${nextPhaseConfig.name} in ${minutes}m`;
    }

    if (els.transitionCountdown) {
      els.transitionCountdown.textContent = countdownStr;
    }
  }
}

function phaseDisplayName(key) {
  return {
    new:             'New Moon',
    waxing_crescent: 'Waxing Crescent',
    first_quarter:   'First Quarter',
    waxing_gibbous:  'Waxing Gibbous',
    full:            'Full Moon',
    waning_gibbous:  'Waning Gibbous',
    last_quarter:    'Last Quarter',
    waning_crescent: 'Waning Crescent',
  }[key] || key;
}

// ─── Init ────────────────────────────────────────────────────────────────────
async function init() {
  const localDate = new Date();

  // 1. Compute moon phase and select painting for system date
  state.moon = getMoonPhase(localDate);
  const seed = getDaySeed(localDate);
  state.painting = selectPainting(state.moon.phaseKey, seed, false);

  // 2. Render initial views
  renderPhaseCaption();
  updateAlmanac();
  updateTopbarTime();

  // 3. Dismiss loading screen after painting loads
  if (state.painting) {
    const img = new Image();
    img.onload = () => {
      els.paintingBg.style.backgroundImage = `url('${state.painting.imageUrl}')`;
      els.paintingBg.classList.add('loaded');
      setTimeout(() => {
        els.loadingScreen.classList.add('fade-out');
        setTimeout(() => { els.loadingScreen.style.display = 'none'; }, 800);
      }, 200);
    };
    img.onerror = () => {
      setTimeout(() => {
        els.loadingScreen.classList.add('fade-out');
        setTimeout(() => { els.loadingScreen.style.display = 'none'; }, 800);
      }, 800);
    };
    img.src = state.painting.imageUrl;
  } else {
    els.loadingScreen.classList.add('fade-out');
    setTimeout(() => { els.loadingScreen.style.display = 'none'; }, 800);
  }

  // 4. Start periodic clock and transition updater (every 10 seconds)
  setInterval(() => {
    updateTopbarTime();
    updateAlmanac();
  }, 10000);

  // 5. Wire up event listeners
  bindEvents();
}

// ─── Render functions ────────────────────────────────────────────────────────
function renderPhaseCaption() {
  const moon = state.moon;
  const painting = state.painting;

  els.phaseText.textContent   = moon.phaseName.toUpperCase();
  els.illuminationPct.textContent = `${moon.illumination}% lit`;
  els.phaseLine.textContent = formatPhaseSentence(moon, painting);

  els.paintingTitle.textContent = painting.title;
  els.paintingMeta.textContent  = `${painting.artist}  ·  ${painting.year}`;
}

// ─── Plaque ──────────────────────────────────────────────────────────────────
function openPlaque(painting) {
  const moon = state.moon;

  els.plaqueArtist.textContent = painting.artist;
  els.plaquePaintingTitle.textContent = painting.title;
  els.plaqueYear.textContent  = painting.year;
  els.plaqueMedium.textContent = painting.medium;
  els.plaqueMuseum.textContent = painting.museum;
  els.plaqueLicense.textContent = painting.license;

  // Phase info
  const hasSpecificPhase = Array.isArray(painting.phase) && painting.phase.length > 0;
  const matchedPhase = hasSpecificPhase
    ? `Depicts ${painting.phase.map(phaseDisplayName).join(' / ')}`
    : 'Symbolic / atmospheric moonlight (unspecified phase)';
  els.plaquePhase.textContent = matchedPhase;

  // Why text
  els.plaqueWhyText.textContent = painting.description;

  // Tags
  els.plaqueTags.innerHTML = '';
  const phaseTag = document.createElement('span');
  phaseTag.className = 'plaque-tag phase';
  phaseTag.textContent = `Tonight: ${moon.phaseName}`;
  els.plaqueTags.appendChild(phaseTag);

  painting.mood.forEach(m => {
    const tag = document.createElement('span');
    tag.className = 'plaque-tag';
    tag.textContent = m.replace(/_/g, ' ');
    els.plaqueTags.appendChild(tag);
  });

  const paletteTag = document.createElement('span');
  paletteTag.className = 'plaque-tag';
  paletteTag.textContent = painting.palette.replace(/_/g, ' ') + ' palette';
  els.plaqueTags.appendChild(paletteTag);

  // Links
  els.plaqueLinks.innerHTML = '';
  if (painting.museumUrl) {
    const a = document.createElement('a');
    a.className = 'plaque-link-btn';
    a.href = painting.museumUrl;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.innerHTML = `View at museum <span style="opacity:0.5">↗</span>`;
    els.plaqueLinks.appendChild(a);
  }
  const srcA = document.createElement('a');
  srcA.className = 'plaque-link-btn';
  srcA.href = painting.sourceUrl;
  srcA.target = '_blank';
  srcA.rel = 'noopener noreferrer';
  srcA.innerHTML = `Wikimedia source <span style="opacity:0.5">↗</span>`;
  els.plaqueLinks.appendChild(srcA);

  els.plaqueOverlay.classList.add('visible');
  state.plaqueOpen = true;
}

function closePlaque() {
  els.plaqueOverlay.classList.remove('visible');
  state.plaqueOpen = false;
}

// ─── Gallery ─────────────────────────────────────────────────────────────────
function openGallery() {
  buildGallery();
  els.galleryOverlay.classList.add('visible');
  state.galleryOpen = true;
}

function closeGallery() {
  els.galleryOverlay.classList.remove('visible');
  state.galleryOpen = false;
}

function buildGallery() {
  els.galleryCount.textContent = `${PAINTINGS.length} total`;
  els.galleryGrid.innerHTML = '';

  PAINTINGS.forEach(p => {
    const isCurrent = state.painting && p.id === state.painting.id;
    const card = document.createElement('div');
    card.className = `gallery-card${isCurrent ? ' current-day' : ''}`;
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `${p.title} by ${p.artist}`);

    const phaseLabel = Array.isArray(p.phase) && p.phase.length > 0
      ? p.phase.map(phaseDisplayName).join(' / ')
      : 'Any phase';
    const isSpecific = Array.isArray(p.phase) && p.phase.length > 0;

    card.innerHTML = `
      <img class="gallery-card-img" 
           src="${p.imageUrl}" 
           alt="${p.title} by ${p.artist}"
           loading="lazy"
           onerror="this.style.background='rgba(20,25,35,0.9)'; this.removeAttribute('src')">
      <div class="gallery-card-body">
        <div class="gallery-card-artist">${p.artist}</div>
        <div class="gallery-card-title">${p.title}</div>
        <div class="gallery-card-year">${p.year}</div>
        <div class="gallery-card-phase">
          <span class="gallery-phase-chip ${isSpecific ? 'specific' : ''}">${phaseLabel}</span>
        </div>
      </div>
    `;

    card.addEventListener('click', () => {
      closeGallery();
      openPlaque(p);
    });
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        closeGallery();
        openPlaque(p);
      }
    });

    els.galleryGrid.appendChild(card);
  });
}

// ─── Event bindings ──────────────────────────────────────────────────────────
function bindEvents() {
  // Sidebar toggle (mobile)
  els.sidebarToggle.addEventListener('click', () => {
    state.sidebarOpen = !state.sidebarOpen;
    els.sidebar.classList.toggle('hidden', !state.sidebarOpen);
    els.sidebarToggle.textContent = state.sidebarOpen ? '−' : '≡';
  });

  // Sidebar close button
  els.sidebarClose.addEventListener('click', () => {
    state.sidebarOpen = false;
    els.sidebar.classList.add('hidden');
    els.sidebarToggle.style.display = 'flex';
  });

  // Painting title → open plaque
  els.paintingTitle.addEventListener('click', () => {
    openPlaque(state.painting);
  });

  // Plaque close
  els.plaqueClose.addEventListener('click', closePlaque);
  els.plaqueOverlay.addEventListener('click', e => {
    if (e.target === els.plaqueOverlay) closePlaque();
  });

  // Gallery open/close
  els.galleryBtn.addEventListener('click', openGallery);
  els.galleryClose.addEventListener('click', closeGallery);
  els.galleryOverlay.addEventListener('click', e => {
    if (e.target === els.galleryOverlay) closeGallery();
  });

  // Cycle / Refresh painting
  els.refreshBtn.addEventListener('click', () => {
    const randomSeed = Math.floor(Math.random() * 1000000);
    state.painting = selectPainting(state.moon.phaseKey, randomSeed, true);

    // Update bottom captions
    renderPhaseCaption();

    // Preload and smoothly update background
    if (state.painting) {
      const img = new Image();
      img.onload = () => {
        els.paintingBg.style.backgroundImage = `url('${state.painting.imageUrl}')`;
      };
      img.src = state.painting.imageUrl;
    }
  });

  // Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      if (state.plaqueOpen) closePlaque();
      else if (state.galleryOpen) closeGallery();
    }
  });

  // Mobile sidebar: hide on outside tap
  document.addEventListener('click', e => {
    if (window.innerWidth <= 640 && state.sidebarOpen) {
      if (!els.sidebar.contains(e.target) && e.target !== els.sidebarToggle) {
        state.sidebarOpen = false;
        els.sidebar.classList.add('hidden');
      }
    }
  });

  // Responsive: show/hide sidebar toggle
  const mq = window.matchMedia('(max-width: 640px)');
  const handleMQ = e => {
    if (e.matches) {
      // Mobile: start hidden
      state.sidebarOpen = false;
      els.sidebar.classList.add('hidden');
      els.sidebarToggle.style.display = 'flex';
    } else {
      // Desktop: always shown
      state.sidebarOpen = true;
      els.sidebar.classList.remove('hidden');
      els.sidebarToggle.style.display = 'none';
    }
  };
  mq.addEventListener('change', handleMQ);
  handleMQ(mq); // run once on init
}

// ─── Bootstrap ───────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', init);
