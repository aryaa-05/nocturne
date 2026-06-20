// moon.js — Astronomical moon phase calculation
// Algorithm: Jean Meeus "Astronomical Algorithms", Chapter 49
// Accurate synodic month calculation from J2000 epoch
// No API, no external dependencies, works offline

/**
 * Known new moon epoch: January 6, 2000 18:14 UTC
 * In Unix milliseconds:
 */
const NEW_MOON_EPOCH_MS = Date.UTC(2000, 0, 6, 18, 14, 0);

/**
 * Mean synodic month in milliseconds (29.530588853 days)
 */
const SYNODIC_MONTH_MS = 29.530588853 * 24 * 60 * 60 * 1000;

/**
 * Phase names and their emoji glyphs.
 * Boundaries based on standard 8-phase system (each phase ≈ 1/8 of cycle).
 */
const PHASE_INFO = [
  { key: "new",             name: "New Moon",         glyph: "", start: 0.000, end: 0.034 },
  { key: "waxing_crescent", name: "Waxing Crescent",  glyph: "", start: 0.034, end: 0.216 },
  { key: "first_quarter",   name: "First Quarter",    glyph: "", start: 0.216, end: 0.284 },
  { key: "waxing_gibbous",  name: "Waxing Gibbous",   glyph: "", start: 0.284, end: 0.466 },
  { key: "full",            name: "Full Moon",        glyph: "", start: 0.466, end: 0.534 },
  { key: "waning_gibbous",  name: "Waning Gibbous",   glyph: "", start: 0.534, end: 0.716 },
  { key: "last_quarter",    name: "Last Quarter",     glyph: "", start: 0.716, end: 0.784 },
  { key: "waning_crescent", name: "Waning Crescent",  glyph: "", start: 0.784, end: 1.000 },
];

/**
 * Compute moon phase for a given Date.
 * @param {Date} date
 * @returns {{
 *   phase: number,           // 0–1 fraction of synodic cycle
 *   illumination: number,    // 0–100 percentage
 *   phaseKey: string,        // e.g. "waxing_gibbous"
 *   phaseName: string,       // e.g. "Waxing Gibbous"
 *   phaseGlyph: string,      // e.g. "🌔"
 *   daysIntoPhase: number,   // days since last new moon
 *   daysSinceNew: number,    // same
 *   daysUntilFull: number,   // days until next full (negative if past full)
 * }}
 */
function getMoonPhase(date = new Date()) {
  const elapsed = date.getTime() - NEW_MOON_EPOCH_MS;
  let phase = (elapsed % SYNODIC_MONTH_MS) / SYNODIC_MONTH_MS;
  if (phase < 0) phase += 1;

  // Illumination: (1 - cos(phase * 2π)) / 2
  const illumination = Math.round((1 - Math.cos(phase * 2 * Math.PI)) / 2 * 100);

  // Find phase bucket
  const phaseData = PHASE_INFO.find(p => phase >= p.start && phase < p.end) || PHASE_INFO[0];

  const daysSinceNew = phase * 29.530588853;
  const daysUntilFull = (0.5 - phase) * 29.530588853;

  return {
    phase,
    illumination,
    phaseKey: phaseData.key,
    phaseName: phaseData.name,
    phaseGlyph: phaseData.glyph,
    daysIntoPhase: daysSinceNew,
    daysSinceNew,
    daysUntilFull,
  };
}

/**
 * Get a daily integer seed based on UTC calendar date.
 * Same seed for entire calendar day (UTC), regardless of reload.
 * @param {Date} date
 * @returns {number} integer seed (YYYYMMDD format)
 */
function getDaySeed(date = new Date()) {
  const y = date.getUTCFullYear();
  const m = date.getUTCMonth() + 1;
  const d = date.getUTCDate();
  return y * 10000 + m * 100 + d;
}

/**
 * Compute moonrise and moonset for a given lat/lon and date.
 * Uses a simplified algorithm for the Moon's rising/setting times.
 * Accurate to ~5 minutes for most latitudes.
 * 
 * @param {number} lat - latitude in degrees
 * @param {number} lon - longitude in degrees
 * @param {Date} date
 * @returns {{ rise: Date|null, set: Date|null, isAboveHorizon: boolean }}
 */
