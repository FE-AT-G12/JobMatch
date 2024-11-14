import React, { useState, useRef } from 'react'
import { Form, Input, Button } from 'antd'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import './BlogForm.css'
export default function BlogForm({
  handleCancel,
  handleSubmit,
  initialValues,
}) {
  const [form] = Form.useForm()
  const [quillValue, setQuillValue] = useState(initialValues?.content || '')
  const reactQuillRef = useRef(null)

  const onCancel = () => {
    form.resetFields()
    handleCancel()
  }

  return (
    <Form form={form} initialValues={initialValues} onFinish={handleSubmit}>
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
              const urls = value.split('\n').map((url) => url.trim())
              const urlPattern =
                /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/
              for (let url of urls) {
                if (!urlPattern.test(url)) {
                  return Promise.reject(
                    new Error('Hãy nhập link hình ảnh hợp lệ')
                  )
                }
              }
              return Promise.resolve()
            },
          },
        ]}
        className='form-item'
      >
        <Input.TextArea placeholder='Nhập link hình ảnh, mỗi link một dòng' />
      </Form.Item>
      <Form.Item
        label='Nội dung'
        name='content'
        rules={[{ required: true, message: 'Hãy nhập nội dung' }]}
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
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '20px',
          }}
        >
          <Button type='primary' danger onClick={onCancel} size='large'>
            Hủy
          </Button>
          <Button
            type='primary'
            htmlType='submit'
            size='large'
          >
            Cập nhật
          </Button>
        </div>
      </Form.Item>
    </Form>
  )
}
