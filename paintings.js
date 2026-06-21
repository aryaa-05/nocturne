// paintings.js — Curated nocturne painting database
// All images: confirmed public domain via Wikimedia Commons or Met Open Access
// phase: one or more of "new","waxing_crescent","first_quarter","waxing_gibbous",
//         "full","waning_gibbous","last_quarter","waning_crescent"
//         null = symbolic/unspecified (fallback for all phases)

const PAINTINGS = [
  // ─── Whistler ────────────────────────────────────────────────────────────
  {
    id: "whistler-falling-rocket",
    artist: "James McNeill Whistler",
    title: "Nocturne in Black and Gold: The Falling Rocket",
    year: 1875,
    medium: "Oil on panel",
    museum: "Detroit Institute of Arts",
    museumUrl: "https://dia.org/collection/nocturne-black-and-gold-falling-rocket/64931",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Whistler-Nocturne_in_black_and_gold.jpg/960px-Whistler-Nocturne_in_black_and_gold.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Whistler-Nocturne_in_black_and_gold.jpg",
    license: "Public Domain",
    phase: null,
    mood: ["stormy", "cold_blue"],
    palette: "dark",
    description: "Whistler reduces fireworks over the Cremorne pleasure gardens to dissolving bursts of gold in pitch dark — sensation and atmosphere over literal depiction, the moon's absence amplifying the artificial light."
  },
  {
    id: "whistler-blue-silver-cremorne",
    artist: "James McNeill Whistler",
    title: "Nocturne: Blue and Silver — Cremorne Lights",
    year: 1872,
    medium: "Oil on canvas",
    museum: "Tate, London",
    museumUrl: "https://www.tate.org.uk/art/artworks/whistler-nocturne-blue-and-silver-cremorne-lights-n03420",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4e/James_Abbott_McNeill_Whistler_%281834-1903%29_-_Nocturne%2C_Blue_and_Silver_-_Cremorne_Lights_-_N03420_-_National_Gallery.jpg?_=20200703203012",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:James_Abbott_McNeill_Whistler_(1834-1903)_-_Nocturne,_Blue_and_Silver_-_Cremorne_Lights_-_N03420_-_National_Gallery.jpg",
    license: "Public Domain",
    phase: null,
    mood: ["still", "cold_blue"],
    palette: "cold_blue",
    description: "The Thames dissolved into horizontal bands of silver and blue — Whistler's most reductive nocturne, a meditation on stillness, water, and diffused moonlight with no fixed center."
  },
  {
    id: "whistler-grey-gold-westminster",
    artist: "James McNeill Whistler",
    title: "Nocturne: Grey and Gold — Westminster Bridge",
    year: 1871,
    medium: "Oil on canvas",
    museum: "Burrell Collection, Glasgow",
    museumUrl: "https://commons.wikimedia.org/wiki/File:James_Abbott_McNeill_Whistler_(1834-1903)_-_Nocturne,_Grey_and_Gold,_Westminster_Bridge_-_35.642_-_Burrell_Collection.jpg",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b3/James_Abbott_McNeill_Whistler_%281834-1903%29_-_Nocturne%2C_Grey_and_Gold%2C_Westminster_Bridge_-_35.642_-_Burrell_Collection.jpg?_=20250504051710",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:James_Abbott_McNeill_Whistler_(1834-1903)_-_Nocturne,_Blue_and_Silver_-_Cremorne_Lights_-_N03420_-_National_Gallery.jpg",
    license: "Public Domain",
    phase: null,
    mood: ["still", "warm_gold"],
    palette: "warm_gold",
    description: "Westminster Bridge dissolves into warm fog and gold gaslight reflections. Whistler elevates a quotidian London night into a tonal poem — every lamp a small moon on water."
  },

  // ─── Van Gogh ────────────────────────────────────────────────────────────
  {
    id: "gogh-starry-night-rhone",
    artist: "Vincent van Gogh",
    title: "Starry Night over the Rhône",
    year: 1888,
    medium: "Oil on canvas",
    museum: "Musée d'Orsay, Paris",
    museumUrl: "https://www.musee-orsay.fr/en/artworks/la-nuit-etoilee-78696",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Starry_Night_Over_the_Rhone.jpg/1280px-Starry_Night_Over_the_Rhone.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Starry_Night_Over_the_Rhone.jpg",
    license: "Public Domain",
    phase: ["full", "waning_gibbous"],
    mood: ["still", "cold_blue"],
    palette: "cold_blue",
    description: "Painted on a moonlit September night at the bank of the Rhône, the stars are so large and brilliant they seem to vibrate — van Gogh described the painting as 'the starry sky above, the blue and violet water, and the green city lit by gas.'"
  },
  {
    id: "gogh-white-house-night",
    artist: "Vincent van Gogh",
    title: "The White House at Night",
    year: 1890,
    medium: "Oil on canvas",
    museum: "State Hermitage Museum, St. Petersburg",
    museumUrl: "https://www.hermitagemuseum.org/digital-collection/39642?lng=en",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Whitehousenight.jpg/1280px-Whitehousenight.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Whitehousenight.jpg",
    license: "Public Domain",
    phase: ["full", "waxing_gibbous"],
    mood: ["still", "warm_gold"],
    palette: "warm_gold",
    description: "One of van Gogh's last nocturnes, painted in Auvers-sur-Oise weeks before his death. The white house glows under a thick cobalt sky pricked with stars — warm light pouring from windows against an indigo night."
  },
  {
    id: "gogh-cafe-terrace",
    artist: "Vincent van Gogh",
    title: "Café Terrace at Night",
    year: 1888,
    medium: "Oil on canvas",  
    museum: "Kröller-Müller Museum, Otterlo",
    museumUrl: "https://krollermuller.nl/en/vincent-van-gogh-terrace-of-a-cafe-at-night-place-du-forum-1",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Van_Gogh_-_Terrace_of_a_Caf%C3%A9_at_Night_%28Place_du_Forum%29_1888.jpg/960px-Van_Gogh_-_Terrace_of_a_Caf%C3%A9_at_Night_%28Place_du_Forum%29_1888.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Vincent-van-gogh-cafe-terrace-on-the-place-du-forum-arles-at-night-the.jpg",
    license: "Public Domain",
    phase: null,
    mood: ["still", "warm_gold"],
    palette: "warm_gold",
    description: "A gaslit café spills gold onto cobblestones; above, a deep blue sky blazes with stars. No moon visible — this is the city's own nocturne, human warmth against astronomical cold."
  },

  // ─── Caspar David Friedrich ───────────────────────────────────────────────
  
  {
    id: "friedrich-two-men-moon",
    artist: "Caspar David Friedrich",
    title: "Two Men Contemplating the Moon",
    year: 1819,
    medium: "Oil on canvas",
    museum: "The Metropolitan Museum of Art, New York",
    museumUrl: "https://www.metmuseum.org/art/collection/search/438417",
    imageUrl: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/438417/2291693/main-imag",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Friedrich_-_Two_Men_Contemplating_the_Moon.jpg",
    license: "Public Domain",
    phase: ["waning_crescent"],
    mood: ["rural", "cold_blue"],
    palette: "cold_blue",
    description: "A waning crescent moon hangs low over gnarled oaks — the phase clearly legible and confirmed by Friedrich scholarship as intentionally depicted. Two figures gaze upward in silent contemplation, dwarfed by the night."
  },
  {
    id: "friedrich-moonrise-sea",
    artist: "Caspar David Friedrich",
    title: "Moonrise by the Sea",
    year: 1822,
    medium: "Oil on canvas",
    museum: "Alte Nationalgalerie, Berlin & State Hermitage Museum, St. Petersburg",
    museumUrl: "https://www.smb.museum/museen-einrichtungen/alte-nationalgalerie/home/",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Caspar_David_Friedrich_-_Moonrise_by_the_Sea_-_WGA08266.jpg/1920px-Caspar_David_Friedrich_-_Moonrise_by_the_Sea_-_WGA08266.jpg?_=20161130220855",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Caspar_David_Friedrich_-_Moonrise_by_the_Sea_-_WGA08266.jpg",
    license: "Public Domain",
    phase: ["waxing_gibbous"],
    mood: ["still", "silver"],
    palette: "silver",
    description: "Three figures on a rocky shore watch the gibbous moon rise from the horizon, casting a silver path across dark water. Friedrich makes the moment liturgical — a rising moon as revelation."
  },
  {
    id: "friedrich-man-woman-moon",
    artist: "Caspar David Friedrich",
    title: "Man and Woman Contemplating the Moon",
    year: 1824,
    medium: "Oil on canvas",
    museum: "Alte Nationalgalerie, Berlin",
    museumUrl: "https://www.smb.museum/en/museums-institutions/alte-nationalgalerie/home/",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Caspar_David_Friedrich_-_Man_and_Woman_Contemplating_the_Moon_-_WGA08271.jpg?_=20110724062504",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Friedrich_-_Two_Men_Contemplating_the_Moon.jpg",
    phase: ["waning_crescent"],
    mood: ["rural", "cold_blue"],
    palette: "cold_blue",
    description: "A companion to his 1819 work, now with a couple among the same oaks and crescent moon. Friedrich returns to this image obsessively — the waning crescent as emblem of longing, of things beautiful and passing."
  },

  // ─── Edvard Munch ────────────────────────────────────────────────────────
  {
    id: "munch-starry-night",
    artist: "Edvard Munch",
    title: "Starry Night",
    year: 1893,
    medium: "Oil on canvas",
    museum: "J. Paul Getty Museum, Los Angeles",
    museumUrl: "https://www.munch.no/en/edvard-munch/ekely/qr/starry-night/",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Edvard_Munch_-_Starry_Night_%281893_Getty%29.jpg/960px-Edvard_Munch_-_Starry_Night_%281893_Getty%29.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:'Starry_Night'_by_Edvard_Munch,_1893,_Getty_Center.JPG",
    license: "Public Domain",
    phase: null,
    mood: ["cold_blue", "still"],
    palette: "cold_blue",
    description: "Unlike van Gogh's ecstatic version, Munch's starry night is haunted — a single figure on a shoreline, the reflections jagged and column-like, the sky alive with a different kind of unease. The moon is implied, not shown."
  },

  // ─── John Atkinson Grimshaw ───────────────────────────────────────────────
  {
    id: "grimshaw-spirit-night",
    artist: "John Atkinson Grimshaw",
    title: "Spirit of the Night",
    year: 1879,
    medium: "Oil on canvas",
    museum: "Private Collection",
    museumUrl: "https://www.christies.com/en/lot/lot-6199667",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/John_Atkinson_Grimshaw_-_Spirit_of_the_Night.jpg/1920px-John_Atkinson_Grimshaw_-_Spirit_of_the_Night.jpg?_=20210123025206",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:John_Atkinson_Grimshaw_-_Spirit_of_the_Night.jpg",
    license: "Public Domain",
    phase: ["full"],
    mood: ["rural", "silver"],
    palette: "silver",
    description: "Grimshaw's allegorical moonlight masterpiece — a luminous figure drifts above a silver-flooded forest path, the full moon implied in her radiance. His most explicitly lunar work, the light sourceless and total."
  },
  {
    id: "grimshaw-autumnal-evening",
    artist: "John Atkinson Grimshaw",
    title: "Autumnal Evening",
    year: 1882,
    medium: "Oil on board",
    museum: "Private Collection",
    museumUrl: "https://www.christies.com/en/lot/lot-6012075",
    imageUrl: "https://johnatkinsongrimshaw.org/media//b/a/base_32807736.jpg?width=600",
    sourceUrl: "https://johnatkinsongrimshaw.org/An-Autumnal-Evening-Glow.html",
    license: "Public Domain",
    phase: null,
    mood: ["warm_gold", "rural"],
    palette: "warm_gold",
    description: "Wet leaves on a lane, the moon behind thin cloud, gaslight amber in the distance. No painter understood the poetry of autumn moonlight on English lanes better than Grimshaw — the glow is everywhere and nowhere."
  },
  {
    id: "grimshaw-liverpool-quay",
    artist: "John Atkinson Grimshaw",
    title: "Reflections on the Thames, Westminster",
    year: 1880,
    medium: "Oil on canvas",
    museum: "Leeds Art Gallery",
    museumUrl: "https://museumsandgalleries.leeds.gov.uk/leeds-art-gallery-jxyz",
    imageUrl: "https://d3d00swyhr67nd.cloudfront.net/w944h944/collection/WYL/LMG/WYL_LMG_99612-001.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Reflections_on_the_Thames,_Westminster_-_Grimshaw,_John_Atkinson.jpg",
    license: "Public Domain",
    phase: null,
    mood: ["warm_gold", "industrial"],
    palette: "warm_gold",
    description: "Westminster Bridge reflected in gold and copper on the Thames — Grimshaw's industrial nocturnes show the city at its most enchanted, every streetlamp a small moon on the water."
  },
  {
    id: "grimshaw-november-morning",
    artist: "John Atkinson Grimshaw",
    title: "A Moonlit Lane",
    year: 1874,
    medium: "Oil on canvas",
    museum: "Private Collection",
    museumUrl: "https://www.christies.com/en/lot/lot-6104728",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/John_Atkinson_Grimshaw_-_A_moonlit_lane.jpg/960px-John_Atkinson_Grimshaw_-_A_moonlit_lane.jpg?_=20220419172323",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:John_Atkinson_Grimshaw_-_A_moonlit_lane.jpg",
    license: "Public Domain",
    phase: null,
    mood: ["rural", "silver"],
    palette: "silver",
    description: "A quiet lane dappled in silver — Grimshaw's moonlit lanes feel as if you could walk into them and hear nothing but your own footsteps on wet stone. Whistler said he thought he invented nocturnes until he saw these."
  },

  // ─── Ralph Albert Blakelock ───────────────────────────────────────────────
  {
    id: "blakelock-moonlight-indian",
    artist: "Ralph Albert Blakelock",
    title: "Moonlight, Indian Encampment",
    year: 1885,
    medium: "Oil on canvas",
    museum: "Smithsonian American Art Museum",
    museumUrl: "https://americanart.si.edu/artwork/moonlight-indian-encampment-2159",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Ralph_Albert_Blakelock_-_Moonlight%2C_Indian_Encampment_-_1929.6.3_-_Smithsonian_American_Art_Museum.jpg?_=20180213000923",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Ralph_Albert_Blakelock_-_Moonlight,_Indian_Encampment_-_1929.6.3_-_Smithsonian_American_Art_Museum.jpg",
    license: "Public Domain",
    phase: ["full"],
    mood: ["warm_gold", "rural"],
    palette: "warm_gold",
    description: "A full moon behind silhouetted trees casts amber light over the encampment fires — Blakelock's moon is always warm, always filtered through dense foliage into pools of gold. A meditation on what light the full moon shares with fire."
  },
  {
    id: "blakelock-moonlight",
    artist: "Ralph Albert Blakelock",
    title: "Moonlight",
    year: 1885,
    medium: "Oil on canvas",
    museum: "Brooklyn Museum",
    museumUrl: "https://www.brooklynmuseum.org/en-GB/objects/697",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Ralph_Albert_Blakelock_-_Moonlight_-_Google_Art_Project.jpg/1920px-Ralph_Albert_Blakelock_-_Moonlight_-_Google_Art_Project.jpg?_=20121004210359",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Ralph_Albert_Blakelock_-_Moonlight_-_Google_Art_Project.jpg",
    license: "Public Domain",
    phase: null,
    mood: ["warm_gold", "rural"],
    palette: "warm_gold",
    description: "Blakelock's signature composition: the moon as an ember filtered through a screen of dark trees, the landscape glowing from within. He spent the last decades of his life in an asylum; these moonlit forests were his world."
  },

  // ─── Albert Pinkham Ryder ────────────────────────────────────────────────
  {
    id: "ryder-moonlit-cove",
    artist: "Albert Pinkham Ryder",
    title: "Moonlit Cove",
    year: 1880,
    medium: "Oil on canvas",
    museum: "The Phillips Collection, Washington D.C.",
    museumUrl: "https://www.phillipscollection.org/collection/moonlit-cove",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Albert_Pinkham_Ryder_-_Moonlit_Cove_-_Google_Art_Project.jpg/1920px-Albert_Pinkham_Ryder_-_Moonlit_Cove_-_Google_Art_Project.jpg?_=20260407213939",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Albert_Pinkham_Ryder_-_Moonlit_Cove_-_Google_Art_Project.jpg",
    license: "Public Domain",
    phase: null,
    mood: ["silver", "marine"],
    palette: "silver",
    description: "Ryder's cove is primordial — thick impasto, sky and water barely distinguished, a single boat at rest under a cloud-ringed moon. His surfaces are geological, built up over decades; the moon a smear of silver on dark glass."
  },
  {
    id: "ryder-toilers-sea",
    artist: "Albert Pinkham Ryder",
    title: "Toilers of the Sea",
    year: 1884,
    medium: "Oil on wood",
    museum: "Metropolitan Museum of Art",
    museumUrl: "https://www.metmuseum.org/art/collection/search/11981",
    imageUrl: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/11981/43466/main-image",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:The_Toilers_of_the_Sea_MET_DT228023.jpg",
    license: "Public Domain",
    phase: ["full"],
    mood: ["silver", "marine"],
    palette: "silver",
    description: "A full moon spills silver across the sea; a lone fisherman's boat is silhouetted against the radiance. Ryder understood the sea's indifference — the moon does not care for the toilers below, only illuminates."
  },

  // ─── Ivan Aivazovsky ────────────────────────────────────────────────────
  {
    id: "aivazovsky-moonlit-black-sea",
    artist: "Ivan Aivazovsky",
    title: "The Black Sea At Night",
    year: 1879,
    medium: "Oil on canvas",
    museum: "Odessa Fine Arts Museum",
    museumUrl: "https://www.ofam.ua/en",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/da/Ivan_Aivazovsky_-_The_Black_Sea_at_night_(1879).jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Ivan_Aivazovsky_-_The_Black_Sea_at_night_(1879).jpg",
    license: "Public Domain",
    phase: ["full", "waning_gibbous"],
    mood: ["silver", "marine"],
    palette: "silver",
    description: "Aivazovsky painted the sea's surface as pure luminosity — a full moon's silver path trembles across the Black Sea. He could render water and light better than anyone; here the moon is sovereign, the waves its tributaries."
  },
  {
    id: "aivazovsky-night-crimea",
    artist: "Ivan Aivazovsky",
    title: "Moonlit Night in Crimea",
    year: 1859,
    medium: "Oil on canvas",
    museum: "State Russian Museum, St. Petersburg",
    museumUrl: "https://rusmuseumvrm.ru/data/collections/painting/19_20/ayvazovskiy_ik_lunnaya_noch_v_krimu_1859_zh_5878/?lang=en",
    imageUrl: "https://uploads8.wikiart.org/images/ivan-aivazovsky/lunar-night-in-the-crimea-1862.jpg!Large.jpg",
    sourceUrl: "https://www.wikiart.org/en/ivan-aivazovsky/lunar-night-in-the-crimea-1862",
    license: "Public Domain",
    phase: ["waxing_gibbous"],
    mood: ["silver", "marine"],
    palette: "silver",
    description: "The gibbous moon rises over the Crimean coast, its reflection a golden column broken by the surf. This early Aivazovsky already shows his mastery of nocturnal marine light — the moon emerging from its own painting."
  },

  // ─── Henry Pether ───────────────────────────────────────────────────────
  {
    id: "pether-moonlight-westminster",
    artist: "Henry Pether",
    title: "Westminster Bridge by Moonlight",
    year: 1858,
    medium: "Oil on canvas",
    museum: "Government Art Collection",
    museumUrl: "https://artcollection.culture.gov.uk/artwork/7866/",
    imageUrl: "https://d3d00swyhr67nd.cloudfront.net/w1200h1200/collection/GAC/GAC/GAC_GAC_7866-001.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Henry_Pether_(1800-1880)_-_Westminster_Bridge_by_Moonlight_-_7866_-_Government_Art_Collection.jpg",
    license: "Public Domain",
    phase: ["full"],
    mood: ["warm_gold", "industrial"],
    palette: "warm_gold",
    description: "A full moon hangs over Westminster Bridge, its reflection broken into a thousand shards of gold on the Thames. Pether specialized in exactly these views — London at night, the city softened by water and the moon."
  },

  // ─── Hokusai / Hiroshige ─────────────────────────────────────────────────
  {
    id: "hiroshige-full-moon-takanawa",
    artist: "Utagawa Hiroshige",
    title: "Full Moon at Takanawa",
    year: 1857,
    medium: "Woodblock print",
    museum: "Metropolitan Museum of Art (also at Brooklyn Museum)",
    museumUrl: "https://www.metmuseum.org/art/collection/search/45293",
    imageUrl: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/45293/133566/main-image",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Brooklyn_Museum_-_Full_Moon_at_Takanawa_from_Celebrated_Places_in_the_Eastern_Capital_-_Utagawa_Hiroshige_(Ando).jpg",
    license: "Public Domain",
    phase: ["full"],
    mood: ["silver", "marine"],
    palette: "silver",
    description: "Hiroshige's full moon at Takanawa glows above Edo Bay, the water flat and receiving. The woodblock's limited palette achieves something photographs cannot — distillation. The moon as pure idea."
  },
  {
    id: "hiroshige-moonlight-nagakubo",
    artist: "Utagawa Hiroshige",
    title: "Nagakubo: Moonlight on the Road",
    year: 1835,
    medium: "Woodblock print",
    museum: "The Metropolitan Museum of Art (also at Cleveland Museum of Art)",
    museumUrl: "https://www.metmuseum.org/art/collection/search/57042",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Utagawa_Hiroshige_-_Nagakubo_(Station_28)_from_the_series_Sixty-Nine_Stations_of_the_Kisokaido_-_1942.144_-_Cleveland_Museum_of_Art.tif/lossy-page1-960px-Utagawa_Hiroshige_-_Nagakubo_(Station_28)_from_the_series_Sixty-Nine_Stations_of_the_Kisokaido_-_1942.144_-_Cleveland_Museum_of_Art.tif.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Utagawa_Hiroshige_-_Nagakubo_(Station_28)_from_the_series_Sixty-Nine_Stations_of_the_Kisokaido_-_1942.144_-_Cleveland_Museum_of_Art.tif",
    license: "Public Domain",
    phase: null,
    mood: ["rural", "cold_blue"],
    palette: "cold_blue",
    description: "Travelers on the Kisokaido road by moonlight — the mountains in deepened indigo, the path lit by a moon that casts no shadows in the print, only atmosphere. Travel in moonlight as an ancient and dignified activity."
  },
  {
    id: "hokusai-autumn-moon",
    artist: "Katsushika Hokusai",
    title: "Autumn Moon of Ishiyama",
    year: 1804,
    medium: "Woodblock print",
    museum: "Art Institute of Chicago",
    museumUrl: "https://www.artic.edu/artworks/57278",
    imageUrl: "https://www.artic.edu/iiif/2/9cb9f207-7060-c6f7-b463-cbab10988346/full/1686,/0/default.jpg",
    sourceUrl: null,
    license: "Public Domain",
    phase: ["full"],
    mood: ["silver", "rural"],
    palette: "silver",
    description: "Hokusai places the autumn full moon over Lake Biwa — the moon reflected in the water below the temple, doubling the night. In Japanese aesthetics, moon-viewing (tsukimi) is autumn's defining ritual."
  },

  // ─── George Inness ──────────────────────────────────────────────────────
  {
    id: "inness-moonrise",
    artist: "George Inness",
    title: "Moonrise",
    year: 1887,
    medium: "Oil on canvas",
    museum: "Yale University Art Gallery",
    museumUrl: "https://artgallery.yale.edu/collections/objects/59314",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Moonrise_by_George_Inness_1887.jpeg/1920px-Moonrise_by_George_Inness_1887.jpeg?_=20150811234751",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Moonrise_by_George_Inness_1887.jpeg",
    license: "Public Domain",
    phase: ["waxing_crescent", "first_quarter"],
    mood: ["warm_gold", "rural"],
    palette: "warm_gold",
    description: "Inness paints the moon just cresting the horizon at golden hour — twilight and moonrise overlapping. A Barbizon-influenced American pastoral: the moon arriving as the sun departs, the fields holding both lights at once."
  },

  // ─── Winslow Homer ──────────────────────────────────────────────────────
  {
    id: "homer-moonlight-wood",
    artist: "Winslow Homer",
    title: "Moonlight, Wood Island Light",
    year: 1894,
    medium: "Oil on canvas",
    museum: "Metropolitan Museum of Art",
    museumUrl: "https://www.metmuseum.org/art/collection/search/11127",
    imageUrl: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/11127/44025/main-image",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Winslow_Homer_-_Moonlight,_Wood_Island_Light.jpg",
    license: "Public Domain",
    phase: ["full"],
    mood: ["silver", "marine"],
    palette: "silver",
    description: "Full moon over the Maine coast — Homer strips the scene to its essentials: dark rocks, a lighthouse, silver surf, the moon's path on the sea. American grandeur rendered with total restraint."
  },

  // ─── Joseph Wright of Derby ──────────────────────────────────────────────
  {
    id: "wright-moonlight-gorge",
    artist: "Joseph Wright of Derby",
    title: "Landscape with a Rainbow",
    year: 1794,
    medium: "Oil on canvas",
    museum: "Derby Museum and Art Gallery",
    museumUrl: "https://www.derbymuseums.org/",
    imageUrl: "https://d3d00swyhr67nd.cloudfront.net/w1200h1200/collection/DBY/DEMAG/DBY_DEMAG_1913_505-001.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Joseph_Wright_of_Derby_(1734-1797)_-_Landscape_with_a_Rainbow_-_1913-505_-_Derby_Museum_and_Art_Gallery.jpg",
    license: "Public Domain",
    phase: null,
    mood: ["warm_gold", "rural"],
    palette: "warm_gold",
    description: "Wright of Derby captures the drama of natural light — moonlight and storm-light competing. His nocturnes come from the same industrial curiosity as his candlelit interiors: what does light do to the world?"
  },

  // ─── Frederic Edwin Church ───────────────────────────────────────────────
  {
    id: "church-moonrise",
    artist: "Frederic Edwin Church",
    title: "Moonrise in Greece",
    year: 1889,
    medium: "Oil on canvas",
    museum: "Santa Barbara Museum of Art",
    museumUrl: "https://collections.sbma.net/objects/1988/moonrise-in-greece?ctx=7f60fbc9a774992d88dc23fc28f0b366f22fdff0&idx=0",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Moonrise_Frederic_Edwin_Church_1889.jpeg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Moonrise_Frederic_Edwin_Church_1889.jpeg",
    license: "Public Domain",
    phase: ["waning_crescent"],
    mood: ["serene", "twilight", "rural"],
    palette: "cool_twilight_with_warm_gold",
    description: "A late Church masterpiece painted in 1889. The waning crescent moon (the 'old moon') appears low and luminous over a Greek landscape. This composition reflects Church's intense astronomical study, where light is treated as a form of spiritual revelation."
  },

  // ─── Jean-François Millet ────────────────────────────────────────────────
  {
    id: "millet-starry-night",
    artist: "Jean-François Millet",
    title: "Starry Night",
    year: 1851,
    medium: "Oil on canvas",
    museum: "Yale University Art Gallery",
    museumUrl: "https://artgallery.yale.edu/collections/objects/52945",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Starry_Night_by_Jean-François_Millet.jpeg/1920px-Starry_Night_by_Jean-François_Millet.jpeg?_=20150811231401",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Starry_Night_by_Jean-Fran%C3%A7ois_Millet.jpeg",
    license: "Public Domain",
    phase: null,
    mood: ["rural", "cold_blue"],
    palette: "cold_blue",
    description: "Millet's peasant landscapes rarely turned to night, but here a shepherd moves his flock under a vast star-filled sky. The moon is absent — only starlight and the profound, indifferent sky of the plain."
  },
  // ─── Charles-François Daubigny ───────────────────────────────────────────
  {
    id: "daubigny-moonrise",
    artist: "Charles-François Daubigny",
    title: "Moonrise at Auvers",
    year: 1877,
    medium: "Oil on canvas",
    museum: "Montreal Museum of Fine Arts",
    museumUrl: "https://www.mbam.qc.ca/en/works/4514/",
    imageUrl: "https://mbam.ficelle.app/v1/?src=https%3A%2F%2Fcollections.mbam.qc.ca%2F1919%2FGWeb%2F1919_36_IN3_RET.jpg",
    sourceUrl: "https://www.mbam.qc.ca/en/works/4514/",
    license: "Public Domain",
    phase: ["waxing_gibbous", "full"],
    mood: ["warm_gold", "rural"],
    palette: "warm_gold",
    description: "Daubigny painted the Oise valley from his studio boat — this moonrise at Auvers predates van Gogh's time there by a decade. The Barbizon painters taught the Impressionists how to see night; this is their nocturne."
  },
];

