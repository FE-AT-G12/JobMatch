import React from 'react'
import { Form, Input, Select, Button } from 'antd'
import { getCurrentDate } from '../../utils/DateFunction'
export default function JobForm(props) {
  return (
    <div>
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
        rules={[{ required: true, message: 'Please enter the description!' }]}
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
        rules={[{ required: true, message: 'Please enter the category!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label='Location'
        name='location'
        rules={[{ required: true, message: 'Please enter the location!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label='Date Start'
        name='dateStart'
        rules={[
          { required: true, message: 'Please select the start date!' },
          { validator: props.validateDate },
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
          { validator: props.validateDate },
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
        rules={[{ required: true, message: 'Please enter the start time!' }]}
      >
        <Input type='time' />
      </Form.Item>
      <Form.Item
        label='Duration'
        name='duration'
        rules={[{ required: true, message: 'Please enter the duration!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label='Date Posted'
        name='datePosted'
        rules={[{ validator: props.validateDate }]}
      >
        <Input defaultValue={getCurrentDate} type='date' disabled />
      </Form.Item>
      <Form.Item
        label='Payment Rate'
        name={['payment', 'payRate']}
        rules={[{ required: true, message: 'Please enter the payment rate!' }]}
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
        rules={[{ required: true, message: 'Please enter the payment time!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label='Hirer ID'
        name='hirerId'
        rules={[{ required: true, message: 'Please enter the hirer ID!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label='Client ID'
        name='clientId'
        rules={[{ required: true, message: 'Please enter the client ID!' }]}
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
          defaultValue={props.job?.status}
        >
          <Select.Option value={'Đã tuyển'}>Đã tuyển</Select.Option>
          <Select.Option value={'Đang tuyển'}>Đang tuyển</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item>
        <div className='addFormButton'>
          <Button type='primary' danger onClick={props.handleCancel}>
            Hủy
          </Button>
          <Button type='primary' htmlType='submit' loading={props.loading}>
            Cập nhật
          </Button>
        </div>
      </Form.Item>
    </div>
  )
}
