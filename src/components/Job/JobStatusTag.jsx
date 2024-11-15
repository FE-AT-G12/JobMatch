import { Tag } from 'antd'
import React from 'react'

function JobStatusTag({ status }) {
  switch (status) {
    case 'Đã tuyển':
      return (
        <div>
          <Tag color='success'>{status}</Tag>
        </div>
      )
    case 'Đang tuyển':
      return (
        <div>
          <Tag color='warning'>{status}</Tag>
        </div>
      )
    case 'Đã hủy':
      return (
        <div>
          <Tag color='error'>{status}</Tag>
        </div>
      )
    default:
      break
  }
}

export default JobStatusTag
