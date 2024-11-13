import { Button, Col, Flex, Image, Result, Row, Select, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import EmptyJobList from './EmptyJobList'
import JobCard from './JobCard'

function JobPostedList({ jobs }) {
  const [jobStatus, setJobStatus] = useState(undefined)
  const [jobList, setJobList] = useState(jobs)

  useEffect(() => {
    jobStatus
      ? setJobList(jobs.filter((job) => job.status === jobStatus))
      : setJobList(jobs)
  }, [jobStatus])
  return (
    <Row style={{ width: '100%', marginTop: '47px' }}>
      <Col
        span={12}
        offset={4}
        style={{
          padding: 36,
          border: '1px #024caa',
          borderStyle: 'dotted',
          borderRadius: 8,
          backgroundColor: '#fff',
          // boxShadow: '2px 4px 10px -2px rgba(0,0,0,0.42)'
        }}
      >
        <Flex justify='space-between'>
          <Typography.Title level={3}>Quản lý tin tuyển dụng</Typography.Title>
          <Select
            placeholder='Trạng thái'
            style={{ width: '130px' }}
            onSelect={(value) => setJobStatus(value)}
            options={[
              {
                label: 'Tất cả',
                value: null,
              },
              {
                label: 'Đang tuyển',
                value: 'Đang tuyển',
              },
              {
                label: 'Đã tuyển',
                value: 'Đã tuyển',
              },
              {
                label: 'Đã hủy',
                value: 'Đã hủy',
              },
            ]}
          />
        </Flex>

        {!jobList.length && !jobStatus ? (
          <EmptyJobList />
        ) : jobList.length !== 0 ? (
          jobList.map((job, idx) => <JobCard job={job} idx={idx} />)
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

export default JobPostedList
