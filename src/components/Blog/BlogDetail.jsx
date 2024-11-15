import { Card, Collapse, Divider, Spin } from 'antd'
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGetBlogDetailQuery } from '../../features/blog/blogApi'
export default function BlogDetail() {
  const { id } = useParams()
  const { data: blog = [], error, isLoading } = useGetBlogDetailQuery(id)
  if (isLoading) return <Spin />
  return (
    <div>
      {error && <div>Error: {error.message}</div>}
      {blog && (
        <div>
          <h1>{blog.title}</h1>
          <img src={blog.thumbnail} style={{ width: '100%' }} />
          <Divider />
          <div dangerouslySetInnerHTML={{ __html: blog.content }} />
        </div>
      )}
    </div>
  )
}
