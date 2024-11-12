import React from 'react'
import {
  Form,
  Input,
  DatePicker,
  Select,
  Tag,
  Button,
  Flex,
  message,
  InputNumber,
} from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import dayjs from 'dayjs'
import { dateFormatter } from '../../utils/DateFunction'
import { useUpdateUserMutation } from '../../features/user/userApi'

const { Option } = Select

const AccountProfile = ({ user }) => {
  const [form] = Form.useForm()
  const [updateUser, { isSuccess }] = useUpdateUserMutation()
  const onFinish = async (values) => {
 

    // Prepare the updated user data
    const updatedData = {
      ...values,
      identityCard: {
        identityNumber: values.identityNumber,
        placeOfIssue: values.placeOfIssue,
        dateOfIssue: values.dateOfIssue.format('YYYY-MM-DD'),
      },
      birthDate: values.birthDate && values.birthDate.format('YYYY-MM-DD'),
      skills: values.skills,
      description: values.description,
    }

    try {
      await updateUser({ data: updatedData, id: user.id }).unwrap()
      message.success('Cập nhật thông tin thành công!')
    } catch (error) {
      message.error('Cập nhật thông tin thất bại!')
    }
  }

  return (
    <div style={{ width: '100%', marginTop: '35px' }}>
      <Form
        form={form}
        layout='vertical'
        initialValues={{
          name: user.name,
          phoneNumber: user?.phoneNumber,
          email: user.email,
          identityNumber: user?.identityCard?.identityNumber,
          placeOfIssue: user?.identityCard?.placeOfIssue,
          dateOfIssue: user.identityCard?.dateOfIssue && dateFormatter(user.identityCard.dateOfIssue),
          birthDate: user.birthDate && dateFormatter(user.birthDate),
          education: user?.education,
          skills: user?.skills,
          description: user?.description,
        }}
        onFinish={onFinish}
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
          <Flex
            justify='space-between'
            align='center'
            style={{ width: '100%' }}
          >
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
          <h2>Cài đặt thông tin cá nhân</h2>
          <Form.Item
            label='Họ và tên'
            name='name'
            rules={[{ required: true, message: 'Vui lòng nhập họ và tên!' }]}
          >
            <Input placeholder='Họ và tên' />
          </Form.Item>
          <Form.Item label='Số điện thoại' name='phoneNumber'
          rules={[{ required: true, message: 'Vui nhập số điện thoại!' }]}
          >
            <InputNumber style={{width: '100%'}} placeholder='Số điện thoại' />
          </Form.Item>
          <Form.Item
            label='Email'
            name='email'
            rules={[
              {
                required: true,
                type: 'email',
                message: 'Vui lòng nhập email hợp lệ!',
              },
            ]}
          >
            <Input disabled placeholder='Email' />
          </Form.Item>
          <Form.Item
            label='Số CCCD/CMND'
            name='identityNumber'
            rules={[{ required: true, message: 'Vui lòng nhập số CCCD/CMND!' }]}
          >
            <Input placeholder='Số CCCD/CMND' />
          </Form.Item>
          <Form.Item label='Nơi cấp' name='placeOfIssue'
          rules={[{ required: true, message: 'Vui lòng nhập nơi cấp' }]}
          >
            <Input placeholder='Nơi cấp' />
          </Form.Item>
          <Form.Item label='Ngày cấp' name='dateOfIssue'
          rules={[{ required: true, message: 'Vui lòng chọn ngày cấp!' }]}
          >
            <DatePicker
              format='DD-MM-YYYY'
              placeholder='Chọn ngày cấp'
              style={{ width: '100%' }}
            />
          </Form.Item>
        </div>

        {/* Profile Settings */}
        <div style={{ padding: '24px', background: '#fff', borderRadius: 8 }}>
          <h2>Cài đặt hồ sơ</h2>
          <Form.Item
            label='Năm sinh'
            name='birthDate'
            rules={[{ required: true, message: 'Vui lòng chọn ngày sinh!' }]}
          >
            <DatePicker
              placeholder='Chọn ngày sinh'
              style={{ width: '100%' }}
              format='DD/MM/YYYY'
            />
          </Form.Item>
          <Form.Item
            label='Trình độ học vấn'
            name='education'
            rules={[
              { required: true, message: 'Vui lòng chọn trình độ học vấn!' },
            ]}
          >
            <Select
              placeholder='Chọn trình độ học vấn'
              options={Array.from({ length: 12 }, (_, idx) => ({
                label: `${idx + 1}/12`,
                value: `${idx + 1}`,
              }))}
            />
          </Form.Item>
          <Form.Item label='Kinh nghiệm nghề nghiệp' name='skills'>
            <Select
              mode='tags'
              placeholder='Thêm kinh nghiệm nghề nghiệp'
              style={{ width: '100%' }}
              defaultValue={user.skills}
              tagRender={(props) => <Tag closable={false}>{props.label}</Tag>}
            />
          </Form.Item>
          <Form.Item label='Giới thiệu bản thân' name='description'>
            <Input.TextArea
              style={{ borderColor: '#024CAA', height: '156px' }}
              rows={4}
              placeholder='Viết gì đó về bản thân để thu hút nhà tuyển dụng hơn!'
            />
          </Form.Item>
        </div>
        <Form.Item>
          <Button
            style={{
              width: '100%',
              marginTop: '24px',
              height: '38px',
              color: '#fff',
              backgroundColor: '#024CAA',
            }}
            htmlType='submit'
          >
            Lưu thay đổi
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default AccountProfile