function getMoonRiseSet(lat, lon, date = new Date()) {
  // Convert to radians
  const toRad = d => d * Math.PI / 180;
  const toDeg = r => r * 180 / Math.PI;

  // Julian Date
  const jd = date.getTime() / 86400000 + 2440587.5;
  const jd0 = Math.floor(jd - 0.5) + 0.5; // midnight UTC

  function moonPosition(jd) {
    const D = jd - 2451545.0; // Days from J2000
    const L = (218.316 + 13.176396 * D) % 360;
    const M = toRad((134.963 + 13.064993 * D) % 360);
    const F = toRad((93.272 + 13.229350 * D) % 360);

    const lonMoon = toRad(L + 6.289 * Math.sin(M));
    const latMoon = toRad(5.128 * Math.sin(F));

    // Convert to equatorial
    const eps = toRad(23.439);
    const ra = Math.atan2(
      Math.sin(lonMoon) * Math.cos(eps) - Math.tan(latMoon) * Math.sin(eps),
      Math.cos(lonMoon)
    );
    const dec = Math.asin(
      Math.sin(latMoon) * Math.cos(eps) +
      Math.cos(latMoon) * Math.sin(eps) * Math.sin(lonMoon)
    );
    return { ra: ((toDeg(ra) % 360) + 360) % 360, dec: toDeg(dec) };
  }

  // Compute cosH for rise/set (h = -0.583° for moon including parallax)
  const h0 = toRad(-0.583);
  const latRad = toRad(lat);

  function computeTransit(jd0, lon) {
    const pos = moonPosition(jd0);
    const GMST0 = (280.46061837 + 360.98564736629 * (jd0 - 2451545.0)) % 360;
    let transit = (pos.ra - GMST0 - lon) / 15;
    transit = ((transit % 24) + 24) % 24;
    return transit;
  }

  try {
    const pos = moonPosition(jd0 + 0.5); // midday
    const sinH = (Math.sin(h0) - Math.sin(latRad) * Math.sin(toRad(pos.dec))) /
                 (Math.cos(latRad) * Math.cos(toRad(pos.dec)));

    if (Math.abs(sinH) > 1) {
      // Moon doesn't rise or set (circumpolar or always below)
      const altitude = toDeg(Math.asin(
        Math.sin(latRad) * Math.sin(toRad(pos.dec)) +
        Math.cos(latRad) * Math.cos(toRad(pos.dec))
      ));
      return { rise: null, set: null, isAboveHorizon: altitude > 0 };
    }

    const H0 = toDeg(Math.acos(sinH)) / 15; // hours
    const transit = computeTransit(jd0, lon);
    const riseHr = ((transit - H0) + 24) % 24;
    const setHr  = ((transit + H0) + 24) % 24;

    function hrToDate(hr) {
      const d = new Date(date);
      d.setUTCHours(0, 0, 0, 0);
      d.setTime(d.getTime() + hr * 3600000);
      return d;
    }

    const riseDate = hrToDate(riseHr);
    const setDate  = hrToDate(setHr);

    // Is moon currently above horizon?
    const nowHr = (date.getUTCHours() + date.getUTCMinutes() / 60 + lon / 15 + 24) % 24;
    const isAboveHorizon = riseHr < setHr
      ? (nowHr >= riseHr && nowHr <= setHr)
      : (nowHr >= riseHr || nowHr <= setHr);

    return { rise: riseDate, set: setDate, isAboveHorizon };
  } catch {
    return { rise: null, set: null, isAboveHorizon: false };
  }
}

/**
 * Format a Date as a local time string (HH:MM).
 * @param {Date} d
 * @param {string} [timezone] - IANA timezone string
 * @returns {string}
 */
function formatTime(d, timezone) {
  if (!d) return null;
  const opts = { hour: '2-digit', minute: '2-digit', hour12: true };
  if (timezone) opts.timeZone = timezone;
  return d.toLocaleTimeString([], opts);
}

const LUNAR_FOLKLORE = {
  new: {
    theme: "Invisibility & Introspection",
    lore: "In folklore, the dark moon represents Hecate's night—a silent void of unseen potential. Traditional cultures viewed it as a period for quiet planning, reflection, and planting underground root crops while light is gathered in secret."
  },
  waxing_crescent: {
    theme: "Diana's Bow & New Intentions",
    lore: "Historically associated with the silver bow of Diana, this phase symbolizes youth and renewal. In agricultural lore, it is a time of quickening light, ideal for sowing seeds of leafy crops and setting new mental paths."
  },
  first_quarter: {
    theme: "Balance & Decisive Action",
    lore: "Representing a perfect half-balance of light and shadow, the first quarter is a time of growth and action. Folklore calls it a critical turning point—a time to cultivate the soil and address obstacles head-on."
  },
  waxing_gibbous: {
    theme: "Gestation & Swelling Fruit",
    lore: "The word 'gibbous' comes from the Latin for humpbacked, representing swelling tides and fruit. In traditional societies, it marks the expansion of energy, the quickening of animal life, and preparation for completion."
  },
  full: {
    theme: "Selene's Light & Culmination",
    lore: "Associated with Selene and Luna, the full moon symbolizes peak power and high emotional tides. Folklore dictates that herbs gathered tonight hold double potency, and crops are harvested under its silver illumination."
  },
  waning_gibbous: {
    theme: "Harvest & Deep Gratitude",
    lore: "Also known as the Disseminating Moon, this phase is traditionally linked to sharing abundance and giving thanks. In farming history, this marks the ideal time for composting, pruning, and turning over the soil."
  },
  last_quarter: {
    theme: "Release & Late-Rising Light",
    lore: "This late-rising half-moon represents releasing the old. Traditional wisdom recommends using the waning light to weed fields, prune decay, break negative habits, and prepare the mind for rest."
  },
  waning_crescent: {
    theme: "The Balsamic Moon & Wisdom",
    lore: "The 'Old Moon' rising in the pre-dawn sky is associated with the crone aspect of the triple goddess. It symbolizes surrendering to cycles, resting, and looking inward for wisdom before the moon is reborn."
  }
};

export { getMoonPhase, getDaySeed, getMoonRiseSet, formatTime, PHASE_INFO, LUNAR_FOLKLORE, SYNODIC_MONTH_MS };
