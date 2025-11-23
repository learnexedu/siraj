// constants
import { semesters } from "@/constants/admin";

// prisma types
import { SemesterType } from "@prisma/client";

export const semesterName = (name: string, type: SemesterType) => {
  //   custom name
  if (type === SemesterType.CUSTOM) return name;
  //   names
  return semesters.find((s) => s.type === type)?.label || name;
};
