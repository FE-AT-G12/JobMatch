import LoginPage from '../page/login'
import adminAccount from '../page/adminAccount/adminAccount'
import RegisterPage from '../page/register'
import UserTest from '../page/User/UserTest'
import MainLayout from '../components/layout/MainLayout'
import JobAdmin from '../page/JobAdmin/JobAdmin'
import JobAdminDetail from '../page/JobAdmin/JobAdminDetail'
import AdminLayout from '../components/layout/AdminLayout'
import Admin from '../components/Admin/Admin'
import HomePage from '../page/home/Home'
import Company from '../page/company/Company'
import BlogAdmin from '../page/BlogAdmin/BlogAdmin'
import Profile from '../page/User/Profile'
import JobPost from '../page/Job/JobPost'
import SimpleLayout from '../components/layout/SimpleLayout'

import CompanyDetail from '../page/Company/CompanyDetail'
import BlogUser from '../page/BlogUser/BlogUser'
import BlogUserDetail from '../page/BlogUser/BlogUserDetail'

import JobPostedListPage from '../page/Job/JobPostedListPage'

import JobUpdatePage from '../page/Job/JobUpdatePage'
import BlogAdminDetail from '../page/BlogAdmin/BlogAdminDetail'
import JobBrowsePage from '../page/Job/JobBrowsePage'
import JobDetailClient from '../page/Job/JobDetailClient'

import CompanyAdmin from '../page/CompanyAdmin/CompanyAdmin'
import CompanyAdDetail from '../page/CompanyAdmin/CompanyAdDetail'
import CompanyAdd from '../components/CompanyAdmin/CompanyAdd'

import JobAppliedListPage from '../page/Job/JobAppliedListPage'
import JobCandidateListPage from '../page/Job/JobCandidateListPage'


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
        path: '/companyDetail/:id',
        component: CompanyDetail,
      },
      {
        path: '/blog',
        component: BlogUser,
      },
      {
        path: '/blog/:id',
        component: BlogUserDetail,
      },
      {
        path: '/user',
        component: UserTest,
      },
      {
        path: '/profile/:id',
        component: Profile,
        role: ['client', 'hirer'],
      },
      {
        path: '/job',
        component: JobBrowsePage,
      },
      {
        path: '/job/:id',
        component: JobDetailClient,
      },
      {
        path: '/job/my-posted-job/:id',
        component: JobUpdatePage,
        role: ['hirer']
      },
      {
        path: '/job/my-posted-job/:id/candidate-list',
        component: JobCandidateListPage,
        role: ['hirer']
      },
      {
        path: '/job/post',
        component: JobPost,
        role: ['hirer'],
      },
      {
        path: '/job/my-posted-job',
        component: JobPostedListPage,
        role: ['hirer'],
      },
      {
        path: '/job/my-applied-job',
        component: JobAppliedListPage,
        role: ['client'],
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
    ],
  },

  {
    layout: AdminLayout,
    data: [
      {
        path: '/admin',
        component: Admin,
        role: ['admin'],
      },
      {
        path: '/admin/account',
        component: adminAccount,
        role: ['admin'],
      },
      {
        path: '/admin/job',
        component: JobAdmin,
        role: ['admin'],
      },
      {
        path: '/admin/job/:jobId',
        component: JobAdminDetail,
        role: ['admin'],
      },
      {
        path: '/admin/company',
        component: CompanyAdmin,
        role: ['admin'],
      },
      {
        path: '/admin/companyadd',
        component: CompanyAdd,
        role: ['admin'],
      },
      {
        path: '/admin/company/:id',
        component: CompanyAdDetail,
        role: ['admin'],
      },
      {
        path: '/admin/blog',
        component: BlogAdmin,
        role: ['admin'],
      },
      {
        path: '/admin/blog/:blogId',
        component: BlogAdminDetail,
        role: ['admin'],
      },
    ],
  },
]

export default routes
