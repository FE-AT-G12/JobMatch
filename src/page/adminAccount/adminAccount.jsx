import React from 'react'
import './adminAccount.scss'
import { Col, Row } from 'react-bootstrap'
import { LogoutOutlined } from '@ant-design/icons'
import { useGetUserListQuery } from '../../features/user/userApi'
export default function adminAccount() {
  const { data, error, isLoading } = useGetUserListQuery()
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>
  return (
    <>
      <Row className='justify-content-md-center'>
        <Col>
          <Row style={{ marginBottom: '5%' }}>
            <b style={{ fontSize: '1.5rem' }}>Hello Magaret</b>
            <h5 style={{ fontSize: '0.9rem', color: 'grey' }}>
              Track your team progress here. You almost reach your goal !
            </h5>
          </Row>
          <Row>
            <div>
              {data.map((user) => (
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 2fr 3fr 1fr', // Tạo 4 cột với các kích thước tùy chỉnh
                    backgroundColor: '#ECEFF1',
                    marginBottom: '1%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '15px',
                    border: '1px solid',
                    height: '40px',
                  }}
                >
                  <p style={{ margin: '0 10px', textAlign: 'center' }}>
                    {user.userId}
                  </p>
                  <h5
                    style={{
                      margin: '0 10px',
                      textAlign: 'center',
                      fontSize: '100%',
                    }}
                  >
                    {user.name}
                  </h5>
                  <p style={{ margin: '0 20px', textAlign: 'center' }}>
                    {user.email}
                  </p>
                  <p
                    style={{
                      margin: '0 20px',
                      color: user.status === 'active' ? 'green' : 'red',
                      fontWeight: 'bold',
                    }}
                  >
                    {user.status === 'active' ? 'Active' : 'Banned'}
                  </p>
                </div>
              ))}
            </div>
          </Row>
        </Col>
      </Row>
      {/* UI chưa có tác dụng */}
    </>
  )
}
