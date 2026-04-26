export type Frame = {
  slug: string;
  brand: string;
  model: string;
  serial: string;
  material: string;
  note: string;
};

export const featuredFrames: Frame[] = [
  {
    slug: "state-reid",
    brand: "State",
    model: "Reid",
    serial: "014",
    material: "Titanium · acetate",
    note: "Hand-built Chicago titanium, with an acetate inlay cut by hand.",
  },
  {
    slug: "lindberg-air-n01",
    brand: "Lindberg",
    model: "Air N°01",
    serial: "015",
    material: "Beta titanium",
    note: "Three grams, screwless, virtually weightless on the bridge.",
  },
  {
    slug: "garrett-leight-hampton",
    brand: "Garrett Leight",
    model: "Hampton",
    serial: "016",
    material: "Bio acetate",
    note: "An American panto in Bio Honey acetate, hand-polished.",
  },
];
