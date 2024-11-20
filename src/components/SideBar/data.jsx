import { CommentOutlined, HomeOutlined, ProjectOutlined, UserOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

export const dataItems = [
  {
    key: '1',
    icon: <HomeOutlined />,
    label: <Link to='/'>Home</Link>,
  },
  {
    key: '2',
    icon: <UserOutlined />,
    label: <Link to='/admin/account'>Tài Khoản</Link>,
  },
  {
    key: '3',
    icon: <ProjectOutlined />,
    label: <Link to='/admin/job'>Công Việc</Link>,
  },
  {
    key: '4',
    icon: <CommentOutlined />,
    label: <Link to='/admin/blog'>Blog</Link>,
  },
]
