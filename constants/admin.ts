import { SemesterType } from "@prisma/client";

// review status
export const semesters = [
  {
    type: SemesterType.TERM1,
    label: "ترم أول",
  },
  {
    type: SemesterType.TERM2,
    label: "ترم ثان",
  },
  {
    type: SemesterType.SUMMER,
    label: "ترم صيفي",
  },
];
