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
import SimpleLayout from '../components/layout/SimpleLayout'
import JobPostedListPage from '../page/Job/JobPostedListPage'
import JobUpdateForm from '../components/Job/JobUpdateForm'
import JobUpdatePage from '../page/Job/JobUpdatePage'

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
        role: ['client', 'hirer']
      },
      {
        path: '/job',
        component: Job,
      },
      {
        path: '/job/:id',
        component: JobUpdatePage,
      },
      {
        path: '/job/post',
        component: JobPost,
        role: ['hirer']
      },
      {
        path: '/job/my-posted-job',
        component: JobPostedListPage,
        role: ['hirer']
      },
      {
        path: '/admin',
        component: adminAccount,
        role: ['admin']
      },
      {
        path: '/jobAdmin',
        component: JobAdmin,
        role: ['admin']
      },
      {
        path: '/jobAdmin/:jobId',
        component: JobAdminDetail,
        role: ['admin']
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
