import { Button } from 'antd'
import { Link } from 'react-router-dom'
import { BlogDetailButton } from './BlogDetailButton'
export const collumn = [
  {
    title: 'Số thứ tự',
    dataIndex: 'index',
    key: 'index',
  },
  {
    title: 'Tiêu đề',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Mô tả',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Image',
    dataIndex: 'thumbnail',
    key: 'image',
    render: (thumbnail) => (
      <img src={thumbnail[0]} alt='thumbnail' style={{ width: '50px' }} />
    ),
  },
  {
    title: 'Author',
    dataIndex: 'author',
    key: 'author',
  },
  {
    title: 'Date posted',
    dataIndex: 'datePosted',
    key: 'date',
  },
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
    render: (text, record) => (
      <BlogDetailButton record={record}>Chi tiết</BlogDetailButton>
    ),
  },
]
