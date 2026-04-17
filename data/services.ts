import type { Service } from "./types";

export const services: Service[] = [
  {
    slug: "comprehensive-exams",
    number: "01",
    eyebrow: "Comprehensive Exams",
    title: "The annual exam, considered.",
    summary:
      "Annual evaluations using advanced retinal imaging — for vision, ocular health, and what's beneath.",
    intro:
      "An eye exam at Senoia is not a fifteen-minute checkbox. We take the time to see you — your history, your habits, the way you move through your days — because a prescription is only the last page of a longer conversation.",
    whatToExpect: [
      "A full vision assessment for distance, near, and the in-between.",
      "Advanced retinal imaging that looks beneath the surface — macula, optic nerve, vascular health.",
      "Screening for glaucoma, diabetic retinopathy, and age-related macular degeneration.",
      "A considered conversation about lifestyle, screens, sleep, and the eyes you want to still have in twenty years.",
    ],
    related: ["specialty-contacts", "dry-eye-therapy"],
  },
  {
    slug: "specialty-contacts",
    number: "02",
    eyebrow: "Specialty Contacts",
    title: "Contacts as a craft.",
    summary:
      "Scleral, multifocal, and custom-fit contacts for difficult prescriptions and demanding eyes.",
    intro:
      "Some eyes require more than an off-the-shelf lens. Scleral lenses for keratoconus. Multifocals that forgive the transition. Custom fits for post-surgical corneas and dry ocular surfaces. We treat the fitting process as the craft it is.",
    whatToExpect: [
      "Corneal topography and ocular surface evaluation before any fitting begins.",
      "Scleral, hybrid, multifocal, and toric options from the designers who make each one best.",
      "A patient, iterative fitting process — we'd rather get it right than get it fast.",
      "Ongoing check-ins to make sure the lens that fit on day one still fits at month six.",
    ],
    related: ["comprehensive-exams", "dry-eye-therapy"],
  },
  {
    slug: "dry-eye-therapy",
    number: "03",
    eyebrow: "Dry Eye Therapy",
    title: "For eyes that feel it.",
    summary:
      "In-office treatments and ongoing care for chronic dryness, irritation, and ocular surface disease.",
    intro:
      "Dry eye is rarely just dry eye. It is tear-film chemistry, eyelid health, environment, and sometimes the shape of your day. We diagnose the cause, not the symptom — and we stay with the treatment until it holds.",
    whatToExpect: [
      "Meibography and tear-film analysis to find the root, not the surface.",
      "In-office treatments including expression, IPL where appropriate, and targeted therapies.",
      "A home protocol you can actually follow, tailored to your days.",
      "A long-term plan — dry eye is managed, not cured, and we stay with you.",
    ],
    related: ["comprehensive-exams", "specialty-contacts"],
  },
  {
    slug: "pediatric-family",
    number: "04",
    eyebrow: "Pediatric & Family",
    title: "Gentle, thorough, from age three.",
    summary:
      "Gentle, thorough exams for the youngest patients, with sight-development tracking from age three.",
    intro:
      "Children do not tell you when their eyes are struggling — they adapt, and the adaptation becomes the problem. We examine the youngest patients with care, curiosity, and enough time that they remember it kindly.",
    whatToExpect: [
      "Age-appropriate visual acuity, binocular vision, and developmental tracking.",
      "Screening for amblyopia, strabismus, and convergence insufficiency.",
      "Myopia management programs — ortho-K, atropine, peripheral-defocus lenses — for children who are trending.",
      "Parents in the room, questions welcomed, no rushing for the next appointment.",
    ],
    related: ["comprehensive-exams", "specialty-contacts"],
  },
];
