import UserTest from '../page/User/UserTest';
import LoginPage from '../page/login';
import RegisterPage from '../page/register';
import MainLayout from '../components/layout/MainLayout';
import HomePage from '../page/home';
import Job from '../page/Job/Job';
import JobAdmin from '../page/JobAdmin/JobAdmin';
import JobAdminDetail from '../page/JobAdmin/JobAdminDetail';
import UserTest from "../page/User/UserTest";
import LoginPage from "../page/login";
import RegisterPage from "../page/register";
import Layout from "../components/layout";
import HomePage from "../page/home";
import Job from "../page/Job/Job";
import Profile from "../page/User/Profile";
const routes = [
  {
    layout: MainLayout,
    data: [
      {
        path: '/',
        isIndex: true,
        component: HomePage,
      },
      {
        path: '/login',
        component: LoginPage,
      },
      {
        path: '/register',
        component: RegisterPage,
      },
      {
        path: '/user',
        component: UserTest,
      },
      {
        path: '/job',
        component: Job,
      },
      {
        path: '/jobAdmin',
        component: JobAdmin,
      },
      {
        path: '/jobAdmin/:jobId',
        component: JobAdminDetail,
      },
    ],
  },
];

export default routes;
