export type SkillItem = {
  name: string;
  icon: string;
};

export type SkillCategory = {
  title: string;
  iconClass: string;
  items: SkillItem[];
};

const withBase = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

export const skillsList: SkillCategory[] = [
  {
    title: "Languages",
    iconClass: "fa-solid fa-code",
    items: [
      { name: "Python", icon: "/img/skills/languages/python.svg" },
      { name: "Java", icon: "/img/skills/languages/java.svg" },
      { name: "C", icon: "/img/skills/languages/c.svg" },
      { name: "C++", icon: "/img/skills/languages/cpp.svg" },
    ],
  },
  {
    title: "Front-End Development",
    iconClass: "fa-brands fa-react",
    items: [
      { name: "React", icon: "/img/skills/front-end-development/react.svg" },
      { name: "HTML", icon: "/img/skills/front-end-development/html.svg" },
      { name: "CSS", icon: "/img/skills/front-end-development/css.svg" },
      { name: "JavaScript", icon: "/img/skills/front-end-development/javascript.svg" },
    ],
  },
  {
    title: "Database",
    iconClass: "fa-solid fa-database",
    items: [
      { name: "MySQL", icon: "/img/skills/database/mysql.svg" },
      { name: "PostgreSQL", icon: "/img/skills/database/postgresql.svg" },
      { name: "MongoDB", icon: "/img/skills/database/mongodb.svg" },
    ],
  },
  {
    title: "Frameworks",
    iconClass: "fa-solid fa-server",
    items: [
      { name: "Django", icon: "/img/skills/frameworks/django.svg" },
      { name: "Flask", icon: "/img/skills/frameworks/flask.svg" },
      { name: "Node.js", icon: "/img/skills/frameworks/node.js.svg" },
    ],
  },
  {
    title: "Data Analytics & ML Tooling",
    iconClass: "fa-solid fa-microchip-ai",
    items: [
      { name: "Pandas", icon: "/img/skills/data-ml-tools/pandas.svg" },
      { name: "NumPy", icon: "/img/skills/data-ml-tools/numpy.svg" },
      { name: "Matplotlib", icon: "/img/skills/data-ml-tools/matplotlib.svg" },
      { name: "Scikit-learn", icon: "/img/skills/data-ml-tools/scikit-learn.svg" },
      { name: "Seaborn", icon: "/img/skills/data-ml-tools/seaborn.svg" },
    ],
  },
  {
    title: "Tools & Technologies",
    iconClass: "fa-solid fa-screwdriver-wrench",
    items: [
      { name: "Linux (Ubuntu)", icon: "/img/skills/tools-and-technologies/linux.svg" },
      { name: "VS Code", icon: "/img/skills/tools-and-technologies/vs-code.svg" },
      { name: "GitHub", icon: "/img/skills/tools-and-technologies/github.svg" },
      { name: "Jupyter Notebook", icon: "/img/skills/tools-and-technologies/jupyter.svg" },
      { name: "Google Colab", icon: "/img/skills/tools-and-technologies/google-colab.svg" },
    ],
  },
].map((category) => ({
  ...category,
  items: category.items.map((item) => ({
    ...item,
    icon: withBase(item.icon),
  })),
}));