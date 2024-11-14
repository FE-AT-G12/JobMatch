import React, { useState } from 'react'
import { Button, Modal, notification } from 'antd'
import { useCreateBlogMutation } from '../../features/blog/blogApi'
import BlogForm from './BlogForm'
import dayjs from 'dayjs'
const BlogCreateButton = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const user = JSON.parse(localStorage.getItem('user'))
  const [createBlog] = useCreateBlogMutation()
  const initialValues = null
  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const handleSubmit = async (values) => {
    const thumbnails = values.thumbnail.split('\n').map((url) => url.trim())
    const submitValues = {
      ...values,
      datePosted: dayjs().format('YYYY-MM-DD HH:mm:ss'),
      author: user.name,
      thumbnail: thumbnails,
    }
    try {
      await createBlog(submitValues)
      notification.success({
        message: 'Thêm blog thành công!',
        description: 'Blog của bạn đã được thêm thành công.',
        showProgress: true,
      })
    } catch {
      notification.error({
        message: 'Thêm blog thất bại!',
        description: 'Đã xảy ra lỗi khi thêm blog của bạn.',
        showProgress: true,
      })
    }
    setIsModalVisible(false)
  }

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          marginBottom: '20px',
          paddingRight: '20px',
        }}
      >
        <Button
          type='primary'
          onClick={showModal}
          style={{
            height: '40px',
          }}
        >
          Create Blog
        </Button>
      </div>
      <Modal
        title='Create Blog'
        open={isModalVisible}
        width='80%'
        footer={null}
        onCancel={handleCancel}
      >
        <BlogForm
          initialValues={initialValues}
          handleSubmit={handleSubmit}
          handleCancel={handleCancel}
        />
      </Modal>
    </>
  )
}

export default BlogCreateButton
