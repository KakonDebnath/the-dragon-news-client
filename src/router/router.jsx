import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../pages/About/About";
import Career from "../pages/Career/Career";
import Category from "../pages/Category/Category";
import News from "../pages/News/News";
import NewsPage from "../pages/News/NewsPage";
import Login from "../pages/Login/Login";
import LoginPage from "../pages/Login/LoginPage";
import Register from "../pages/Login/Register";
import PrivateRoute from "./PrivateRoute";
import Trams_condition from "../pages/Shared/Trams_condition";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    children: [
      {
        path: "/",
        element: <Category />,
        loader: () => fetch("https://the-news-dragon-server-kakondebnath.vercel.app/news")
      },
      { path: "/about", element: <About /> },
      { path: "/career", element: <Career /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/trams", element: <Trams_condition /> },
    ]
  },
  {
    path: "category",
    element: <Main />,
    children: [
      {
        path: ":id",
        element: <Category />,
        loader: ({ params }) => fetch(`https://the-news-dragon-server-kakondebnath.vercel.app/categories/${params.id}`)
      }
    ]
  },
  {
    path: "news",
    element: <NewsPage />,
    children: [
      {
        path: ":id",
        element: <PrivateRoute><News /></PrivateRoute>,
        loader: ({ params }) => fetch(`https://the-news-dragon-server-kakondebnath.vercel.app/${params.id}`)
      }
    ]
  }
]);

export default router;