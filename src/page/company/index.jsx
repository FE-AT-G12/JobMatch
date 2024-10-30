import { SearchOutlined } from '@ant-design/icons'
import './index.scss'
import { useEffect, useState } from 'react'
import { Card, Col, Image, Row } from 'antd'
import axios from 'axios'
import Container from '../../components/container'
import Whychose from '../../components/whychosewe'

function Company() {
  const [input, setInput] = useState('')
  const [companies, setCompanies] = useState([])

  const handleSearch = () => {
    console.log('Tìm kiếm với:', input)
  }

  useEffect(() => {
    axios
      .get('http://localhost:3000/companies')
      .then((response) => {
        setCompanies(response.data)
      })
      .catch((error) => {
        console.error('Error fetching companies:', error)
      })
  }, [])

  return (
    <div className='company'>
      <div className='intro'>
        <Row gutter={24}>
          <Col span={16}>
            <h1 className='slogan'>Khám phá 100+ công ty nổi bậc</h1>
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
                  <Card
                    className='card-company'
                    style={{
                      height: '300px',
                      borderRadius: '20px',
                      overflow: 'hidden',
                      position: 'relative',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                    }}
                  >
                    {/* Banner positioned absolutely */}
                    <Image
                      src={company.coverImage}
                      alt='Company Banner'
                      className='company-banner'
                    />

                    {/* Logo and Details positioned at the bottom */}
                    <div className='company-info-container'>
                      <Image
                        src={company.logo}
                        alt='Company Logo'
                        className='company-logo'
                      />
                      <div className='company-info'>
                        <p className='company-name'>{company.name}</p>
                        <p className='company-intro'>{company.intro}</p>
                      </div>
                    </div>
                  </Card>
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
