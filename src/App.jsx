import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import Home from "./pages/Home";
import ProductFarm from "./pages/ProductFarm";
import AdminLayout from "./Layout/AdminLayout";
import DashBoard from "./admin/pages/DashBoard";
import UserController from "./admin/pages/UserController";
import LoginAdmin from "./admin/pages/LoginAdmin";
import Login from "./pages/Login";
import Register from "./pages/Register";
import GuildBookController from "./admin/pages/GuildBookController";
import PostController from "./admin/pages/PostController";
import PostReportController from "./admin/pages/PostReportController";
import NewsController from "./admin/pages/NewsController";
import ReportAnimals from "./admin/pages/ReportAnimals";
import ReportProducts from "./admin/pages/ReportProducts";
import AddGuileBook from "./admin/From/AddGuileBook";
import CommentReport from "./admin/pages/CommentReport";
import FarmPage from "./pages/FarmList";
import GuildBook from "./pages/GuildBook";
import Price from "./pages/Price";
import FarmLayout from "./Layout/FarmLayout";
import Profile from "./Farm/pages/Profile";
import Logs from "./Farm/pages/Logs";
import News from "./Farm/pages/News";
import Comunity from "./Farm/pages/Comunity";
import Product from "./Farm/pages/Product";
import Animal from "./Farm/pages/Animal";
import FarmProfile from "./pages/FarmProfile";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "product", element: <ProductFarm /> },
        { path: "farmList", element: <FarmPage /> },
        { path: "book", element: <GuildBook /> },
        { path: "price", element: <Price /> },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "farm",
          element: <FarmProfile />,
        },
      ],
    },
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        { path: "/admin/dashBoard", element: <DashBoard /> },
        { path: "/admin/user", element: <UserController /> },
        {
          path: "/admin/book",
          element: <GuildBookController />,
        },
        { path: "/admin/post", element: <PostController /> },
        { path: "/admin/post_report", element: <PostReportController /> },
        { path: "/admin/news", element: <NewsController /> },
        { path: "/admin/report_animal", element: <ReportAnimals /> },
        { path: "/admin/report_product", element: <ReportProducts /> },
        { path: "/admin/book/add_guild_book", element: <AddGuileBook /> },
        { path: "/admin/comment_report", element: <CommentReport /> },
      ],
    },
    {
      path: "/profile",
      element: <FarmLayout />,
      children: [
        { path: "/profile", element: <Profile /> },
        { path: "/profile/product", element: <Product /> },
        { path: "/profile/animal", element: <Animal /> },
        { path: "/profile/social", element: <Comunity /> },
        { path: "/profile/news", element: <News /> },
        { path: "/profile/logs", element: <Logs /> },
      ],
    },
    {
      path: "admin/login",
      element: <LoginAdmin />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
