export type Certification = {
  title: string;
  issuer: string;
  type: string;
  date: string;
  logo: string;
  buttons: {
    label: string;
    file: string;
  }[];
};

const withBase = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

const imageModules = import.meta.glob("../../assets/img/**/*.{png,jpg,jpeg,webp,svg}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const resolveImage = (path: string) => {
  const key = `../../assets/img/${path}`;
  return imageModules[key] ?? "";
};

export const certificationsList: Certification[] = [
{
  title: "SQL (Basic)",
  issuer: "HackerRank",
  type: "Skill Certification Test",
  date: "Apr 2026",
  logo: "certifications/hackerrank-icon.svg",
  buttons: [
    {
      label: "View Certificate",
      file: "/data/certifications-and-achievements/hackerrank/sql-(basic)-hackerrank.pdf",
    },
  ],
},
  {
    title: "Machine Learning A-Z: AI, Python & R + ChatGPT Prize",
    issuer: "Udemy",
    type: "Qualification Certificate",
    date: "Feb 2026",
    logo: "certifications/udemy-icon.svg",
    buttons: [
      {
        label: "View Certificate",
        file: "/data/certifications-and-achievements/udemy/machine-learning-a-z-ai--python-r-certificate-udemy.pdf",
      },
    ],
  },
  {
    title: "TCS ION NQT - Machine Learning",
    issuer: "TCS National Qualifier Test (TCS NQT)",
    type: "National Qualifier Test Certification",
    date: "Jan 2026",
    logo: "certifications/tcs-nqt-icon.svg",
    buttons: [
      {
        label: "View Certificate",
        file: "/data/certifications-and-achievements/tcs-ion-nqt/ml-jan-2026/tcs-ion-nqt-ml.pdf",
      },
    ],
  },
  {
    title: "TCS iON NQT - IT",
    issuer: "TCS National Qualifier Test (TCS NQT)",
    type: "National Qualifier Test Certification",
    date: "Nov 2025",
    logo: "certifications/tcs-nqt-icon.svg",
    buttons: [
      {
        label: "View Score Card",
        file: "/data/certifications-and-achievements/tcs-ion-nqt/it-nov-2025/tcs-ion-nqt-it-score-card.pdf",
      },
      {
        label: "View Psychometric",
        file: "/data/certifications-and-achievements/tcs-ion-nqt/it-nov-2025/tcs-ion-nqt-it-psychometric.pdf",
      },
    ],
  },
  {
    title: "Exploratory Data Analysis for Machine Learning",
    issuer: "IBM | Coursera",
    type: "Qualification Certificate",
    date: "Oct 2025",
    logo: "certifications/coursera-icon.svg",
    buttons: [
      {
        label: "View Certificate",
        file: "/data/certifications-and-achievements/coursera/ibm-machine-learning-professional-certificate-coursera.pdf",
      },
    ],
  },
].map((certification) => ({
  ...certification,
  logo: resolveImage(certification.logo),
  buttons: certification.buttons.map((button) => ({
    ...button,
    file: withBase(button.file),
  })),
}));