import {
  Col,
  DatePicker,
  Flex,
  Form,
  Input,
  message,
  Row,
  Typography,
} from 'antd'
import React, { useEffect } from 'react'
import { dateFormatter } from '../../utils/DayFormater'
import dayjs from 'dayjs'
import { useNavigate } from 'react-router-dom'
function JobHirerInfo({ user }) {
  const nav = useNavigate()

  useEffect(() => {
    if (
      !user.phoneNumber ||
      !user.email ||
      !user.birthDate ||
      !user.identityCard
    ) {
      nav(`/profile/${user.id}`)
      message.warning('Bạn cần cập nhật thông tin để đăng tin tuyển dụng')
    }
  }, [])
  return (
    <Form
      layout='vertical'
      initialValues={{
        name: user.name,
        phoneNumber: user?.phoneNumber,
        email: user.email,
        identityNumber: user?.identityCard?.identityNumber,
        placeOfIssue: user?.identityCard?.placeOfIssue,
        dateOfIssue: user?.identityCard?.dateOfIssue
          ? dayjs(user.identityCard.dateOfIssue, 'YYYY-MM-DD')
          : null,
        birthDate: user.birthDate && dateFormatter(user.birthDate),
      }}
    >
      <div
        style={{
          width: '100%',
          height: '150px',
          backgroundColor: '#fff',
          marginBottom: '30px',
          borderRadius: 8,
          borderLeft: '3px solid #024CAA',
          padding: '30px 28px',
        }}
      >
        <Flex justify='space-between' align='center' style={{ width: '100%' }}>
          <Flex gap={20} align='center'>
            <img
              src={user?.avatar || '/public/blank-avt.jpg'}
              width={83}
              height={83}
              style={{ borderRadius: '100%' }}
              alt='User Avatar'
            />
            <div>
              <div>
                Chào mừng trở lại <span>Job</span> <span>Match</span>
              </div>
              <h3>{user.name}</h3>
            </div>
          </Flex>
          <div style={{ width: 148, height: 46 }}>
            <img src='/public/logo.png' width={'100%'} height={'100%'} />
          </div>
        </Flex>
      </div>

      {/* Personal Information */}
      <div
        style={{
          padding: '24px',
          background: '#fff',
          borderRadius: 8,
          marginBottom: '35px',
        }}
      >
        <Typography.Title level={3}>Thông tin nhà tuyển dụng</Typography.Title>
        <Form.Item label='Họ và tên' name='name'>
          <Input readOnly placeholder='Họ và tên' />
        </Form.Item>
        <Form.Item label='Số điện thoại' name='phoneNumber'>
          <Input readOnly placeholder='Số điện thoại' />
        </Form.Item>
        <Form.Item label='Email' name='email'>
          <Input disabled placeholder='Email' />
        </Form.Item>
        <Form.Item label='Số CCCD/CMND' name='identityNumber'>
          <Input readOnly placeholder='Số CCCD/CMND' />
        </Form.Item>
        <Form.Item label='Nơi cấp' name='placeOfIssue'>
          <Input readOnly placeholder='Nơi cấp' />
        </Form.Item>
        <Form.Item label='Ngày cấp' name='dateOfIssue'>
          <DatePicker
            disabled
            format='DD-MM-YYYY'
            placeholder='Chọn ngày cấp'
            style={{ width: '100%' }}
          />
        </Form.Item>
      </div>
    </Form>
  )
}

export default JobHirerInfo
