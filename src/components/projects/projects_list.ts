export type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
};

const withBase = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

export const projectsList: Project[] = [
  {
    title: "House Price Prediction",
    description:
      "ML model predicting house prices with full-stack web interface.",
    image: "/img/projects/house-price-prediction.webp",
    link: "https://github.com/Aniruddha-25/House_Price_Prediction",
  },
  {
    title: "Customer Churn Prediction",
    description:
      "Django app predicting customer churn using travel data.",
    image: "/img/projects/customer_churn_prediction.webp",
    link: "https://github.com/Aniruddha-25/customer_churn_prediction",
  },
  {
    title: "Retailer Game Stock Advisor",
    description:
      "ML system predicting top-selling games using Random Forest.",
    image: "/img/projects/retailer-game-stock-advisor.webp",
    link: "https://github.com/Aniruddha-25/Retailer_Game_Stock_Advisor",
  },
].map((project) => ({
  ...project,
  image: withBase(project.image),
}));