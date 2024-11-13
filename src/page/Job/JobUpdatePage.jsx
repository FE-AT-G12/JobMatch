import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../redux/features/userSlice'
import { useGetUserDetailQuery } from '../../features/user/userApi'
import CustomLoading from '../../components/Loading/Loading'
import { Col, Row } from 'antd'
import JobHirerInfo from '../../components/Job/JobHirerInfo'
import JobUpdateForm from '../../components/Job/JobUpdateForm'
import { useGetJobDetailQuery } from '../../features/job/jobApi'
import { useParams } from 'react-router-dom'

function JobUpdatePage() {
  const { id } = useParams()
  const { userId } = useSelector(selectUser)
  const { data, isLoading: jobLoading } = useGetJobDetailQuery(id)
  const { data: user, isLoading, isError } = useGetUserDetailQuery(userId)
  if (isLoading || jobLoading) {
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
          <JobUpdateForm job={data} />
        </Col>
      </Row>
    </div>
  )
}

export default JobUpdatePage
