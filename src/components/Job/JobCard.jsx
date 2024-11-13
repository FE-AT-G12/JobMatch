import React from 'react'
import {
  Card,
  Tag,
  Button,
  Space,
  Typography,
  Flex,
  Image,
  Divider,
} from 'antd'
import { fallback } from '../../constant'
import { calculateTimeSincePosted } from '../../utils/DayFormater'
import { Link } from 'react-router-dom'

const JobCard = ({ job, idx }) => {
  console.log({ job })

  if (!job) return 'hehe'
  const jobStatus = (status) => {
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
  return (
    <Flex
      gap='small'
      align='center'
      style={{
        backgroundColor: '#e6f7ff',
        borderRadius: '8px',
        padding: 26,
        width: '100%',
        marginTop: idx === 0 ? 8 : 24,
      }}
      wrap={true}
    >
      <Image src='' fallback={fallback} width={100} />
      <Divider type='vertical' />
      <Flex vertical style={{ flexGrow: 1 }}>
        <Flex vertical>
          <Flex justify='space-between'>
            <Typography.Title level={4}>{job.title}</Typography.Title>
            {jobStatus(job.status)}
          </Flex>
          <Typography.Text style={{ color: '#888' }}>
            CÔNG TY TNHH SẢN XUẤT VÀ THƯƠNG MẠI BAO BÌ EBS VIỆT NAM
          </Typography.Text>
        </Flex>
        <Flex gap={8} justify='space-between' wrap>
          <Space wrap>
            <Tag
              color='#108ee9
'
            >
              {job.cityAddress}
            </Tag>
            <Tag color='#2db7f5'>{job.category}</Tag>
            <Tag color='#87d068'>
              Đã đăng {calculateTimeSincePosted(job.datePosted)}
            </Tag>
          </Space>
          <Link to={`/job/${job.id}`}>
            <button
              style={{
                width: 150,
                padding: '10px 0',
                backgroundColor: '#024caa',
                color: '#fff',
                textAlign: 'center',
                borderRadius: 10,
                fontSize: 16,
                fontWeight: 500,
                alignSelf: 'end',
              }}
            >
              Xem chi tiết
            </button>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default JobCard
