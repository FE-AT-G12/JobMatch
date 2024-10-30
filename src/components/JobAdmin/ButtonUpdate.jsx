import React, { useState } from 'react'
import { Button, Modal, notification, Form } from 'antd'
import { useParams } from 'react-router-dom'
import {
  useUpdateJobMutation,
  useGetJobDetailQuery,
} from '../../features/job/jobApi'
import { validateDate, getCurrentDate } from '../../utils/DateFunction'
import JobForm from './JobForm'
export default function ButtonUpdate() {
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
      await updateJob({ data: values, id: jobId })
      setIsModalVisible(false)
      notification.success({
        message: 'Cập nhật công việc thành công!',
        description: 'Công việc của bạn đã được cập nhật thành công.',
      })
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
        <Button type='primary' onClick={handleUpdateClick}>
          Update
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
