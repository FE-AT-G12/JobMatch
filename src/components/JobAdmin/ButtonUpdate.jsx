import React, { useState } from 'react'
import {
  Button,
  Modal,
  notification,
  Form,
  Input,
  Select,
  DatePicker,
} from 'antd'
import { useParams } from 'react-router-dom'
import {
  useUpdateJobMutation,
  useGetJobDetailQuery,
} from '../../features/job/jobApi'

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

  const validateDate = (_, value) => {
    if (value && isNaN(new Date(value).getTime())) {
      return Promise.reject(new Error('Invalid date format!'))
    }
    return Promise.resolve()
  }

  // Get the current date in yyyy-mm-dd format
  const getCurrentDate = () => {
    const today = new Date()
    const year = today.getFullYear()
    const month = String(today.getMonth() + 1).padStart(2, '0')
    const day = String(today.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
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
          <Form initialValues={job} onFinish={handleUpdate}>
            <Form.Item
              label='Title'
              name='title'
              rules={[{ required: true, message: 'Please enter the title!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label='Description'
              name='description'
              rules={[
                { required: true, message: 'Please enter the description!' },
              ]}
            >
              <Input.TextArea />
            </Form.Item>
            <Form.Item
              label='Skill Requirement'
              name='skillRequirement'
              rules={[
                {
                  required: true,
                  message: 'Please enter the skill requirements!',
                },
              ]}
            >
              <Select mode='tags' />
            </Form.Item>
            <Form.Item label='Age Requirement' name='ageRequirement'>
              <Input.Group compact>
                <Form.Item
                  name={['ageRequirement', 'min']}
                  noStyle
                  rules={[
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (
                          !value ||
                          value < getFieldValue(['ageRequirement', 'max'])
                        ) {
                          return Promise.resolve()
                        }
                        return Promise.reject(
                          new Error('Min age must be less than max age!')
                        )
                      },
                    }),
                  ]}
                >
                  <Input style={{ width: '50%' }} placeholder='Min Age' />
                </Form.Item>
                <Form.Item
                  name={['ageRequirement', 'max']}
                  noStyle
                  rules={[
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (
                          !value ||
                          value > getFieldValue(['ageRequirement', 'min'])
                        ) {
                          return Promise.resolve()
                        }
                        return Promise.reject(
                          new Error('Max age must be greater than min age!')
                        )
                      },
                    }),
                  ]}
                >
                  <Input style={{ width: '50%' }} placeholder='Max Age' />
                </Form.Item>
              </Input.Group>
            </Form.Item>
            <Form.Item
              label='Category'
              name='category'
              rules={[
                { required: true, message: 'Please enter the category!' },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label='Location'
              name='location'
              rules={[
                { required: true, message: 'Please enter the location!' },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label='Date Start'
              name='dateStart'
              rules={[
                { required: true, message: 'Please select the start date!' },
                { validator: validateDate },
              ]}
            >
              <Input type='date' />
            </Form.Item>
            <Form.Item
              label='Date End'
              name='dateEnd'
              dependencies={['dateStart']}
              rules={[
                { required: true, message: 'Please select the end date!' },
                { validator: validateDate },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('dateStart') < value) {
                      return Promise.resolve()
                    }
                    return Promise.reject(
                      new Error('End date must be after start date!')
                    )
                  },
                }),
              ]}
            >
              <Input type='date' />
            </Form.Item>
            <Form.Item
              label='Time Start'
              name='timeStart'
              rules={[
                { required: true, message: 'Please enter the start time!' },
              ]}
            >
              <Input type='time' />
            </Form.Item>
            <Form.Item
              label='Duration'
              name='duration'
              rules={[
                { required: true, message: 'Please enter the duration!' },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label='Date Posted'
              name='datePosted'
              rules={[
                { required: true, message: 'Please select the posted date!' },
                { validator: validateDate },
              ]}
            >
              <Input type='date' disabled />
            </Form.Item>
            <Form.Item
              label='Payment Rate'
              name={['payment', 'payRate']}
              rules={[
                { required: true, message: 'Please enter the payment rate!' },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label='Payment Method'
              name={['payment', 'paymentMethod']}
              rules={[
                { required: true, message: 'Please enter the payment method!' },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label='Payment Time'
              name={['payment', 'payTime']}
              rules={[
                { required: true, message: 'Please enter the payment time!' },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label='Hirer ID'
              name='hirerId'
              rules={[
                { required: true, message: 'Please enter the hirer ID!' },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label='Client ID'
              name='clientId'
              rules={[
                { required: true, message: 'Please enter the client ID!' },
              ]}
            >
              <Select mode='tags' />
            </Form.Item>
            <Form.Item
              label='Status'
              name='status'
              rules={[{ required: true, message: 'Please enter the status!' }]}
            >
              <Select
                style={{ width: '100%' }}
                placeholder='Select status'
                defaultValue={job?.status}
              >
                <Select.Option value={'Đã tuyển'}>Đã tuyển</Select.Option>
                <Select.Option value={'Đang tuyển'}>Đang tuyển</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item>
              <div className='addFormButton'>
                <Button type='primary' danger onClick={handleCancel}>
                  Hủy
                </Button>
                <Button type='primary' htmlType='submit' loading={loading}>
                  Cập nhật
                </Button>
              </div>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </div>
  )
}
