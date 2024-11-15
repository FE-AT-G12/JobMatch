import { Avatar } from 'antd'
import CompanyDetailButton from './CompanyDetailButton'

export const collumn = [
  {
    title: 'Số thứ tự',
    dataIndex: 'index',
    width: '10%',
    key: 'id',
  },
  {
    dataIndex: 'logo',
    key: 'logo',
    width: '10%',
    render: (logo) => (
      <Avatar
        src={logo}
        alt='logo'
        style={{ marginLeft: '20px', width: '50px', height: '50px' }}
      />
    ),
  },
  {
    title: 'Tên công ty',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Địa chỉ',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Chi tiết',
    dataIndex: 'detail',
    key: 'detail',
    render: (text, record) => (
      <CompanyDetailButton record={record}>Chi tiết</CompanyDetailButton>
    ),
  },
]
