import { createBrowserRouter } from "react-router-dom";
import GeneralLay from "../Layout/GeneralLay/index";
import Home from "../Pages/Home";
import SliderHm from "../Pages/Home/SliderHm";
import FamousBrands from "../Pages/Home/FamousBrands";
import SuggestionsCarts from "../Pages/Home/SuggestionsCarts";
import NewestSells from "../Pages/Home/NewestSells";
import BestSellsHm from "../Pages/Home/BestSellsHm";
import CategoriesCarts from "../Pages/Home/CategoriesCarts";

const clientRoutes = createBrowserRouter([
  {
    path: "/",
    element: <GeneralLay />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
        children: [
          {
            path: "slider",
            element: <SliderHm />,
          },
          {
            path: "categories-carts",
            element: <CategoriesCarts />,
          },
          {
            path: "famous-brands",
            element: <FamousBrands />,
          },
          {
            path: "suggestions-cart",
            element: <SuggestionsCarts />,
          },
          {
            path: "newest-sells",
            element: <NewestSells />,
          },
          {
            path: "best-sells",
            element: <BestSellsHm />,
          },
        ],
      },
    ],
  },
]);

export default clientRoutes;
