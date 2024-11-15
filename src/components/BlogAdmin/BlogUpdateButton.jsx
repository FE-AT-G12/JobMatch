import React, { useState } from 'react'
import { Button, notification } from 'antd'
import { useUpdateBlogMutation } from '../../features/blog/blogApi'
import { EditFilled } from '@ant-design/icons'
import BlogForm from './BlogForm'
export default function BlogUpdateButton({ initialValues }) {
  const [isFormVisible, setIsFormVisible] = useState(false)
  const [updateBlog] = useUpdateBlogMutation()

  const smoothScrollToBottom = () => {
    const targetPosition = document.body.scrollHeight
    const startPosition = window.scrollY
    const distance = targetPosition - startPosition
    const duration = 500
    let start = null

    window.requestAnimationFrame(function step(timestamp) {
      if (!start) start = timestamp
      const progress = timestamp - start
      const percent = Math.min(progress / duration, 1)
      window.scrollTo(0, startPosition + distance * percent)
      if (progress < duration) {
        window.requestAnimationFrame(step)
      }
    })
  }

  const handleSubmit = async (values) => {
    const { id, ...submitValues } = {
      ...values,
      author: initialValues.author,
      datePosted: initialValues.datePosted,
    }
    try {
      const { data } = await updateBlog({
        id: initialValues.id,
        data: submitValues,
      })
      setIsFormVisible(false)
      notification.success({
        message: 'Cập nhật bài viết thành công',
        description: `Bài viết ${data.title} đã được cập nhật`,
      })
    } catch (error) {
      notification.error({
        message: 'Cập nhật bài viết thất bại',
        description: 'Đã có lỗi xảy ra, vui lòng thử lại sau',
      })
    }
  }

  const handleCancel = () => {
    setIsFormVisible(false)
  }

  return (
    <>
      <Button
        type='primary'
        style={{ marginRight: '10px' }}
        onClick={() => {
          setIsFormVisible(!isFormVisible)
          smoothScrollToBottom()
        }}
        icon={<EditFilled />}
        size='large'
      >
        Cập nhật
      </Button>
      {isFormVisible && (
        <BlogForm
          handleSubmit={handleSubmit}
          handleCancel={handleCancel}
          initialValues={initialValues}
          type={'update'}
          style={{ marginTop: '20px', width: '70%' }}
        />
      )}
    </>
  )
}
