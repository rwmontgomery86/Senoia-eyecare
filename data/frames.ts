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
    slug: "state-eugene-rose",
    brand: "State",
    model: "Eugene Rose",
    serial: "015",
    material: "Acetate",
    note: "A Chicago panto in warm rose acetate — quiet, not loud.",
  },
  {
    slug: "maui-jim-hiehie",
    brand: "Maui Jim",
    model: "HIEHIE",
    serial: "016",
    material: "Nylon · polarized glass",
    note: "Island-built sun, with PolarizedPlus2 glass for water and light.",
  },
];
