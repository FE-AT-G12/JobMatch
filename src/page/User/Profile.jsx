import React from 'react'
import AccountProfile from '../../components/accountProfile/AccountProfile'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { useGetUserDetailQuery } from '../../features/user/userApi'
import { Col, Row, Space } from 'antd'
import CustomLoading from '../../components/Loading/Loading'
import { useSelector } from 'react-redux'

function Profile() {
  const { id } = useParams()
  const user = useSelector((state) => state.user.user)
  const nav = useNavigate()
  if (user.userId !== id) {
    nav('/')
  }

  const { data, isLoading, isError, isSuccess } = useGetUserDetailQuery(id)
 
  if (isLoading) {
    return <CustomLoading />
  }
  if (isError) {
    return 'Có lỗi xảy ra'
  }

  return (
    <Row style={{ backgroundColor: '#f0f0f0', width: '100%' }}>
      <Col span={10} offset={7}>
        <AccountProfile user={data} />
      </Col>
    </Row>
  )
}

export default Profile
