import { SearchOutlined } from '@ant-design/icons'
import './Company.scss'
import { useState } from 'react'
import { Card, Col, Image, Row } from 'antd'
import { useGetCompanyListQuery } from '../../features/company/companyApi'
import Container from '../../components/container'
import Whychose from '../../components/whychosewe'
import { Link } from 'react-router-dom'

function Company() {
  const [input, setInput] = useState('')
  const { data: companies = [], error, isLoading } = useGetCompanyListQuery()

  const handleSearch = () => {
    console.log('Tìm kiếm với:', input)
  }

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <div className='company'>
      <div className='intro'>
        <Row gutter={24}>
          <Col span={16}>
            <h1 className='slogan'>Khám phá 100+ công ty nổi bật</h1>
            <h2 className='slogan2'>
              Tra cứu thông tin công ty và tìm kiếm nơi làm việc tốt nhất dành
              cho bạn
            </h2>
            <div className='advanced-search'>
              <div className='search'>
                <div className='combined-input'>
                  <div className='input-with-icon'>
                    <SearchOutlined className='input-icon' />
                    <input
                      type='text'
                      placeholder='Vị trí tuyển dụng'
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                    />
                  </div>
                  <button className='button' onClick={handleSearch}>
                    Tìm kiếm
                  </button>
                </div>
              </div>
            </div>
          </Col>
          <Col span={8}>
            <div className='box-img'>
              <img
                src='https://static.topcv.vn/v4/image/brand-identity/company-billBoard.png?v=1.0.0'
                alt=''
                style={{ width: '200px', padding: '20px' }}
              />
            </div>
          </Col>
        </Row>
      </div>
      <Container>
        <div className='company-review'>
          <h2 className='intro-company'>DANH SÁCH CÁC CÔNG TY NỔI BẬT</h2>
          <div className='card-company'>
            <Row gutter={16}>
              {companies.map((company) => (
                <Col span={8} key={company.id}>
                  <Link to={`/companyDetail/${company.id}`}>
                    <Card
                      className='card-company'
                      style={{
                        height: '300px',
                        borderRadius: '20px',
                        overflow: 'hidden',
                        position: 'relative',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                        marginBottom: '15px',
                      }}
                    >
                      <Image
                        src={company.coverImage}
                        alt='Company Banner'
                        className='company-banner'
                        style={{
                          width: '350px',
                          height: '150px',
                          objectFit: 'cover',
                        }}
                      />
                      <div
                        className='company-info-container'
                        style={{
                          position: 'absolute',
                          bottom: '0',
                          left: '0',
                          right: '0',
                          padding: '10px',
                          background: 'rgba(255, 255, 255, 0.9)',
                        }}
                      >
                        <Image
                          src={company.logo}
                          alt='Company Logo'
                          className='company-logo'
                          style={{
                            width: '50px',
                            height: '50px',
                            borderRadius: '8px',
                            marginBottom: '5px',
                          }}
                        />
                        <div className='company-info'>
                          <p className='company-name'>{company.name}</p>
                          <p className='company-intro'>{company.intro}</p>
                        </div>
                      </div>
                    </Card>
                  </Link>
                </Col>
              ))}
            </Row>
          </div>
        </div>
        <Whychose />
      </Container>
    </div>
  )
}

export default Company
