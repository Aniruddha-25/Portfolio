import { FaChartLine, FaCode, FaCss3Alt, FaHtml5, FaJs, FaPython, FaReact } from "react-icons/fa6";
import { SiDjango, SiFlask, SiLucide, SiNumpy, SiPandas, SiScikitlearn, SiTypescript, SiVite } from "react-icons/si";
import type { IconType } from "react-icons";

export type ProgramMeta = {
  label: string;
  icon: IconType;
};

export const programMetaMap: Record<string, ProgramMeta> = {
  Python: { label: "Python", icon: FaPython },
  "Scikit-learn": { label: "Scikit-learn", icon: SiScikitlearn },
  Pandas: { label: "Pandas", icon: SiPandas },
  Flask: { label: "Flask", icon: SiFlask },
  HTML: { label: "HTML", icon: FaHtml5 },
  CSS: { label: "CSS", icon: FaCss3Alt },
  JavaScript: { label: "JavaScript", icon: FaJs },
  Django: { label: "Django", icon: SiDjango },
  NumPy: { label: "NumPy", icon: SiNumpy },
  Matplotlib: { label: "Matplotlib", icon: FaChartLine },
  React: { label: "React", icon: FaReact },
  TypeScript: { label: "TypeScript", icon: SiTypescript },
  Vite: { label: "Vite", icon: SiVite },
  "Lucide React": { label: "Lucide React", icon: SiLucide },
};

const defaultProgramMeta: ProgramMeta = {
  label: "Tool",
  icon: FaCode,
};

export const getProgramMeta = (programName: string): ProgramMeta => {
  return programMetaMap[programName] ?? {
    ...defaultProgramMeta,
    label: programName,
  };
};
