export type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
};

const resolveImage = (path: string) =>
  new URL(`../../assets/img/${path}`, import.meta.url).href;

export const projectsList: Project[] = [
  {
    title: "House Price Prediction",
    description:
      "ML model predicting house prices with full-stack web interface.",
    image: "projects/house-price-prediction.webp",
    link: "https://github.com/Aniruddha-25/House_Price_Prediction",
  },
  {
    title: "Customer Churn Prediction",
    description:
      "Django app predicting customer churn using travel data.",
    image: "projects/customer_churn_prediction.webp",
    link: "https://github.com/Aniruddha-25/customer_churn_prediction",
  },
  {
    title: "Retailer Game Stock Advisor",
    description:
      "ML system predicting top-selling games using Random Forest.",
    image: "projects/retailer-game-stock-advisor.webp",
    link: "https://github.com/Aniruddha-25/Retailer_Game_Stock_Advisor",
  },
].map((project) => ({
  ...project,
  image: resolveImage(project.image),
}));