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
} from 'antd'
import {
  MailOutlined,
  PhoneOutlined,
  BookOutlined,
  FileSearchOutlined,
  CheckOutlined,
  InfoCircleOutlined,
} from '@ant-design/icons'
import { useGetUserDetailQuery } from '../../features/user/userApi'
import CustomLoading from '../Loading/Loading'
import { useUpdateJobMutation } from '../../features/job/jobApi'

const { Title, Text } = Typography

function JobUserAppliedList({ clientId, setKey, job, notShowBtn }) {
  const { data: client, isLoading } = useGetUserDetailQuery(clientId)
  const [open, setOpen] = useState(false)
  const [updateJob] = useUpdateJobMutation()
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
    console.log(data)

    try {
      await updateJob({ id: job.id, data })
      message.success('Duyệt ứng viên thành công !')
    } catch (error) {}
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
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                {rating ? (
                  <Rate
                    value={rating}
                    disabled
                    allowHalf
                    style={{ fontSize: 30 }}
                  />
                ) : (
                  <Typography.Text>Chưa có nhận xét !</Typography.Text>
                )}

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
              </div>
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
    </Card>
  )
}

export default JobUserAppliedList
