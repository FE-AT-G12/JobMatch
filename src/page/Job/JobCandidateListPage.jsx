import { Badge, Card, Col, Row, Typography, Tabs } from 'antd'
import React, { useState } from 'react'
import JobHeaderBanner from '../../components/Job/JobHeaderBanner/JobHeaderBanner'
import { useParams } from 'react-router-dom'
import { useGetJobDetailQuery } from '../../features/job/jobApi'
import JobDetail from '../../components/Job/JobDetail'
import JobUserAppliedList from '../../components/Job/JobUserAppliedList'
import CustomLoading from '../../components/Loading/Loading'

function JobCandidateListPage() {
  const [key, setKey] = useState('1') // State to manage active tab key
  const { id } = useParams()
  const { data: job, isLoading, isSuccess } = useGetJobDetailQuery(id)

  if (isLoading) return <CustomLoading />

  const items = [
    {
      key: '1',
      label: (
        <Typography.Text>
          Danh sách ứng viên đã duyệt ({job.clientId.length})
        </Typography.Text>
      ),
      children: (
        <>
          {job.clientId && job.clientId.length !== 0 ? (
            job.clientId.map((id) => (
              <JobUserAppliedList key={id} clientId={id} job={job} setKey={setKey} notShowBtn={true} tabKey={1}/>
            ))
          ) : (
            <Card>
              <Typography.Title level={4}>
                Danh sách ứng viên đã duyệt
              </Typography.Title>
              <div style={{ textAlign: 'center' }}>
                <img src='/public/empty-folder.png' style={{ width: '50%' }} />
                <Typography.Title level={5}>Chưa có ứng viên</Typography.Title>
              </div>
            </Card>
          )}
        </>
      ),
    },
    {
      key: '2',
      label: (
        <Badge count={job.clientApplyId.length} offset={[10, -2]}>
          <Typography.Text>Danh sách ứng viên đang ứng tuyển</Typography.Text>
        </Badge>
      ),
      children: (
        <>
          {job.clientApplyId && job.clientApplyId.length !== 0 ? (
            job.clientApplyId.map((id) => (
              <JobUserAppliedList key={id} clientId={id} setKey={setKey} job={job}  tabKey={2}/>
            ))
          ) : (
            <Card>
              <Typography.Title level={4}>
                Danh sách ứng viên đang ứng tuyển
              </Typography.Title>
              <div style={{ textAlign: 'center' }}>
                <img src='/public/empty-folder.png' style={{ width: '50%' }} />
                <Typography.Title level={5}>Chưa có ứng viên</Typography.Title>
              </div>
            </Card>
          )}
        </>
      ),
    },
  ]

  return (
    <>
      {isSuccess && (
        <Row>
          <Col span={24}>
            <JobHeaderBanner />
          </Col>
          <Col span={10} offset={4} style={{ marginTop: '-60px' }}>
            <JobDetail job={job} notShowBtn={true} />
          </Col>
          <Col span={10} offset={4} style={{ marginTop: '10px' }}>
            <Card>
              <Tabs
                activeKey={key} 
                onChange={setKey} 
                items={items}
              />
            </Card>
          </Col>
        </Row>
      )}
    </>
  )
}

export default JobCandidateListPage
