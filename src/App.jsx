import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./page/home";
import LoginPage from "./page/login";
import RegisterPage from "./page/register";
import Layout from "./components/layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Bọc layout cho các trang chính
    children: [
      {
        path: "/",
        element: <HomePage />, // Trang chủ sẽ được render bên trong Layout
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />, // Trang login không cần layout
  },
  {
    path: "/register",
    element: <RegisterPage />, // Trang register không cần layout
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
