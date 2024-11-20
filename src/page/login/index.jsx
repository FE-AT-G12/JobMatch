import { Button, Checkbox, Col, Input, Row, Form, message, Flex } from 'antd'
import { SafetyCertificateOutlined, ChromeOutlined } from '@ant-design/icons'
import { useState } from 'react'
import './index.scss'
import { Link, useNavigate } from 'react-router-dom'
import { useGetUserListQuery } from '../../features/user/userApi'
import { hashPassword } from '../../utils/Hash'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/features/userSlice'

function LoginPage() {
  const [isChecked, setIsChecked] = useState(false)
  const nav = useNavigate()
  const onChange = (e) => {
    setIsChecked(e.target.checked)
  }
  const dispatch = useDispatch()

  const { data } = useGetUserListQuery()

  const onSubmit = async ({ email, password }) => {
    if (data) {
      const hashedPass = await hashPassword(password)
      const user = data.find(
        (user) => user.email === email && user.password === hashedPass
      )

      if (!user) {
        // Display the error message when the user is not found
        message.error('Email hoặc mật khẩu sai')
      } else {
        message.success('Đăng nhập thành công')
        const userInfo = {
          role: user.role,
          userId: user.id,
          email: user.email,
          name: user.name,
        }
        dispatch(login(userInfo))
        localStorage.setItem('user', JSON.stringify(userInfo))
        if (user.role === 'admin') {
          nav('/admin/account')
        } else {
          nav('/')
        }
      }
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
              <h2 className='title'>Chào mừng bạn đã quay trở lại</h2>
              <div className='caption'>
                Cùng tìm kiếm và nhận được các cơ hội sự nghiệp lý tưởng
              </div>
            </div>
            <div className='login'>
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
                <p style={{ marginBottom: '10px' }}>Password</p>
                <Form.Item
                  name='password'
                  rules={[
                    { required: true, message: 'Vui lòng nhập mật khẩu' },
                  ]}
                >
                  <Input.Password
                    style={{ height: 45 }}
                    size='large'
                    placeholder='Password'
                    prefix={
                      <SafetyCertificateOutlined style={{ color: '#024CAA' }} />
                    }
                  />
                </Form.Item>
              </div>
            </div>
            <div className='forgot-password'>
              <Link to={''} style={{ color: '#024CAA' }}>
                Quên mật khẩu
              </Link>
            </div>
            <div className='button'>
              <Form.Item>
                <Button
                  className='button-login'
                  type='primary'
                  htmlType='submit'
                  block
                  style={{ height: '40px', fontWeight: 600, fontSize: '16px' }}
                >
                  Đăng nhập
                </Button>
              </Form.Item>
              {/* <div className='or-login'>Hoặc đăng nhập bằng</div>
              <Button
                className='button-login-gg'
                type='primary'
                block
                style={{
                  opacity: isChecked ? 1 : 0.5,
                  pointerEvents: isChecked ? 'auto' : 'none',
                }}
              >
                <ChromeOutlined /> Google
              </Button> */}
            </div>
            <div className='accept'>
              <Checkbox onChange={onChange}>
                Bằng việc đăng nhập bằng tài khoản mạng xã hội, tôi đã đọc và
                đồng ý với{' '}
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
              Bạn chưa có tài khoản?
              <Link to={'/register?role=client'} style={{ color: '#024CAA' }}>
                Đăng ký ngay
              </Link>
            </div>
          </Form>
        </Col>
        <Col span={8} offset={1} className='background'></Col>
      </Row>
    </div>
  )
}

export default LoginPage
