import React, { useState } from 'react'
import { Button, Modal, notification, Form } from 'antd'
import { useCreateJobMutation } from '../../features/job/jobApi'
import { validateDate, getCurrentDate } from '../../utils/DateFunction'
import JobForm from './JobForm'
export default function JobAddButton() {
  const [loading, setLoading] = useState(false)
  const [createJob] = useCreateJobMutation()
  const [isModalVisible, setIsModalVisible] = useState(false)

  const handleCreateClick = () => {
    setIsModalVisible(true)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const handleCreate = async (values) => {
    setLoading(true)
    try {
      await createJob({ data: values })
      setIsModalVisible(false)
      notification.success({
        message: 'Tạo mới công việc thành công!',
        description: 'Công việc của bạn đã được Tạo mới thành công.',
      })
    } catch (error) {
      notification.error({
        message: 'Tạo mới công việc thất bại!',
        description: 'Đã xảy ra lỗi khi Tạo mới công việc của bạn.',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <div>
        <Button type='primary' onClick={handleCreateClick}>
          Tạo mới
        </Button>
      </div>
      <div>
        <Modal
          title='Update Job'
          open={isModalVisible}
          onCancel={handleCancel}
          footer={null}
        >
          <Form onFinish={handleCreate}>
            <JobForm
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
