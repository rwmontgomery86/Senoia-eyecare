import type { Doctor } from "./types";

export const doctors: Doctor[] = [
  {
    slug: "name-one",
    name: "Dr. [Name One]",
    credentials: "OD · Founder",
    focusLine: "On the quiet rigor of a thorough exam.",
    bioIntro:
      "Dr. [Name One] founded Senoia Eyecare on the conviction that an eye exam should be an act of attention — unhurried, specific, and led by the person in the chair.",
    bioBody: [
      "[Placeholder bio — education, residency, clinical philosophy. Two or three paragraphs that give patients a real sense of who will be sitting across from them.]",
      "[A second paragraph on clinical focus: what cases they love, what they've built the practice around, how they think about long-term ocular health.]",
      "[A third paragraph, more personal: where they live, what they do on a Saturday, why Senoia.]",
    ],
    focusAreas: [
      "Comprehensive ocular health",
      "Myopia management in children",
      "The long relationship — patients seen for a decade or more",
    ],
    portraitCaption: "[ portrait — Dr. One, natural window light, 3:4 ]",
  },
  {
    slug: "name-two",
    name: "Dr. [Name Two]",
    credentials: "OD · Optometric Physician",
    focusLine: "On contact lenses as a craft.",
    bioIntro:
      "Dr. [Name Two] joined the practice to build the specialty contact lens program — scleral, multifocal, and the cases that other clinics refer out.",
    bioBody: [
      "[Placeholder bio — education, fellowship, the clinical path that led to specialty contacts. Written in the voice of a practitioner who chose the harder problems on purpose.]",
      "[A second paragraph on philosophy: why contacts matter, what a good fit feels like, the patience the craft asks for.]",
      "[A third paragraph, more personal: a detail or two the patient can carry into the exam room.]",
    ],
    focusAreas: [
      "Scleral lens fitting for keratoconus and irregular corneas",
      "Multifocal and hybrid lens design",
      "Dry eye and ocular surface disease",
    ],
    portraitCaption: "[ portrait — Dr. Two, examining frame, 3:4 ]",
  },
];
