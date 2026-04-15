export type Education = {
  degree: string;
  institution: string;
  board: string;
  duration: string;
  logo: string;
  website: string;
};

const imageModules = import.meta.glob("../../assets/img/**/*.{png,jpg,jpeg,webp,svg}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const resolveImage = (path: string) => {
  const key = `../../assets/img/${path}`;
  return imageModules[key] ?? "";
};

export const educationList: Education[] = [
  {
    degree: "B.E. in Artificial Intelligence and Machine Learning",
    institution: "Mangalore Institute of Technology & Engineering (MITE)",
    board: "VTU (Visvesvaraya Technological University)",
    duration: "2021 – 2025 | CGPA: 7.25",
    logo: "education/mite-icon.webp",
    website: "https://mite.ac.in/",
  },
  {
    degree: "Pre-University Course (PUC)",
    institution: "Poornaprajna PU College, Adamaru",
    board: "DPUE, Karnataka",
    duration: "Passout: 2021 | Percentage: 72%",
    logo: "education/ppc-icon.webp",
    website: "https://poornaprajnaadamaru.edu.in/",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "St. Mary's High School, Mumbai",
    board: "Maharashtra State Board",
    duration: "Passout: 2019 | Percentage: 72.80%",
    logo: "education/st-marys-high-school-icon.webp",
    website: "https://stmarysssc.org/",
  },
].map((education) => ({
  ...education,
  logo: resolveImage(education.logo),
}));