import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
// Pages
import Dashboard from "../pages/Dashboard";
import Account from "../pages/Account";
import Bookings from "../pages/Bookings";
import Cabins from "../pages/Cabins";
import Login from "../pages/Login";
import Settings from "../pages/Settings";
import Users from "../pages/Users";
import PageNotFound from "../pages/PageNotFound";
import AppLayout from "../ui/AppLayout";

const AppRouter = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          index: true,
          element: <Navigate replace to="dashboard" />,
        },
        { path: "/dashboard", element: <Dashboard /> },
        { path: "/account", element: <Account /> },
        { path: "/bookings", element: <Bookings /> },
        { path: "/cabins", element: <Cabins /> },
        { path: "/settings", element: <Settings /> },
        { path: "/users", element: <Users /> },
      ],
    },
    { path: "/login", element: <Login /> },
    { path: "*", element: <PageNotFound /> },
  ]);
  return <RouterProvider router={routes}>AppRouter</RouterProvider>;
};

export default AppRouter;
