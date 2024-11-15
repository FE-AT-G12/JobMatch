import { useState } from 'react'
import { useDeleteBlogMutation } from '../../features/blog/blogApi'
import { Popconfirm, Button, notification } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
export default function DeleteButton({ blogID }) {
  const [deleteBlog] = useDeleteBlogMutation()
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const confirm = async (values) => {
    console.log(values)
    setLoading(true)
    try {
      await deleteBlog(values)
      notification.success({
        message: 'Xóa blog thành công!',
        description: 'Blog của bạn đã được Xóa thành công.',
        showProgress: true,
      })
      navigate('/admin/blog')
    } catch {
      notification.error({
        message: 'Xóa blog thất bại!',
        description: 'Đã xảy ra lỗi khi Xóa blog của bạn.',
        showProgress: true,
      })
    } finally {
      setLoading(false)
    }
  }

  const cancel = () => {
    notification.error({
      message: 'Xóa blog không thành công!',
      description: 'Bạn đã hủy xóa blog của mình.',
      showProgress: true,
    })
  }

  return (
    <Popconfirm
      title='Xác nhận xóa blog này?'
      description='Blog của bạn sẽ bị xóa vĩnh viễn.'
      onConfirm={() => confirm(blogID)}
      onCancel={cancel}
      okText='Đồng ý'
      cancelText='Hủy'
      loading={loading}
    >
      <Button size='large' type='primary' danger icon={<DeleteOutlined />}>
        Xóa
      </Button>
    </Popconfirm>
  )
}
