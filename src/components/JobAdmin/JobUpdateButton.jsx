import React, { useState } from 'react'
import { Button, Modal, notification, Form } from 'antd'
import { useParams } from 'react-router-dom'
import {
  useUpdateJobMutation,
  useGetJobDetailQuery,
} from '../../features/job/jobApi'
import { validateDate, getCurrentDate } from '../../utils/DateFunction'
import { EditOutlined } from '@ant-design/icons'
import JobForm from './JobForm'
export default function JobUpdateButton() {
  const { jobId } = useParams()
  const [loading, setLoading] = useState(false)
  const { data: job, error, isLoading } = useGetJobDetailQuery(jobId)
  const [updateJob] = useUpdateJobMutation()
  const [isModalVisible, setIsModalVisible] = useState(false)

  const handleUpdateClick = () => {
    setIsModalVisible(true)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const handleUpdate = async (values) => {
    setLoading(true)
    try {
      const result = await updateJob({ data: values, id: jobId })
      setIsModalVisible(false)
      if (result.error) {
        notification.error({
          message: 'Cập nhật công việc thất bại!',
          description: 'Đã xảy ra lỗi khi cập nhật công việc.',
          showProgress: true,
        })
      } else {
        notification.success({
          message: 'Cập nhật công việc thành công!',
          description: 'Công việc đã được cập nhật thành công.',
          showProgress: true,
        })
      }
    } catch (error) {
      notification.error({
        message: 'Cập nhật công việc thất bại!',
        description: 'Đã xảy ra lỗi khi cập nhật công việc của bạn.',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <div>
        <Button
          type='primary'
          onClick={handleUpdateClick}
          icon={<EditOutlined />}
        >
          Cập nhật
        </Button>
      </div>
      <div>
        <Modal
          title='Update Job'
          open={isModalVisible}
          onCancel={handleCancel}
          footer={null}
        >
          <Form initialValues={job?.data} onFinish={handleUpdate}>
            <JobForm
              job={job?.data}
              validateDate={validateDate}
              getCurrentDate={getCurrentDate}
              loading={loading}
              handleCancel={handleCancel}
            />
          </Form>
        </Modal>
      </div>
    </div>
  )
}
