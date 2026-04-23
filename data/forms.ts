import type { PatientForm } from "./types";

// TODO: replace empty url values with the real Google Drive shared PDF links before launch.
export const forms: PatientForm[] = [
  {
    title: "New patient intake",
    description:
      "Demographics, medical history, and current medications. Complete before your first visit.",
    url: "",
  },
  {
    title: "Release of medical records",
    description:
      "Authorize us to send or receive records from another provider.",
    url: "",
  },
  {
    title: "HIPAA privacy acknowledgment",
    description:
      "Signed acknowledgment of our notice of privacy practices.",
    url: "",
  },
];
