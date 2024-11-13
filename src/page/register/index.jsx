import { Button, Checkbox, Col, Input, Row, Form, message } from 'antd'
import { SafetyCertificateOutlined, ChromeOutlined } from '@ant-design/icons'
import { useEffect, useState } from 'react'
import './index.scss'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import {
  useCreateUserMutation,
  useGetUserListQuery,
} from '../../features/user/userApi'
import { hashPassword } from '../../utils/Hash'
import { useDispatch } from 'react-redux'

function RegisterPage() {
  const [isChecked, setIsChecked] = useState(false)
  const [createAccount, { isLoading }] = useCreateUserMutation()
  const nav = useNavigate()
  const dispatch = useDispatch()
  const onChange = (e) => {
    setIsChecked(e.target.checked)
  }
  const [searchParam] = useSearchParams()
  const role = searchParam.get('role')
  useEffect(() => {
    if (role !== 'hirer' && role !== 'client') {
      nav('/register?role=client')
    }
  }, [role, searchParam])

  const { data } = useGetUserListQuery()

  const onSubmit = async ({ email, password, confirmPassword, name }) => {
    if (!email || !password || !confirmPassword || !name) return
    if (password !== confirmPassword) {
      message.error('Mật khẩu và xác nhận mật khẩu không khớp')
      return
    }
    if (data) {
      const isRegisted = data.some((user) => user.email === email)
      if (isRegisted) {
        message.error('Email đã được đăng kí!')
        return
      }
    }
    try {
      const hashedPassword = await hashPassword(password)
      if (role !== 'client' && role !== 'hirer') {
        nav('/register?role=client')
        message.error('Đăng kí tài khoản thất bại. Chức vụ không hợp lệ')
        return
      }
      await createAccount({ name, email, password: hashedPassword, role })
      message.success('Tạo tài khoản tài công. Vui lòng đăng nhập')
      nav('/login')
    } catch (error) {
      message.error('Đăng kí tài khoản thất bại !')
    }
  }

  return (
    <div className='loginpage'>
      <Row style={{ height: '100%' }}>
        <Col span={12} offset={3} className='login-1'>
          <Link to={'/'}>
            <img
              src='/public/logo.png'
              alt=''
              width={200}
              style={{ marginBottom: '60px', marginLeft: '-80px' }}
            />
          </Link>

          <Form onFinish={onSubmit}>
            <div className='header'>
              <h2 className='title'>
                Đăng ký tài khoản{' '}
                {role === 'client' ? 'người lao động' : 'nhà tuyển dụng'}
              </h2>
              <div className='caption'>
                Cùng tham gia để tìm kiếm cơ hội sự nghiệp lý tưởng
              </div>
            </div>
            <div className='register'>
              <div className='input'>
                <p style={{ marginBottom: '10px' }}>Họ và tên</p>
                <Form.Item
                  name='name'
                  rules={[{ required: true, message: 'Vui lòng nhập tên' }]}
                >
                  <Input
                    style={{ height: 45 }}
                    size='large'
                    placeholder='Họ và tên'
                  />
                </Form.Item>
              </div>
              <div className='input'>
                <p style={{ marginBottom: '10px' }}>Email</p>
                <Form.Item
                  name='email'
                  rules={[{ required: true, message: 'Vui lòng nhập email' }]}
                >
                  <Input
                    style={{ height: 45 }}
                    size='large'
                    placeholder='Email'
                    prefix={<ChromeOutlined style={{ color: '#024CAA' }} />}
                  />
                </Form.Item>
              </div>
              <div className='input'>
                <p style={{ marginBottom: '10px' }}>Mật khẩu</p>
                <Form.Item
                  name='password'
                  rules={[
                    { required: true, message: 'Vui lòng nhập mật khẩu' },
                  ]}
                >
                  <Input.Password
                    style={{ height: 45 }}
                    size='large'
                    placeholder='Mật khẩu'
                    prefix={
                      <SafetyCertificateOutlined style={{ color: '#024CAA' }} />
                    }
                  />
                </Form.Item>
              </div>
              <div className='input'>
                <p style={{ marginBottom: '10px' }}>Xác nhận mật khẩu</p>
                <Form.Item
                  name='confirmPassword'
                  dependencies={['password']}
                  rules={[
                    {
                      required: true,
                      message: 'Vui lòng xác nhận mật khẩu',
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                          return Promise.resolve()
                        }
                        return Promise.reject(
                          new Error('Mật khẩu và xác nhận mật khẩu không khớp')
                        )
                      },
                    }),
                  ]}
                >
                  <Input.Password
                    style={{ height: 45 }}
                    size='large'
                    placeholder='Xác nhận mật khẩu'
                    prefix={
                      <SafetyCertificateOutlined style={{ color: '#024CAA' }} />
                    }
                  />
                </Form.Item>
              </div>
            </div>
            <div className='button'>
              <Form.Item>
                <Button
                  disabled={isLoading}
                  className='button-login'
                  type='primary'
                  htmlType='submit'
                  block
                  style={{ height: '40px', fontWeight: 600, fontSize: '16px' }}
                >
                  Đăng ký
                </Button>
              </Form.Item>
            </div>
            <div className='accept'>
              <Checkbox onChange={onChange}>
                Bằng việc đăng ký tài khoản, tôi đã đọc và đồng ý với{' '}
                <Link to={'/dieu-vu'} style={{ color: '#024CAA' }}>
                  Điều khoản dịch vụ
                </Link>{' '}
                và{' '}
                <Link to={'/chinh-sach'} style={{ color: '#024CAA' }}>
                  Chính sách bảo mật
                </Link>{' '}
                của Job Match
              </Checkbox>
            </div>
            <div className='register-account'>
              Bạn đã có tài khoản?
              <Link to={'/login'} style={{ color: '#024CAA' }}>
                Đăng nhập ngay
              </Link>
            </div>
          </Form>
        </Col>
        <Col span={8} offset={1} className='background'></Col>
      </Row>
    </div>
  )
}

export default RegisterPage