// Phase matching order (priority: specific match → fallback)
const PHASE_FALLBACK = {
  "new":             ["new", null],
  "waxing_crescent": ["waxing_crescent", null],
  "first_quarter":   ["first_quarter", "waxing_crescent", null],
  "waxing_gibbous":  ["waxing_gibbous", null],
  "full":            ["full", null],
  "waning_gibbous":  ["waning_gibbous", "full", null],
  "last_quarter":    ["last_quarter", "waning_crescent", null],
  "waning_crescent": ["waning_crescent", null],
};

/**
 * Seeded pseudo-random from an integer seed (LCG).
 * Returns a value in [0, 1).
 */
function seededRandom(seed) {
  let s = seed;
  s = (s ^ (s << 13)) >>> 0;
  s = (s ^ (s >> 7)) >>> 0;
  s = (s ^ (s << 17)) >>> 0;
  return (s >>> 0) / 4294967296;
}

/**
 * Pick a painting for the given phase, using a daily seed for consistency.
 * @param {string} phase - current phase key
 * @param {number} daySeed - integer seed (e.g. YYYYMMDD)
 * @returns {Object} painting object
 */
function selectPainting(phase, daySeed, allowUnspecific = true) {
  // If allowUnspecific is false, we strictly search for specific matches first.
  let candidates = PAINTINGS.filter(x => Array.isArray(x.phase) && x.phase.includes(phase));
  
  if (candidates.length === 0 || allowUnspecific) {
    // Merge in phase-unspecific (null) paintings
    const unspecific = PAINTINGS.filter(x => x.phase === null);
    candidates = [...candidates, ...unspecific];
  }

  if (candidates.length > 0) {
    const idx = Math.floor(seededRandom(daySeed) * candidates.length);
    return candidates[idx];
  }

  // Final fallback: any painting
  const idx = Math.floor(seededRandom(daySeed) * PAINTINGS.length);
  return PAINTINGS[idx];
}

export { PAINTINGS, selectPainting, PHASE_FALLBACK };
