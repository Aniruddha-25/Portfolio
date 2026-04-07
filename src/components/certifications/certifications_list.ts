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

export const certificationsList: Certification[] = [
  {
    title: "Machine Learning A-Z: AI, Python & R + ChatGPT Prize",
    issuer: "Udemy",
    type: "Qualification Certificate",
    date: "Feb 2026",
    logo: "/img/certifications/udemy-icon.svg",
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
    type: "Data Science Certificate",
    date: "Jan 2026",
    logo: "/img/certifications/tcs-nqt-icon.svg",
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
    type: "Qualification Certificate",
    date: "Nov 2025",
    logo: "/img/certifications/tcs-nqt-icon.svg",
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
    logo: "/img/certifications/coursera-icon.svg",
    buttons: [
      {
        label: "View Certificate",
        file: "/data/certifications-and-achievements/coursera/ibm-machine-learning-professional-certificate-coursera.pdf",
      },
    ],
  },
];