import React, { useState, useRef, useEffect } from 'react'
import { Form, Input, Button } from 'antd'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import './BlogForm.css'

export default function BlogForm({
  handleCancel,
  handleSubmit,
  initialValues,
  style,
}) {
  const [form] = Form.useForm()
  const [quillValue, setQuillValue] = useState(initialValues?.content || '')
  const reactQuillRef = useRef(null)

  useEffect(() => {
    form.resetFields()
    setQuillValue(initialValues?.content || '')
  }, [initialValues, form])

  const onCancel = () => {
    form.resetFields()
    handleCancel()
  }

  return (
    <Form
      form={form}
      initialValues={initialValues}
      onFinish={handleSubmit}
      style={style}
    >
      <Form.Item
        label='Tiêu đề'
        name='title'
        rules={[{ required: true, message: 'Hãy nhập tiêu đề!' }]}
        className='form-item'
      >
        <Input />
      </Form.Item>
      <Form.Item
        label='Miêu tả'
        name='description'
        rules={[{ required: true, message: 'Hãy nhập mô tả!' }]}
        className='form-item'
      >
        <Input.TextArea />
      </Form.Item>
      <Form.Item
        label='Danh mục'
        name='category'
        rules={[{ required: true, message: 'Hãy nhập danh mục!' }]}
        className='form-item'
      >
        <Input.TextArea />
      </Form.Item>
      <Form.Item
        label='Link hình ảnh'
        name='thumbnail'
        rules={[
          { required: true, message: 'Hãy nhập link hình ảnh' },
          {
            validator: (_, value) => {
              if (!value) {
                return Promise.resolve()
              }
              const urlPattern = /(https?:\/\/[^\s]+)/g
              if (!urlPattern.test(value.trim())) {
                return Promise.reject(
                  new Error('Hãy nhập link hình ảnh hợp lệ')
                )
              }
              return Promise.resolve()
            },
          },
        ]}
        className='form-item'
      >
        <Input placeholder='Nhập link hình ảnh' />
      </Form.Item>
      <Form.Item
        label='Nội dung'
        name='content'
        rules={[{ required: true, message: 'Hãy nhập nội dung!' }]}
        className='form-item'
      >
        <ReactQuill
          style={{
            height: '300px',
            marginBottom: '40px',
          }}
          ref={reactQuillRef}
          theme='snow'
          placeholder='Nhập nội dung'
          modules={{
            toolbar: {
              container: [
                [{ header: '1' }, { header: '2' }, { font: [] }],
                [{ size: [] }],
                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                [
                  { list: 'ordered' },
                  { list: 'bullet' },
                  { indent: '-1' },
                  { indent: '+1' },
                ],
                ['link'],
                ['clean'],
              ],
            },
            clipboard: {
              matchVisual: false,
            },
          }}
          formats={[
            'header',
            'font',
            'size',
            'bold',
            'italic',
            'underline',
            'strike',
            'blockquote',
            'list',
            'bullet',
            'indent',
            'link',
          ]}
          value={quillValue}
          onChange={setQuillValue}
        />
      </Form.Item>
      <Form.Item>
        <div className='addFormButton'>
          <Button type='primary' danger onClick={onCancel}>
            Hủy
          </Button>
          <Button type='primary' htmlType='submit'>
            Cập nhật
          </Button>
        </div>
      </Form.Item>
    </Form>
  )
}
