import { DoubleRightOutlined, UserOutlined } from '@ant-design/icons'
import {
  Avatar,
  Button,
  Divider,
  Dropdown,
  Flex,
  Space,
  theme,
  Typography,
} from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import { profileItems } from './data'
const { useToken } = theme
function HeaderButtonGroup({ user, handleLogout }) {
  const { token } = useToken()
  const menuStyle = {
    boxShadow: 'none',
  }
  const contentStyle = {
    backgroundColor: token.colorBgElevated,
    borderRadius: token.borderRadiusLG,
    boxShadow: token.boxShadowSecondary,
    width: 300,
  }
  const items = profileItems(user?.userId, handleLogout)
  return (
    <>
      <Flex className='button-group'>
        {!user ? (
          <>
            <Link to={'/login'}>
              <Button variant='outlined' className='login-home'>
                Đăng nhập
              </Button>
            </Link>
            <Link to={'/register?role=client'}>
              <Button className='register-home' type='primary'>
                Đăng ký
              </Button>
            </Link>
            <Link to='/register?role=hirer'>
              <Button className='dang-tuyen-home' type='primary'>
                Đăng tuyển việc làm
              </Button>
            </Link>
          </>
        ) : (
          <>
            <Flex align='center'>
              <Flex
                vertical
                style={{
                  paddingRight: 16,
                  borderRight: '1px #acacac solid',
                }}
              >
                <Typography.Text style={{ fontWeight: 500, color: '#BABABA' }}>
                  Bạn là nhà tuyển dụng?
                </Typography.Text>
                <Typography.Text className='header__recruit'>
                  <Link style={{ color: '#024caa' }} to='/job/post'>
                    Đăng tuyển ngay <DoubleRightOutlined />
                  </Link>
                </Typography.Text>
              </Flex>
              <Dropdown
                menu={items}
                dropdownRender={(menu) => (
                  <div style={contentStyle}>
                    <Space
                      style={{
                        padding: 8,
                      }}
                    >
                      <Flex gap={16}>
                        <Avatar size={'large'} icon={<UserOutlined />} />
                        <Flex vertical>
                          <Typography.Title
                            className='header__username'
                            level={4}
                          >
                            {user?.name}
                          </Typography.Title>
                          <Typography.Text>
                            <span style={{ color: '#999999' }}>
                              {user.role === 'client'
                                ? 'Mã ứng viên: '
                                : 'Mã nhà tuyển dụng: '}
                            </span>
                            <span>#{user?.userId}</span>
                          </Typography.Text>
                          <Typography.Text style={{ color: '#999999' }}>
                            {user?.email}
                          </Typography.Text>
                        </Flex>
                      </Flex>
                    </Space>
                    <Divider
                      style={{
                        margin: 0,
                      }}
                    />
                    {React.cloneElement(menu, {
                      style: menuStyle,
                    })}
                  </div>
                )}
              >
                <Flex
                  style={{
                    padding: 8,
                    backgroundColor: '#DCE4FF',
                    borderRadius: '99%',
                    width: '40px',
                    height: '40px',
                    marginLeft: 16,
                  }}
                  align='center'
                  justify='center'
                >
                  <UserOutlined style={{ fontSize: 18 }} />
                </Flex>
              </Dropdown>
            </Flex>
          </>
        )}
      </Flex>
    </>
  )
}

export default HeaderButtonGroup
