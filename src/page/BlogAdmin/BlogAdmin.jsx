import React from 'react'
import BlogAdminTable from '../../components/BlogAdmin/BlogAdminTable'

export default function BlogAdmin() {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <h1>Blog Admin</h1>
      </div>
      <BlogAdminTable />
    </div>
  )
}
