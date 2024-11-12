import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../redux/features/userSlice'
import { useGetUserDetailQuery } from '../../features/user/userApi'
import CustomLoading from '../../components/Loading/Loading'
import { Col, Row } from 'antd'
import JobHirerInfo from '../../components/Job/JobHirerInfo'
import JobPostForm from '../../components/Job/JobPostForm'

function JobPost() {
  const { userId } = useSelector(selectUser)
  const {
    data: user,
    isLoading,
    isError,
  } = useGetUserDetailQuery(userId)
  if (isLoading) {
    return <CustomLoading />
  }
  if (isError) {
    return 'Có lỗi xảy ra'
  }

  return (
    <div
      style={{ width: '100%', minHeight: '100vh', backgroundColor: '#f5f5f5' }}
    >
      <Row style={{ width: '100%', marginTop: '35px' }}>
        <Col span={10} offset={7}>
          <JobHirerInfo user={user} />
          <JobPostForm />
        </Col>
      </Row>
    </div>
  )
}

export default JobPost
