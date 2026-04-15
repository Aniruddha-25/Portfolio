import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faBrain,
  faChartLine,
  faCode,
  faFlask,
  faLayerGroup,
  faServer,
  faTable,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCss3Alt,
  faHtml5,
  faJs,
  faPython,
} from "@fortawesome/free-brands-svg-icons";

export type ProgramMeta = {
  label: string;
  icon: IconDefinition;
};

export const programMetaMap: Record<string, ProgramMeta> = {
  Python: { label: "Python", icon: faPython },
  "Scikit-learn": { label: "Scikit-learn", icon: faBrain },
  Pandas: { label: "Pandas", icon: faTable },
  Flask: { label: "Flask", icon: faFlask },
  HTML: { label: "HTML", icon: faHtml5 },
  CSS: { label: "CSS", icon: faCss3Alt },
  JavaScript: { label: "JavaScript", icon: faJs },
  "HTML/CSS": { label: "HTML/CSS", icon: faHtml5 },
  Django: { label: "Django", icon: faServer },
  NumPy: { label: "NumPy", icon: faLayerGroup },
  Matplotlib: { label: "Matplotlib", icon: faChartLine },
};

const defaultProgramMeta: ProgramMeta = {
  label: "Tool",
  icon: faCode,
};

export const getProgramMeta = (programName: string): ProgramMeta => {
  return programMetaMap[programName] ?? {
    ...defaultProgramMeta,
    label: programName,
  };
};
