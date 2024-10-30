import UserTest from "../page/User/UserTest";
import LoginPage from "../page/login";
import RegisterPage from "../page/register";
import Layout from "../components/layout";
import HomePage from "../page/home";
import Job from "../page/Job/Job";
import Company from "../page/company";
const routes = [
  {
    layout: Layout,
    data: [
      {
        path: "/",
        isIndex: true,
        component: HomePage,
      },
      {
        path: "/login",
        component: LoginPage,
      },
      {
        path: "/register",
        component: RegisterPage,
      },
      {
        path: "/user",
        component: UserTest,
      },
      {
        path: "/job",
        component: Job,
      },
      {
        path: "/company",
        component: Company,
      },
    ],
  },
];

export default routes;
