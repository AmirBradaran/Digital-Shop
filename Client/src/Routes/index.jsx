import { createBrowserRouter } from "react-router-dom";
import GeneralLayout from "../layouts/GeneralLayout";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home/index";
import ProductDetails from "../pages/ProductDetails";
import Products from "../pages/Products";
import AboutAndContactUs from "../pages/AboutAndContactUs";
import UserPanel from "../pages/UserPanel";
import Profile from "../pages/UserPanel/Profile/index";
import Orders from "../pages/UserPanel/Orders";
import Location from "../pages/UserPanel/Location";
import Messages from "../pages/UserPanel/Messages";
import LoginRegister from "../pages/LoginRegister";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <GeneralLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "product-details",
        element: <ProductDetails />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "contact-us",
        element: <AboutAndContactUs />,
      },
      {
        path: "about-us",
        element: <AboutAndContactUs />,
      },
      {
        path: "login-register",
        element: <LoginRegister />,
      },
      {
        path: "user-panel",
        element: <UserPanel />,
        children: [
          {
            path: "user-panel/profile",
            element: <Profile />,
          },
          {
            path: "user-panel/orders",
            element: <Orders />,
          },
          {
            path: "user-panel/location",
            element: <Location />,
          },
          {
            path: "user-panel/messages",
            element: <Messages />,
          },
        ],
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default routes;
