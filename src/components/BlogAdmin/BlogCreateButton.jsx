import React, { useState } from 'react'
import { Button, Modal, Form } from 'antd'
import BlogForm from './BlogForm'
import dayjs from 'dayjs'
const BlogCreateButton = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const user = JSON.parse(localStorage.getItem('user'))

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleOk = () => {
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const handleSubmit = (values) => {
    const thumbnails = values.thumbnail.split('\n').map(url => url.trim())
    const submitValues = {
      ...values,
      datePosted: dayjs().format('YYYY-MM-DD HH:mm:ss'),
      author: user.name,
      thumbnail: thumbnails,
    }
    console.log(submitValues)
  }

  return (
    <>
      <Button type='primary' onClick={showModal}>
        Create Blog
      </Button>
      <Modal
        title='Create Blog'
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form onFinish={handleSubmit}>
          <BlogForm />
        </Form>
      </Modal>
    </>
  )
}

export default BlogCreateButton
