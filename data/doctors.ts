import type { Doctor } from "./types";

export const doctors: Doctor[] = [
  {
    slug: "ross-montgomery",
    name: "Dr. Ross Montgomery",
    credentials: "OD",
    focusLine: "On the long view of ocular health.",
    bioIntro:
      "Dr. Ross Montgomery founded Senoia Eyecare after a residency in ocular disease at the Woolfson Eye Institute — a practice built on the conviction that an exam should be unhurried, specific, and led by the person in the chair.",
    bioBody: [
      "Dr. Montgomery earned his B.S. in Biology, Cum Laude, from Valdosta State University, then completed his Doctor of Optometry at the Pennsylvania College of Optometry in 2013. His residency at the Woolfson Eye Institute in Atlanta placed him alongside ocular disease specialists — the formative years that shaped how he reads an eye today.",
      "He founded Senoia Eyecare to do the work the way he believed it should be done — slowly, attentively, with time for the conversation an exam asks for. He sees long-term ocular health as a relationship, not a transaction.",
      "Dr. Montgomery lives nearby with his wife, Erica Frederick, and their two sons. Off the clock, he fishes, works wood, cooks, and spends as much of the day outside as the calendar will allow.",
    ],
    focusAreas: [
      "Comprehensive ocular health",
      "Ocular disease — diagnosis and management",
      "The long relationship — patients seen for a decade or more",
    ],
    portrait: "/assets/images/home-page/doctor-ross-montgomery.jpg",
  },
  {
    slug: "taylor-williamson",
    name: "Dr. Taylor Williamson",
    credentials: "OD",
    focusLine: "On meeting every patient where they are.",
    bioIntro:
      "Dr. Taylor Williamson trained in Memphis and has practiced across Georgia since 2019. She brings a careful, unhurried approach to every exam — and a curiosity that doesn't quit at the door.",
    bioBody: [
      "Dr. Williamson grew up in Bismarck, North Dakota, and earned her undergraduate degree from Concordia College in Moorhead, Minnesota, graduating in 2015 — a member of the Tri-Beta Biological Honor Society along the way. She went on to the Southern College of Optometry in Memphis, Tennessee, completing her Doctor of Optometry in 2019.",
      "She moved to Georgia shortly after graduation and has been practicing in the Peach State ever since. Her work in the chair carries the same patience she brings to everything else — slow, exact, and unhurried.",
      "Dr. Williamson met her husband in optometry school, and they now share a life full of adventure, creativity, and a little chaos — thanks in part to their three energetic dogs. Off the clock, she's a model railroader, crocheter, and writer, always with some project underway.",
    ],
    focusAreas: [
      "Comprehensive eye exams for adults and children",
      "Contact lens fitting and follow-up care",
      "Dry eye and ocular surface comfort",
    ],
    portrait: "/assets/images/home-page/doctor-taylor-williamson.jpg",
  },
];
