import React, { useState } from 'react'
import { Button, Popconfirm, notification } from 'antd'
import { useNavigate, useParams } from 'react-router-dom'
import { useDeleteJobMutation } from '../../features/job/jobApi'
import { DeleteOutlined } from '@ant-design/icons'
export default function JobDeleteButton() {
  const nav = useNavigate()
  const jobId = useParams()
  const [loading, setLoading] = useState(false)
  const [deleteJob] = useDeleteJobMutation()
  const confirm = async (values) => {
    setLoading(true)
    try {
      const result = await deleteJob(values.jobId)
      if (result.error) {
        notification.error({
          message: 'Xóa công việc thất bại!',
          description: 'Đã xảy ra lỗi khi xóa công việc.',
          showProgress: true,
        })
      } else {
        notification.success({
          message: 'Xóa công việc thành công!',
          description: 'Công việc đã được xóa thành công.',
          showProgress: true,
        })
      }
    } catch (error) {
      notification.error({
        message: 'Xóa công việc thất bại!',
        description: 'Đã xảy ra lỗi khi xóa công việc.',
        showProgress: true,
      })
    } finally {
      nav('/jobAdmin')
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
      title='Xác nhận xóa công việc này này?'
      description='Công việc này sẽ bị xóa vĩnh viễn.'
      onConfirm={() => confirm(jobId)}
      onCancel={cancel}
      okText='Đồng ý'
      cancelText='Hủy'
      loading={loading}
    >
      <Button variant='outlined' size='large' danger icon={<DeleteOutlined />}>
        Xóa
      </Button>
    </Popconfirm>
  )
}
