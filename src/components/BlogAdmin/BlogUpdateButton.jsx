import React, { useState } from 'react'
import { Button, notification } from 'antd'
import { useUpdateBlogMutation } from '../../features/blog/blogApi'
import BlogForm from './BlogForm'
export default function BlogUpdateButton({ initialValues }) {
  const [isFormVisible, setIsFormVisible] = useState(false)
  const [updateBlog] = useUpdateBlogMutation()

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
        onClick={() => setIsFormVisible(!isFormVisible)}
      >
        Cập nhật
      </Button>
      {isFormVisible && (
        <BlogForm
          handleSubmit={handleSubmit}
          handleCancel={handleCancel}
          initialValues={initialValues}
          style={{ marginTop: '20px', width: '70%' }}
        />
      )}
    </>
  )
}
