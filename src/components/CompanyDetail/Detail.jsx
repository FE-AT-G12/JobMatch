import React from 'react'
import { useParams } from 'react-router-dom'
import Container from '../container'
import './Detail.scss'
import { Card, Row, Col, Avatar, Divider, Image, Button } from 'antd'
import { useGetCompanyListQuery } from '../../features/company/companyApi'
import { useGetJobListQuery } from '../../features/job/jobApi' // Import job API hook
import {
  EnvironmentOutlined,
  EyeOutlined,
  GlobalOutlined,
  ReadOutlined,
  TeamOutlined,
} from '@ant-design/icons'
import Whychose from '../whychosewe'

function ComDetail() {
  const { id } = useParams()
  const {
    data: companies = [],
    error: companyError,
    isLoading: companyLoading,
  } = useGetCompanyListQuery()
  const {
    data: jobList = [],
    error: jobError,
    isLoading: jobLoading,
  } = useGetJobListQuery()

  // Handle loading states for both company and job data
  if (companyLoading || jobLoading) return <div>Loading...</div>
  if (companyError || jobError)
    return <div>Error: {companyError?.message || jobError?.message}</div>

  // Find the company by ID
  const company = companies.find((company) => company.id == parseInt(id))

  if (!company) return <div>Company not found</div>

  // Filter jobs that match the company's name (or any other relevant condition)
  const currentJobs = jobList.filter((job) => job.cityjob === company.name)

  return (
    <div className='company-detail'>
      <Container>
        <div className='company-D1'>
          <Col span={24}>
            <Card
              title={
                <div
                  style={{
                    overflow: 'hidden',
                    position: 'relative',
                    height: '300px',
                  }}
                >
                  <img
                    alt={company.name}
                    src={company.coverImage}
                    style={{
                      width: '100%',
                      height: '400px',
                      objectFit: 'cover',
                      borderRadius: '8px',
                      border: '6px solid #fff',
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    }}
                  />
                </div>
              }
              bordered={false}
            >
              <div className='intro-company'>
                <div
                  className='logo-company'
                  style={{
                    position: 'relative',
                    top: '-50px',
                    textAlign: 'center',
                  }}
                >
                  <Avatar
                    size={100}
                    style={{
                      width: '150px',
                      height: '150px',
                      border: '3px solid white',
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    }}
                    src={company.logo}
                  />
                </div>
                <h2
                  style={{
                    marginTop: '-30px',
                    textAlign: 'center',
                    fontSize: '40px',
                    fontWeight: 'bold',
                  }}
                >
                  {company.name}
                </h2>
                <div className='intro-companise'>
                  <div className='global'>
                    <GlobalOutlined /> {company.http}
                  </div>
                  <div className='employee'>
                    <TeamOutlined />
                    {company.employee} nhân viên
                  </div>
                  <div className='follow'>
                    <EyeOutlined /> {company.follow} người theo dõi
                  </div>
                </div>
              </div>
            </Card>
          </Col>
        </div>

        <div
          className='detail-infor2'
          style={{ display: 'flex', marginTop: '50px', fontSize: '30px' }}
        >
          <div
            className='infor2-left-column'
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '800px',
              height: '100%',
            }}
          >
            <div className='infor2-intro' style={{ flex: 1 }}>
              <Card
                size='large'
                title='Giới thiệu công ty'
                style={{
                  backgroundColor: '#black',
                  fontSize: '20px',
                  height: '100%',
                }}
              >
                <p>{company.infor}</p>
                <p>{company.intro}</p>
              </Card>
            </div>

            <div
              className='infor2-job-company'
              style={{ marginTop: '30px', flex: 1 }}
            >
              <Card
                size='large'
                title='Tuyển dụng'
                style={{
                  backgroundColor: '#black',
                  fontSize: '20px',
                  height: '100%',
                }}
              >
                <div className='card-job-container'>
                  {currentJobs.map((job) => (
                    <div key={job.id} className='card-job'>
                      <Card
                        style={{
                          width: '760px',
                          height: '130px',
                          borderRadius: '10px',
                          overflow: 'hidden',
                          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        }}
                      >
                        <Row gutter={24}>
                          <Col span={8}>
                            <Image
                              src={job.companyLogo}
                              alt='Company Logo'
                              style={{ borderRadius: '8px' }}
                            />
                          </Col>
                          <Col span={16}>
                            <div className='job-infor'>
                              <p className='job-title text_ellipsis'>
                                {job.title}
                              </p>
                              <p className='job-city text_ellipsis'>
                                {job.cityjob}
                              </p>
                              <div className='box-footer'>
                                <div className='col-job-info'>
                                  <div className='salary'>
                                    <span className='text_ellipsis'>
                                      Trên {job.payment?.payRate || 'N/A'}
                                    </span>
                                  </div>
                                  <div className='address'>
                                    <span className='text_ellipsis'>
                                      {job.cityAddress}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <Button>Ứng Tuyển</Button>
                          </Col>
                        </Row>
                      </Card>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>

          <div className='infor2-address' style={{ marginLeft: '55px' }}>
            <Card
              size='large'
              title='Địa chỉ'
              style={{ width: 380, fontSize: '20px' }}
            >
              <p
                style={{
                  fontWeight: 'bold',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <EnvironmentOutlined style={{ marginRight: '8px' }} />
                Địa chỉ công ty
              </p>
              <p>{company.address}</p>
              <Divider style={{ borderColor: 'black' }} />
              <p
                style={{
                  fontWeight: 'bold',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <ReadOutlined style={{ marginRight: '8px' }} />
                Xem bản đồ
              </p>
              <div
                className='google-map'
                style={{ display: 'flex', justifyContent: 'center' }}
              >
                <iframe
                  src={company.ggmap}
                  width={280}
                  height={230}
                  style={{ border: 0 }}
                  allowFullScreen
                  loading='lazy'
                  referrerPolicy='no-referrer-when-downgrade'
                />
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default ComDetail
