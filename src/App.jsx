import { RouterProvider, createBrowserRouter } from "react-router-dom";

import LoginPage from "./page/login";
import RegisterPage from "./page/register";
import Layout from "./components/layout";
import HomePage from "./page/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, 
    children: [
      {
        path: "/",
        element: <HomePage/>, 
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />, 
  },
  {
    path: "/register",
    element: <RegisterPage />, 
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
