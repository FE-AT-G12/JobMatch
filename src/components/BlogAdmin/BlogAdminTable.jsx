import React from 'react'
import { useGetBlogListQuery } from '../../features/blog/blogApi'
import { Spin, Table } from 'antd'
import { collumn } from './data'
export default function BlogAdminTable() {
  const { data, error, isLoading } = useGetBlogListQuery()
  const dataWithIndex = data?.map((blog, index) => ({
    id: blog.id,
    ...blog,
    index: index + 1,
  }))

  if (isLoading) return <Spin tip='Loading...' />

  if (error) return <div>Error: {error.message}</div>

  return (
    <div>
      <Table dataSource={dataWithIndex || []} columns={collumn} />
    </div>
  )
}
