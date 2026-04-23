import type { InsuranceGroup } from "./types";

export const insurances: InsuranceGroup[] = [
  {
    eyebrow: "Vision plans",
    title: "For vision benefits.",
    caption: "Routine eye exams and eyewear coverage.",
    carriers: ["VSP", "EyeMed", "Spectera", "Superior", "Davis"],
  },
  {
    eyebrow: "Medical plans",
    title: "For medical eye care.",
    caption:
      "Diagnostic visits, surgical consults, and ocular conditions.",
    carriers: [
      "Medicare",
      "Aetna",
      "Blue Cross Blue Shield",
      "Cigna",
      "UMR",
      "UHC Medicare & VA",
      "Humana",
    ],
  },
];
