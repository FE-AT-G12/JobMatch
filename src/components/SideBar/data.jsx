import { BarChartOutlined, UserOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

export const dataItems = [
  {
    key: '1',
    icon: <UserOutlined />,
    label: <Link to='/admin'>Admin</Link>,
  },
  {
    key: '2',
    icon: <BarChartOutlined />,
    label: <Link to='/admin/account'>Account</Link>,
  },
  {
    key: '3',
    icon: <BarChartOutlined />,
    label: <Link to='/admin/job'>Job</Link>,
  },
  {
    key: '4',
    icon: <BarChartOutlined />,
    label: <Link to='/admin/blog'>Blog</Link>,
  },
]
