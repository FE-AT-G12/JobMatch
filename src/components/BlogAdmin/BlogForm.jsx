import React from 'react'
import { Form, Input, Button, DatePicker, Upload } from 'antd'
import dayjs from 'dayjs'
export default function BlogForm(props) {
  return (
    <>
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
      </ Form.Item>
      <Form.Item
        name="thumbnail"
        rules={[{ required: true, message: 'Please enter image URLs' }]}
      >
        <Input.TextArea
          placeholder="Enter image URLs, separated by enter"
          autoSize={{ minRows: 3, maxRows: 6 }}
        />
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
    </>
  )
}
