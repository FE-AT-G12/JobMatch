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
  Badge,
} from 'antd'
import { fallback } from '../../constant'
import { calculateTimeSincePosted } from '../../utils/DayFormater'
import { Link, useLocation } from 'react-router-dom'
import { getCityByAddress } from '../../utils/getCity'
import { useSelector } from 'react-redux'
import { selectUser } from '../../redux/features/userSlice'
import { moneyFormatter } from '../../utils/moneyFormatter'
import { DollarOutlined } from '@ant-design/icons'
import JobStatusTag from './JobStatusTag'
const JobCard = ({ job, idx }) => {
  const pathName = useLocation().pathname
  const user = useSelector(selectUser)

  if (!job) return 'hehe'

  return (
    <div style={{ position: 'relative' }}>
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
              <Typography.Title style={{ marginBottom: 2 }} level={4}>
                {job.title}
              </Typography.Title>
              <JobStatusTag status={job.status} />
            </Flex>
            <Typography.Text style={{ color: '#888', marginBottom: 8 }}>
              {job.clientApplyId.length === 0
                ? 'Chưa có ứng viên'
                : `Đã có ${job.clientApplyId.length} người ứng tuyển`}
            </Typography.Text>
            <Typography.Text style={{ color: '#888' }}>
              {Boolean(user) ? (
                <>
                  {' '}
                  <Tag color='lime'>
                    Từ {moneyFormatter(job.payment.payRate)}
                  </Tag>
                </>
              ) : (
                <>
                  <Link to={'/login'}>
                    <DollarOutlined /> Đăng nhập để xem mức lương
                  </Link>
                </>
              )}
            </Typography.Text>
          </Flex>
          <Flex gap={8} justify='space-between' wrap>
            <Space wrap>
              <Tag color='#108ee9'>{getCityByAddress(job.location)}</Tag>
              <Tag color='#2db7f5'>{job.category}</Tag>
              <Tag color='#87d068'>
                Đã đăng {calculateTimeSincePosted(job.datePosted)}
              </Tag>
            </Space>
            {user?.role === 'hirer' && (
              <Link to={`/job/my-posted-job/${job.id}/candidate-list`}>
                <Button
                  variant='filled'
                  type='default'
                  style={{ height: '100%' }}
                >
                  Danh sách ứng viên
                </Button>
              </Link>
            )}  
            <Link
              to={
                pathName.includes('my-posted-job')
                  ? `/job/my-posted-job/${job.id}`
                  : `/job/${job.id}`
              }
            >
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
                {pathName.includes('my-posted-job')
                  ? `Chỉnh sửa`
                  : `Xem chi tiết`}
              </button>
            </Link>
          </Flex>
        </Flex>
      </Flex>
      {job.clientApplyId.length !== 0 &&
        user?.role === 'hirer' &&
        pathName === '/job/my-posted-job' && (
          <Flex
            align='center'
            justify='center'
            style={{
              position: 'absolute',
              top: -10,
              right: -10,
              padding: 8,
              borderRadius: '100%',
              backgroundColor: 'red',
              width: 24,
              height: 24,
              textAlign: 'center',
              fontSize: 11,
              color: '#fff',
            }}
          >
            {job.clientApplyId.length}
          </Flex>
        )}
    </div>
  )
}

export default JobCard
