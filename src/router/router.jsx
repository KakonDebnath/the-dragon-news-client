import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Career from "../pages/Career/Career";
import Category from "../pages/Category/Category";
import News from "../pages/News/News";
import NewsPage from "../pages/News/NewsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: ()=>fetch('http://localhost:5000/news'),
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/career", element: <Career /> },
      { path: "/login", element: <Home /> },
      {
        path: "/category/:id",
        element: <Category />,
        loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`)
      },
      // {
      //   path: "/news/:id",
      //   element: <News />,
      //   loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
      // }
    ]
  },
  {
    path: "news",
    element: <NewsPage />,
    children: [
      {
        path: ":id",
        element: <News />,
        loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
      }
    ]
  }
]);

export default router;