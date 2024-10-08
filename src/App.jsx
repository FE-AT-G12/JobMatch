
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import Layout from "./components/layout";
// import HomePage from "./page/home";
import LoginPage from "./page/login";


const router = createBrowserRouter([
  {
    path: "/",
    // element: <Layout/>,
    children: [
      {
        path: "/",
      }
    ]
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;