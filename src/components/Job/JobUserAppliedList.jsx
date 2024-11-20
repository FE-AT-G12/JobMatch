import React, { useState } from 'react'
import {
  Card,
  Avatar,
  Row,
  Col,
  Typography,
  Rate,
  Button,
  Modal,
  message,
  Flex,
} from 'antd'
import {
  MailOutlined,
  PhoneOutlined,
  BookOutlined,
  FileSearchOutlined,
  CheckOutlined,
  InfoCircleOutlined,
  CloseCircleOutlined,
} from '@ant-design/icons'
import {
  useGetUserDetailQuery,
  useUpdateUserMutation,
} from '../../features/user/userApi'
import CustomLoading from '../Loading/Loading'
import { useUpdateJobMutation } from '../../features/job/jobApi'
import { useSelector } from 'react-redux'
import { selectUser } from '../../redux/features/userSlice'

const { Title, Text } = Typography

function JobUserAppliedList({ clientId, setKey, job, notShowBtn, tabKey }) {
  const hirer = useSelector(selectUser)
  const { data: client, isLoading } = useGetUserDetailQuery(clientId)
  const [open, setOpen] = useState(false)
  const [open2, setOpen2] = useState(false)
  const [open3, setOpen3] = useState(false)
  const [rate, setRate] = useState()
  const [updateJob] = useUpdateJobMutation()
  const [updateUser] = useUpdateUserMutation()
  if (isLoading) return <CustomLoading />

  const {
    name,
    email,
    phoneNumber,
    skills,
    description,
    education,
    birthDate,
    avatar,
    rating,
  } = client
  const formattedBirthDate = new Date(birthDate).toLocaleDateString()

  const handleApproveClient = async () => {
    setOpen(false)
    setKey('1')
    const applyId = [...job.clientApplyId]

    const data = {
      clientApplyId: applyId.filter((id) => id !== clientId),
      clientId: [...job.clientId, clientId],
    }
    try {
      await updateJob({ id: job.id, data })
      message.success('Duyệt ứng viên thành công !')
    } catch (error) {}
  }
  const handleRejectClient = async () => {
    console.log({ job: job })
    try {
      if (tabKey === 1) {
        const newClientId = job.clientId.filter((id) => id !== clientId)
        const data = {
          clientId: newClientId,
        }
        await updateJob({ id: job.id, data })
      } else if (tabKey === 2) {
        const newClientApplyId = job.clientApplyId.filter(
          (id) => id !== clientId
        )
        const data = {
          clientApplyId: newClientApplyId,
        }
        await updateJob({ id: job.id, data })
      }
      message.success('Loại ứng viên thành công')
    } catch (error) {
      console.log(error)
      message.error('Loại ứng viên thất bại')
    } finally {
      setOpen2(false)
    }
  }
  const handleRatingClient = async () => {
    console.log({ rate })
    let data
    try {
      if (!client.rating) {
        console.log('sao no vo day')

        data = {
          rating: {
            average: rate,
            user: [
              {
                userId: hirer.userId,
                jobId: job.id,
                rate: rate,
              },
            ],
          },
        }
        await updateUser({ data, id: clientId })
      } else {
        const total = client.rating.average * client.rating.user.length
        const avg = (total + rate) / (client.rating.user.length + 1)
        data = {
          rating: {
            average: avg,
            user: [
              ...client.rating.user,
              {
                userId: hirer.userId,
                jobId: job.id,
                rate: rate,
              },
            ],
          },
        }
        await updateUser({ data, id: clientId })
      }
      message.success('Đánh giá thành công')
    } catch (error) {
      console.log(error)
      message.error('Đánh giá thất bại')
    } finally {
      setOpen3(false)
    }
  }

  return (
    <Card
      style={{
        maxWidth: 800,
        margin: '20px auto',
        padding: '20px',
        borderRadius: '10px',
      }}
    >
      <Row gutter={[16, 16]} align='middle'>
        <Col lg={6} style={{ textAlign: 'center' }}>
          <Avatar src={avatar} size={100} />
          <Title level={4} style={{ marginTop: 10 }}>
            {name}
          </Title>
          <Text type='secondary'>Ngày sinh: {formattedBirthDate}</Text>
        </Col>
        <Col lg={18}>
          <Row gutter={[12, 12]}>
            <Col xs={24} sm={24}>
              <Flex justify='space-between'>
                {rating ? (
                  <Rate
                    value={rating.average}
                    disabled
                    allowHalf
                    style={{ fontSize: 30 }}
                  />
                ) : (
                  <>
                    <div>
                      <Typography.Text>Chưa có nhận xét !</Typography.Text>
                      <br />
                    </div>
                  </>
                )}

                <Flex gap={8}>
                  {!notShowBtn && (
                    <Button
                      size='large'
                      style={{
                        backgroundColor: '#024caa',
                        color: 'white',
                        width: 'auto',
                      }}
                      onClick={() => setOpen(true)}
                    >
                      Duyệt
                    </Button>
                  )}
                  <Button onClick={() => setOpen2(true)} danger size='large'>
                    Loại ứng viên
                  </Button>
                </Flex>
              </Flex>
              {tabKey === 1 &&
              rating &&
              client.rating.user.some(
                (rate) => rate.userId == hirer.userId && rate.jobId === job.id
              )
                ? 'Bạn đã đánh giá ứng viên này rồi !'
                : tabKey === 1 && (
                    <Typography.Link onClick={() => setOpen3(true)}>
                      Đánh giá ngay !
                    </Typography.Link>
                  )}
            </Col>

            <Col xs={24} sm={12}>
              <MailOutlined style={{ fontSize: 18, color: '#024caa' }} />
              <Text strong style={{ marginLeft: 8 }}>
                Email:
              </Text>
              <Text style={{ marginLeft: 8 }}>{email}</Text>
            </Col>

            <Col xs={24} sm={12}>
              <PhoneOutlined style={{ fontSize: 18, color: '#024caa' }} />
              <Text strong style={{ marginLeft: 8 }}>
                Số điện thoại:
              </Text>
              <Text style={{ marginLeft: 8 }}>{phoneNumber}</Text>
            </Col>

            <Col xs={24} sm={12}>
              <BookOutlined style={{ fontSize: 18, color: '#024caa' }} />
              <Text strong style={{ marginLeft: 8 }}>
                Trình độ học vấn:
              </Text>
              <Text style={{ marginLeft: 8 }}>{education}</Text>
            </Col>

            <Col xs={24} sm={24}>
              <FileSearchOutlined style={{ fontSize: 18, color: '#024caa' }} />
              <Text strong style={{ marginLeft: 8 }}>
                Kỹ năng:
              </Text>
              <Text style={{ marginLeft: 8 }}>
                {skills?.join(', ') || 'N/A'}
              </Text>
            </Col>

            <Col xs={24} sm={24}>
              <InfoCircleOutlined style={{ fontSize: 18, color: '#024caa' }} />
              <Text strong style={{ marginLeft: 8 }}>
                Mô tả:
              </Text>
              <Text style={{ marginLeft: 8 }}>
                {description || 'Không có mô tả'}
              </Text>
            </Col>
          </Row>
        </Col>
      </Row>

      <Modal
        title='Bạn có chắc chắn'
        open={open}
        onCancel={() => setOpen(!open)}
        onOk={handleApproveClient}
      >
        Bạn có chắc chắn tuyển {client.name} cho vị trí này?
      </Modal>
      <Modal
        title='Bạn có chắc chắn'
        open={open2}
        onCancel={() => setOpen2(!open2)}
        onOk={handleRejectClient}
      >
        Bạn có chắc chắn loại ứng viên {client.name} cho vị trí này?
      </Modal>
      <Modal
        title={`Đánh giá ứng viên ${name}`}
        open={open3}
        onCancel={() => setOpen3(!open3)}
        onOk={handleRatingClient}
      >
        Đánh giá ứng viên {client.name} cho vị trí này:
        <br />
        <Rate allowHalf style={{ marginTop: 16 }} onChange={setRate} />
      </Modal>
    </Card>
  )
}

export default JobUserAppliedList
