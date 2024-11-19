import React from 'react'
import { Row, Col, Image, Card } from 'antd'
import './stylesHome/_home_3.scss'
import { useGetJobListQuery } from '../../features/job/jobApi'
import { useGetCompanyListQuery } from '../../features/company/companyApi'

function JobMarketSection() {

  const { data: companies = [], isLoading: isLoadingCompanies } =
    useGetCompanyListQuery()
  const { data: jobs = [], isLoading: isLoadingJobs } = useGetJobListQuery()

  const jobsCurrentlyHiring = jobs.filter((job) => job.status === 'Đang tuyển')

  const jobCount = jobs.length
  const companyCount = companies.length
  const currentlyHiringCount = jobsCurrentlyHiring.length 

  return (
    <div className='home-3'>
      <p className='title-3'>Thị trường việc làm</p>
      <div className='image-home-3'>
        <Row gutter={24}>
          <Col span={8}>
            <Image src='https://th.bing.com/th/id/OIP.YJxJDchzoC4HJLsD4lnQLgHaEK?rs=1&pid=ImgDetMain' />
          </Col>
          <Col span={4} className='card-in-home3'>
            <Card style={{ background: '#024CAA', color: 'white' }}>
              <h3>{isLoadingJobs ? 'Loading...' : jobCount}</h3>
              <p>Việc làm đang có</p>
            </Card>
          </Col>
          <Col span={4} className='card-in-home3'>
            <Card style={{ background: '#024CAA', color: 'white' }}>
              <h3>{isLoadingJobs ? 'Loading...' : currentlyHiringCount}</h3>
              <p>Việc làm đang tuyển</p>
            </Card>
          </Col>
          <Col span={4} className='card-in-home3'>
            <Card style={{ background: '#024CAA', color: 'white' }}>
              <h3>{isLoadingCompanies ? 'Loading...' : companyCount}</h3>
              <p>Công ty đang tuyển</p>
            </Card>
          </Col>
          <Col span={12} className='why-choose'>
            <Card
              style={{
                width: '115%',
                background: '#024CAA',
                color: 'white',
                fontSize: '14px',
              }}
            >
              Thị trường việc làm là nơi mua bán dịch vụ lao động, xác định mức
              độ có việc làm của lao động và mức độ tiền công. Thị trường việc
              làm hiện nay có nhiều công việc khác nhau, giúp người lao động tìm
              kiếm việc làm phù hợp1. Tính chung cả năm, thị trường lao động
              Việt Nam vẫn có nhiều điểm sáng, lực lượng lao động và thu nhập
              của người lao động đều tăng lên.
            </Card>
          </Col>
        </Row>
      </div>
      <div className='detail-home-3'></div>
    </div>
  )
}

export default JobMarketSection
