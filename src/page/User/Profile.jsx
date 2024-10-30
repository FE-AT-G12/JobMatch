import React from 'react'
import AccountProfile from '../../components/accountProfile/AccountProfile'
import { useParams, useSearchParams } from 'react-router-dom'
import { useGetUserDetailQuery } from '../../features/user/userApi'
import { Col, Row, Space } from 'antd'
import CustomLoading from '../../components/Loading/Loading'

function Profile() {
  const { id } = useParams()
  console.log(id)

  const { data, isLoading, isError, isSuccess } = useGetUserDetailQuery(id)
  console.log(data)
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
