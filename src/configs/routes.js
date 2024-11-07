import LoginPage from '../page/login'
import adminAccount from '../page/adminAccount/adminAccount'
import RegisterPage from '../page/register'
import Job from '../page/Job/Job'
import UserTest from '../page/User/UserTest'
import MainLayout from '../components/layout/MainLayout'
import JobAdmin from '../page/JobAdmin/JobAdmin'
import JobAdminDetail from '../page/JobAdmin/JobAdminDetail'

import HomePage from '../page/home/Home'
import Company from '../page/company/Company'

import Profile from '../page/User/Profile'
import JobPost from '../page/Job/JobPost'
import { Outlet } from 'react-router-dom'
import SimpleLayout from '../components/layout/SimpleLayout'

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
        path: '/company',
        component: Company,
      },
      {
        path: '/user',
        component: UserTest,
      },
      {
        path: '/profile/:id',
        component: Profile,
      },
      {
        path: '/job',
        component: Job,
      },
      {
        path: '/job/post',
        component: JobPost,
      },
      {
        path: '/admin',
        component: adminAccount,
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
  {
    layout: SimpleLayout,
    data: [
      {
        path: '/login',
        component: LoginPage,
      },
      {
        path: '/register',
        component: RegisterPage,
      },
    ]
  }
]

export default routes
