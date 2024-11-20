import React from 'react'
import BlogAdminTable from '../../components/BlogAdmin/BlogAdminTable'
import BlogCreateButton from '../../components/BlogAdmin/BlogCreateButton'
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
      <div>
        <BlogCreateButton />
      </div>
      <div>
        <BlogAdminTable />
      </div>
    </div>
  )
}
