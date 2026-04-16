export type Project = {
  title: string;
  description: string;
  programsUsed: string[];
  image: string;
  link: string;
};

const imageModules = import.meta.glob("../../assets/img/**/*.{png,jpg,jpeg,webp,svg}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const resolveImage = (path: string) => {
  const key = `../../assets/img/${path}`;
  return imageModules[key] ?? "";
};

export const projectsList: Project[] = [
  {
    title: "House Price Prediction",
    description:
      "ML model predicting house prices with full-stack web interface.",
    programsUsed: [
      "Python",
      "Scikit-learn",
      "NumPy",
      "Pandas",
      "Flask",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    image: "projects/house-price-prediction.webp",
    link: "https://github.com/Aniruddha-25/House_Price_Prediction",
  },
  {
    title: "Customer Churn Prediction",
    description:
      "Django app predicting customer churn using travel data.",
    programsUsed: [
      "Python",
      "Django",
      "Scikit-learn",
      "NumPy",
      "Pandas",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    image: "projects/customer_churn_prediction.webp",
    link: "https://github.com/Aniruddha-25/customer_churn_prediction",
  },
  {
    title: "Retailer Game Stock Advisor",
    description:
      "ML system predicting top-selling games using Random Forest.",
    programsUsed: [
      "Python",
      "Flask",
      "Scikit-learn",
      "Pandas",
      "Matplotlib",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    image: "projects/retailer-game-stock-advisor.webp",
    link: "https://github.com/Aniruddha-25/Retailer_Game_Stock_Advisor",
  },
].map((project) => ({
  ...project,
  image: resolveImage(project.image),
}));
