import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetBlogDetailQuery } from '../../features/blog/blogApi'
import { Spin } from 'antd'
export default function BlogAdminDetail() {
  const { blogId } = useParams()
  const { data, error, isLoading } = useGetBlogDetailQuery(blogId)

  if (isLoading || !data) return <Spin tip='Loading...' />
  if (error) return <div>Error: {error.message}</div>

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.thumbnail}</p>
    </div>
  )
}
