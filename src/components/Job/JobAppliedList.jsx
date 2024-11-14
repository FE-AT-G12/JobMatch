import {
  Col,
  Divider,
  Flex,
  Image,
  Result,
  Row,
  Select,
  Space,
  Tag,
  Typography,
} from 'antd'
import React, { useEffect, useState } from 'react'
import EmptyJobList from './EmptyJobList'
import JobCard from './JobCard'
import JobHeaderBanner from './JobHeaderBanner/JobHeaderBanner'
import { calculateTimeSincePosted } from '../../utils/DayFormater'
import { getCityByAddress } from '../../utils/getCity'
import { fallback } from '../../constant'
import { moneyFormatter } from '../../utils/moneyFormatter'
import { Link } from 'react-router-dom'

function JobAppliedList({ jobs, userId }) {
  const [jobStatus, setJobStatus] = useState(undefined)
  const [jobList, setJobList] = useState(jobs)

  useEffect(() => {
    switch (jobStatus) {
      case 'Đang chờ xét duyệt':
        setJobList(jobs.filter((job) => job.clientApplyId.includes(userId)))
        break
      case 'Ứng tuyển thành công':
        setJobList(jobs.filter((job) => job.clientId.includes(userId)))
        break
      default:
        setJobList(jobs)
        break
    }
  }, [jobStatus])
  return (
    <Row style={{ width: '100%' }}>
      <Col span={24}>
        <JobHeaderBanner />
      </Col>
      <Col
        span={12}
        offset={4}
        style={{
          padding: 36,
          border: '1px #024caa',
          borderStyle: 'dotted',
          borderRadius: 8,
          backgroundColor: '#fff',
          marginTop: '-60px',
          // boxShadow: '2px 4px 10px -2px rgba(0,0,0,0.42)'
        }}
      >
        <Flex justify='space-between'>
          <Typography.Title level={3}>
            Quản lý công việc ứng tuyển
          </Typography.Title>
          <Select
            placeholder='Trạng thái'
            style={{ width: '200px' }}
            onSelect={(value) => setJobStatus(value)}
            options={[
              {
                label: 'Tất cả',
                value: null,
              },
              {
                label: 'Đang chờ xét duyệt',
                value: 'Đang chờ xét duyệt',
              },
              {
                label: 'Ứng tuyển thành công',
                value: 'Ứng tuyển thành công',
              },
            ]}
          />
        </Flex>

        {!jobList.length && !jobStatus ? (
          <EmptyJobList />
        ) : jobList.length !== 0 ? (
          jobList.map((job, idx) => (
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
                    <Typography.Text>
                      {job?.clientApplyId?.some((id) => id === userId) && (
                        <Tag color='warning'>Đang chờ xét duyệt</Tag>
                      )}
                      {job?.clientId?.some((id) => id === userId) && (
                        <Tag color='success'>Ứng tuyển thành công</Tag>
                      )}
                    </Typography.Text>
                  </Flex>
                  <Typography.Text style={{ color: '#888', marginBottom: 8 }}>
                    {job.clientApplyId.length === 0
                      ? 'Chưa có ứng viên'
                      : `Đã có ${job.clientApplyId.length} người ứng tuyển`}
                  </Typography.Text>
                  <Typography.Text style={{ color: '#888' }}>
                    <Tag color='lime'>
                      Từ {moneyFormatter(job.payment.payRate)}
                    </Tag>
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
          ))
        ) : (
          <Result
            status='404'
            title='Không tìm thấy tin tuyển dụng'
            subTitle={`Không có tin tuyển dụng nào với trạng thái ${jobStatus}`}
          />
        )}
      </Col>
    </Row>
  )
}

export default JobAppliedList
