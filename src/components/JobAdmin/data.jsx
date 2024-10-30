import { ButtonDetail } from './ButtonDetail'

export const collumn = [
  {
    title: 'Số thứ tự',
    dataIndex: 'index',
    key: 'jobId',
  },
  {
    title: 'Tiêu Đề',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Miêu tả',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Trạng thái',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Chi tiết',
    dataIndex: 'detail',
    key: 'detail',
    render: (text, record) => (
      <ButtonDetail record={record}>Chi tiết</ButtonDetail>
    ),
  },
]
