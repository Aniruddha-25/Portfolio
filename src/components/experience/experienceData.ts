import type {
  InternshipExperience,
  ProfessionalExperience,
} from "../../utils/experienceCalculator";

export const internshipExperiences = {
  nicozn: {
    category: "internship",
    startDate: "2023-10",
    endDate: "2023-11",
  },
  suprajit: {
    category: "internship",
    startDate: "2025-03",
    endDate: "2025-06",
  },
} satisfies Record<string, InternshipExperience>;

interface ProfessionalRole extends ProfessionalExperience {
  companyName: string;
  jobTitle: string;
  workArrangement: string;
}

export const professionalExperiences = [
  {
    category: "professional",
    startDate: "2026-05",
    endDate: null,
    companyName: "Falkondata",
    jobTitle: "Junior Software Engineer Consultant",
    workArrangement: "Remote",
  },
] satisfies readonly ProfessionalRole[];
