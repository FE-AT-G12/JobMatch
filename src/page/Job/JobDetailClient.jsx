import React, { useState } from 'react'
import JobDetail from '../../components/Job/JobDetail'
import {
  Card,
  Col,
  Row,
  Typography,
  Rate,
  Divider,
  Flex,
  message,
  Modal,
} from 'antd'
import JobHeaderBanner from '../../components/Job/JobHeaderBanner/JobHeaderBanner'
import {
  useClientApplyJobMutation,
  useGetJobDetailQuery,
} from '../../features/job/jobApi'
import { useParams } from 'react-router-dom'
import CustomLoading from '../../components/Loading/Loading'
import { useGetUserDetailQuery } from '../../features/user/userApi'
import JobDescription from './JobDescription'
import { useSelector } from 'react-redux'
import { selectUser } from '../../redux/features/userSlice'

export default function JobDetailClient() {
  const [open, setOpen] = useState(false)

  const { id } = useParams()
  const { data: job, isLoading } = useGetJobDetailQuery(id)
  const user = useSelector(selectUser)

  // Use skip option to avoid conditional hook rendering
  const { data: hirer } = useGetUserDetailQuery(job?.hirerId, {
    skip: !job?.hirerId,
  })

  const [applyJob, { isLoading: isApplying }] = useClientApplyJobMutation()

  if (isLoading) {
    return <CustomLoading />
  }

  const handleApplyJob = async () => {
    if (isApplying) return
    if (job.clientApplyId.some((id) => user.userId === id)) {
      message.error('Bạn đã ứng tuyển việc này rồi !')
      setOpen(false)
      return
    }
    try {
      await applyJob({
        id: job.id,
        body: {
          clientApplyId: [...job?.clientApplyId, user.userId],
        },
      })
      setOpen(false)
      message.success('Ứng tuyển công việc thành công')
    } catch (error) {
      setOpen(false)
    }
  }

  const handleModal = () => {
    setOpen(!open)
  }

  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <JobHeaderBanner />
      </Col>
      {/* Job Detail Section */}
      <Col span={10} offset={4} style={{ marginTop: '-60px', borderRadius: 8 }}>
        <JobDetail handleApplyJob={handleModal} job={job} user={user}/>
        <Col span={24} style={{ borderRadius: 8, padding: 0, marginTop: 32 }}>
          <JobDescription handleApplyJob={handleModal} job={job} user={user}/>
        </Col>
      </Col>

      {/* Hirer Info Section */}
      <Col
        span={6}
        style={{
          marginLeft: 16,
          marginTop: -60,
          borderRadius: 8,
        }}
      >
        <Card bordered={false}>
          <Typography.Title level={3}>Thông tin nhà tuyển dụng</Typography.Title>
          <Divider />
          {hirer && (
            <>
              <Flex gap={20} align="start">
                <img
                  src={hirer?.avatar || '/public/blank-avt.jpg'}
                  width={83}
                  height={83}
                  style={{ borderRadius: '100%' }}
                  alt="hirer Avatar"
                />
                <div>
                  <Typography.Title level={3}>{hirer.name}</Typography.Title>
                  <Typography.Text strong>Email: </Typography.Text>
                  <Typography.Text>{hirer.email}</Typography.Text>
                  <br />
                  <Typography.Text strong>Số điện thoại: </Typography.Text>
                  <Typography.Text>{hirer.phoneNumber}</Typography.Text>
                </div>
              </Flex>

              <Divider />

              <Typography.Text strong>Địa điểm:</Typography.Text>
              <Typography.Paragraph>{hirer.location}</Typography.Paragraph>

              <Typography.Text strong>Mô tả:</Typography.Text>
              <Typography.Paragraph>{hirer.description}</Typography.Paragraph>
              <Typography.Text strong>Đánh giá: </Typography.Text>
              {hirer?.rating ? (
                <Rate disabled defaultValue={hirer?.rating} />
              ) : (
                'Chưa có đánh giá'
              )}
            </>
          )}
        </Card>
      </Col>
      <Modal
        open={open}
        title={`Ứng tuyển ${job.title}`}
        onCancel={handleModal}
        onOk={handleApplyJob}
        confirmLoading={isApplying}
      >
        Bạn có chắn chắn muốn ứng tuyển công việc {job.title}
      </Modal>
    </Row>
  )
}
