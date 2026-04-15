import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faBrain,
  faCode,
  faDatabase,
  faScrewdriverWrench,
  faServer,
} from "@fortawesome/free-solid-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";

export type SkillItem = {
  name: string;
  icon: string;
};

export type SkillCategory = {
  title: string;
  icon: IconDefinition;
  items: SkillItem[];
};

const imageModules = import.meta.glob("../../assets/img/**/*.{png,jpg,jpeg,webp,svg}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const resolveImage = (path: string) => {
  const key = `../../assets/img/${path}`;
  return imageModules[key] ?? "";
};

export const skillsList: SkillCategory[] = [
  {
    title: "Languages",
    icon: faCode,
    items: [
      { name: "Python", icon: "skills/languages/python.svg" },
      { name: "Java", icon: "skills/languages/java.svg" },
      { name: "C", icon: "skills/languages/c.svg" },
      { name: "C++", icon: "skills/languages/cpp.svg" },
    ],
  },
  {
    title: "Front-End Development",
    icon: faReact,
    items: [
      { name: "React", icon: "skills/front-end-development/react.svg" },
      { name: "HTML", icon: "skills/front-end-development/html.svg" },
      { name: "CSS", icon: "skills/front-end-development/css.svg" },
      { name: "JavaScript", icon: "skills/front-end-development/javascript.svg" },
    ],
  },
  {
    title: "Database",
    icon: faDatabase,
    items: [
      { name: "MySQL", icon: "skills/database/mysql.svg" },
      { name: "PostgreSQL", icon: "skills/database/postgresql.svg" },
      { name: "MongoDB", icon: "skills/database/mongodb.svg" },
    ],
  },
  {
    title: "Frameworks",
    icon: faServer,
    items: [
      { name: "Django", icon: "skills/frameworks/django.svg" },
      { name: "Flask", icon: "skills/frameworks/flask.svg" },
      { name: "Node.js", icon: "skills/frameworks/node.js.svg" },
    ],
  },
  {
    title: "Data Analytics & ML Tooling",
    icon: faBrain,
    items: [
      { name: "Pandas", icon: "skills/data-ml-tools/pandas.svg" },
      { name: "NumPy", icon: "skills/data-ml-tools/numpy.svg" },
      { name: "Matplotlib", icon: "skills/data-ml-tools/matplotlib.svg" },
      { name: "Scikit-learn", icon: "skills/data-ml-tools/scikit-learn.svg" },
      { name: "Seaborn", icon: "skills/data-ml-tools/seaborn.svg" },
    ],
  },
  {
    title: "Tools & Technologies",
    icon: faScrewdriverWrench,
    items: [
      { name: "Linux (Ubuntu)", icon: "skills/tools-and-technologies/linux.svg" },
      { name: "VS Code", icon: "skills/tools-and-technologies/vs-code.svg" },
      { name: "GitHub", icon: "skills/tools-and-technologies/github.svg" },
      { name: "Jupyter Notebook", icon: "skills/tools-and-technologies/jupyter.svg" },
      { name: "Google Colab", icon: "skills/tools-and-technologies/google-colab.svg" },
    ],
  },
].map((category) => ({
  ...category,
  items: category.items.map((item) => ({
    ...item,
    icon: resolveImage(item.icon),
  })),
}));