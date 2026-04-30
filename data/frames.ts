export type FrameHero = {
  eyebrow: string;
  intro: string;
  body: string;
  imageSrc: string;
  imageAlt: string;
  origin: string;
};

export type FrameStory = {
  eyebrow: string;
  headline: string;
  body: string[];
  image: {
    src?: string;
    alt?: string;
    caption: string;
  };
  pullQuote: {
    text: string;
    attribution: string;
  };
};

export type GalleryTile = {
  variant: "square" | "portrait" | "landscape" | "tall" | "wide" | "free";
  span: string;
  caption: string;
  imageSrc?: string;
  imageAlt?: string;
};

export type FrameGallery = {
  eyebrow: string;
  headline: string;
  tiles: GalleryTile[];
};

export type FrameSpecs = {
  eyebrow: string;
  headline: string;
  intro: string;
  items: { label: string; value: string }[];
};

export type Frame = {
  slug: string;
  brand: string;
  model: string;
  serial: string;
  material: string;
  note: string;
  hero: FrameHero;
  story: FrameStory;
  gallery: FrameGallery;
  specs: FrameSpecs;
};

export const featuredFrames: Frame[] = [
  {
    slug: "state-reid",
    brand: "State",
    model: "Reid",
    serial: "014",
    material: "Titanium · acetate",
    note: "Hand-built Chicago titanium, with an acetate inlay cut by hand.",
    hero: {
      eyebrow: "Featured frame · April",
      intro:
        "Hand-built Chicago titanium, with an acetate inlay cut by hand.",
      body:
        "Drawn from the 1914 Reid Murdoch clocktower on the Chicago River — titanium for the industry, acetate for the sun, earth, and water it overlooks. Built by seventy hands at State's Chicago factory.",
      imageSrc: "/assets/images/home-page/featured-frame-state-reid.jpg",
      imageAlt:
        "State Reid frame — hand-built Chicago titanium with acetate inlay",
      origin: "State Optical Co. · Chicago",
    },
    story: {
      eyebrow: "The story · 01",
      headline: "From a clocktower on the Chicago River.",
      body: [
        "The Reid Murdoch building has stood at the corner of LaSalle and the river since 1914. Its clocktower has kept Chicago on time for more than a century — a quiet civic instrument, hidden in plain sight. The frame takes its name, and its proportion, from the building.",
        "State Optical builds in Chicago. Seventy craftspeople, working by hand, in one factory — finishing each frame from titanium and acetate sourced globally and assembled patiently. A frame for someone who considers how a thing is made with as much mindfulness as how it looks.",
        "Titanium for the industry. Acetate for the sun, the earth, and the water the building overlooks. The Reid is the place where those two ideas meet — one in the bone of the frame, the other cut by hand into its insert.",
      ],
      image: { caption: "[ atelier hand · brushing titanium ]" },
      pullQuote: {
        text: "A frame should tell you who made it without saying so.",
        attribution: "Dr. Ross Montgomery · OD",
      },
    },
    gallery: {
      eyebrow: "The frame · 02",
      headline: "In four views.",
      tiles: [
        {
          variant: "square",
          span: "md:col-span-6",
          caption: "[ Reid · front · linen ground ]",
        },
        {
          variant: "square",
          span: "md:col-span-6",
          caption: "[ Reid · three-quarter · low key ]",
        },
        {
          variant: "landscape",
          span: "md:col-span-7",
          caption: "[ Reid · side profile · titanium temple ]",
        },
        {
          variant: "portrait",
          span: "md:col-span-5",
          caption: "[ Reid · on-face · daylight ]",
        },
      ],
    },
    specs: {
      eyebrow: "Specifications · 03",
      headline: "The detail.",
      intro:
        "Every measurement we have. The rest — fit, balance, the way it sits — is best read in person.",
      items: [
        { label: "Material", value: "Titanium, with hand-cut acetate insert" },
        { label: "Origin", value: "Chicago, Illinois" },
        {
          label: "Made by",
          value: "State Optical Co. — seventy craftspeople, by hand",
        },
        {
          label: "Lens compatibility",
          value: "Single vision, progressive, and sun — by Hoya",
        },
      ],
    },
  },
  {
    slug: "state-eugene-rose",
    brand: "State",
    model: "Eugenie",
    serial: "015",
    material: "Beta-titanium · hand-painted enamel",
    note: "Beta-titanium with a ring of hand-painted enamel — Chicago design, Fukui craft.",
    hero: {
      eyebrow: "From the case · State",
      intro:
        "Japanese beta-titanium with a ring of hand-painted enamel — designed in Chicago, finished in Fukui.",
      body:
        "Drawn from Eugenie Street in Chicago's Old Town — a Victorian-era enclave anchored by St. Michael's Church, whose 200-foot steeple rose in 1869 and whose walls were among the only structures to survive the Great Chicago Fire two years later. Part of State's Japan Artisan Series: designed in Chicago, crafted in Fukui prefecture by some of the finest titanium-makers in the world.",
      imageSrc:
        "/assets/images/home-page/featured-frame-state-eugene-rose.jpg",
      imageAlt:
        "State Eugenie frame — Japanese beta-titanium with hand-painted rose gold and black enamel",
      origin: "State Optical Co. · Chicago × Fukui",
    },
    story: {
      eyebrow: "The story · 01",
      headline: "From a Victorian street, by way of Fukui.",
      body: [
        "Eugenie Street runs through Chicago's Old Town — a Victorian-era enclave of brownstones and tree-lined sidewalks. In 1869, St. Michael's Church raised its 200-foot steeple on the corner. Two years later, when the Great Chicago Fire took most of the neighborhood to the ground, St. Michael's walls stood. The frame takes its name from the street that survived.",
        "State Optical builds in Chicago. Seventy craftspeople, working by hand, in one factory — finishing each frame from materials sourced globally and assembled patiently. The Eugenie is part of State's Japan Artisan Series: designed in Chicago, then crafted in Japan's Fukui prefecture, where the finest titanium eyewear in the world is made.",
        "A ring of hand-painted enamel encircles the frame, framing the eye like a flower in early bloom — the colors of early spring, and the polish of putting on Sunday best for a walk through town. Beta-titanium for weightlessness. Enamel for the small ceremony of dressing for it.",
      ],
      image: {
        caption: "[ Eugenie · enamel detail · rose gold on black ]",
      },
      pullQuote: {
        text: "A frame should tell you who made it without saying so.",
        attribution: "Dr. Ross Montgomery · OD",
      },
    },
    gallery: {
      eyebrow: "The frame · 02",
      headline: "In four views.",
      tiles: [
        {
          variant: "square",
          span: "md:col-span-6",
          caption: "[ Eugenie · front · linen ground ]",
        },
        {
          variant: "square",
          span: "md:col-span-6",
          caption: "[ Eugenie · enamel ring · macro ]",
        },
        {
          variant: "landscape",
          span: "md:col-span-7",
          caption: "[ Eugenie · side profile · titanium temple ]",
        },
        {
          variant: "portrait",
          span: "md:col-span-5",
          caption: "[ Eugenie · on-face · daylight ]",
        },
      ],
    },
    specs: {
      eyebrow: "Specifications · 03",
      headline: "The detail.",
      intro:
        "Every measurement we have. The rest — fit, balance, the way it sits — is best read in person.",
      items: [
        {
          label: "Material",
          value: "Japanese beta-titanium with hand-painted enamel",
        },
        { label: "Colorway", value: "Rose Gold / Black" },
        {
          label: "Origin",
          value: "Designed in Chicago · crafted in Fukui, Japan",
        },
        {
          label: "Made by",
          value:
            "State Optical Co. — Japan Artisan Series, by hand in Fukui",
        },
        {
          label: "Lens compatibility",
          value: "Single vision, progressive, and sun — by Hoya",
        },
      ],
    },
  },
  {
    slug: "maui-jim-hiehie",
    brand: "Maui Jim",
    model: "Hiehie",
    serial: "016",
    material: "Injected nylon · SuperThin Glass",
    note: "Lahaina-built sun, with PolarizedPlus2 SuperThin Glass.",
    hero: {
      eyebrow: "From the case · Maui Jim",
      intro:
        "A classic round in injected nylon, finished with PolarizedPlus2 SuperThin Glass.",
      body:
        "Born on the beaches of Lahaina in 1980, Maui Jim was made to defy the Hawaiian sun. The Hiehie carries that lineage — patented PolarizedPlus2 lenses that pull 99.9% of glare from the world, with the signature Native Pattern embedded along the temple core. The classic round you trust in the open air, from the mountain peaks to the valleys of the city.",
      imageSrc: "/assets/images/home-page/featured-frame-maui-jim-hiehie.jpg",
      imageAlt:
        "Maui Jim Hiehie sunglasses — injected nylon frame with PolarizedPlus2 SuperThin Glass",
      origin: "Maui Jim · Lahaina, Hawaii",
    },
    story: {
      eyebrow: "The story · 01",
      headline: "Born on a Lahaina beach, in 1980.",
      body: [
        "Maui Jim was founded on the beaches of Lahaina in 1980 — built to defy the harsh glare of the Hawaiian sun. Every pair is engineered around patented PolarizedPlus2 lens technology that eliminates 99.9% of glare while enhancing color, clarity, and detail. The brand's promise: reveal the world the way nature intended.",
        "In Hawaiian, hiehie (pronounced hee-ay-hee-ay) means superb — beautiful, elegant, distinguished in bearing. The frame earns the name. A classic round silhouette, softened by a sculpted keyhole bridge. The signature Native Pattern is embedded along the temple core; the rubber temple tips carry a signature slash and native pattern — a quiet nod to the islands that inspired the brand.",
        "Finished with SuperThin Glass — 32% thinner and lighter than standard glass, with the crispest optics available and the best scratch resistance. The Hiehie is the classic round you trust in the open air, designed to see the world in new light from the mountain peaks to the valleys of the city.",
      ],
      image: { caption: "[ Hiehie · keyhole bridge · macro ]" },
      pullQuote: {
        text: "A frame should tell you who made it without saying so.",
        attribution: "Dr. Ross Montgomery · OD",
      },
    },
    gallery: {
      eyebrow: "The frame · 02",
      headline: "In four views.",
      tiles: [
        {
          variant: "square",
          span: "md:col-span-6",
          caption: "[ Hiehie · front · linen ground ]",
        },
        {
          variant: "square",
          span: "md:col-span-6",
          caption: "[ Hiehie · Native Pattern · temple core ]",
        },
        {
          variant: "landscape",
          span: "md:col-span-7",
          caption: "[ Hiehie · side profile · nylon temple ]",
        },
        {
          variant: "portrait",
          span: "md:col-span-5",
          caption: "[ Hiehie · on-face · daylight ]",
        },
      ],
    },
    specs: {
      eyebrow: "Specifications · 03",
      headline: "The detail.",
      intro:
        "Every measurement we have. The rest — fit, balance, the way it sits — is best read in person.",
      items: [
        { label: "Material", value: "Injected nylon frame" },
        {
          label: "Lens",
          value:
            "SuperThin Glass — PolarizedPlus2, 99.9% glare elimination, 32% thinner",
        },
        { label: "Origin", value: "Lahaina, Hawaii" },
        {
          label: "Made by",
          value: "Maui Jim — engineered for Hawaiian sun since 1980",
        },
        {
          label: "Lens compatibility",
          value: "Sun · prescription available at fitting",
        },
      ],
    },
  },
];
