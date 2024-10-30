import { useState } from 'react'
import './index.scss'
import { SearchOutlined, EnvironmentOutlined } from '@ant-design/icons'
import Container from '../../components/container'
import { Card, Col, Image, Row } from 'antd'

function HomePage() {
  const [input1, setInput1] = useState('')
  const [input2, setInput2] = useState('')

  const handleSearch = () => {
    console.log('Tìm kiếm với:', input1, input2)
  }

  const [selectedValue, setSelectedValue] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const options = ['TP Hồ Chí Minh', 'Hà Nội', 'Đà Nẵng']

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionClick = (value) => {
    setSelectedValue(value)
    setIsOpen(false)
  }

  return (
    <div className='home'>
      <div className='search'>
        <h1 className='slogan'>
          Tìm việc nhanh, kiếm tiền nhanh hơn với Job Match
        </h1>
        <div className='advanced-search'>
          <div className='search-group'>
            <div className='combined-input'>
              <div className='input-with-icon'>
                <SearchOutlined className='input-icon' />
                <input
                  type='text'
                  placeholder='Vị trí tuyển dụng'
                  value={input1}
                  onChange={(e) => setInput1(e.target.value)}
                />
              </div>
              <div className='input-with-icon'>
                <EnvironmentOutlined className='input-icon' />
                <input
                  type='text'
                  placeholder='Tất cả địa điểm'
                  value={input2}
                  onChange={(e) => setInput2(e.target.value)}
                />
              </div>
              <button className='button' onClick={handleSearch}>
                Tìm kiếm
              </button>
            </div>
          </div>
        </div>
      </div>
      <Container>
        <div className='home-1'>
          <p className='title-1'>Việc làm tốt nhất</p>
          <div className='search-dropdown'>
            <div className='search-input' onClick={toggleDropdown}>
              <p style={{ fontSize: '12px', color: '#ccc', display: 'flex' }}>
                Lọc theo:
              </p>
              <input
                type='text'
                placeholder='Tìm kiếm'
                value={selectedValue}
                readOnly
              />
              <span className='dropdown-icon'>&#9662;</span>{' '}
            </div>

            {isOpen && (
              <ul className='dropdown-menu'>
                {options.map((option) => (
                  <li key={option} onClick={() => handleOptionClick(option)}>
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className='card-job-container'>
            <div className='card-job'>
              <Card
                style={{
                  width: '350px',
                  height: '130px',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                }}
              >
                <Row gutter={24}>
                  <Col span={8}>
                    <Image
                      src='https://cdn-new.topcv.vn/unsafe/200x/https://static.topcv.vn/company_logos/K9hlB0pDtVpRC9elc14iq1SNexOr7U5B_1667203677____688db856bdf7857dea3a900a7f87a2f6.png'
                      alt='Company Logo'
                      style={{ borderRadius: '8px' }}
                      readOnly
                    />
                  </Col>
                  <Col span={16}>
                    <div className='job-infor'>
                      <p className='job-title text_ellipsis'>Bán thời gian</p>
                      <p className='job-city text_ellipsis'>Công ty Hòa Bình</p>
                      <div className='box-footer'>
                        <div className='col-job-info'>
                          <div className='salary'>
                            <span className='text_ellipsis'>6 - 10 triệu</span>
                          </div>
                          <div className='address' title='Hà Nội: Ba Đình'>
                            <span className='text_ellipsis'>Hà Nội</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Card>
            </div>
          </div>
        </div>
        <div className='home-2'>
          <p className='title-2'>Công ty hàng đầu</p>
          <div className='city-card'>
            <Card
              className='city-card-mini'
              style={{
                width: '350px',
                height: '180px',
                borderRadius: '10px',
                overflow: 'hidden',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                display: 'flex', // Use Flexbox
                flexDirection: 'column', // Stack items vertically
                justifyContent: 'center', // Center items vertically
                alignItems: 'center', // Center items horizontally
                textAlign: 'center', // Center text
              }}
            >
              <Image
                src='https://cdn-new.topcv.vn/unsafe/200x/https://static.topcv.vn/company_logos/K9hlB0pDtVpRC9elc14iq1SNexOr7U5B_1667203677____688db856bdf7857dea3a900a7f87a2f6.png'
                alt='Company Logo'
                style={{
                  borderRadius: '8px',
                  width: '120px',
                  marginBottom: '10px', // Add space below the image
                }}
                readOnly
              />
              <div className='city-name'>
                <p style={{ margin: 0 }}>Công ty Hòa Bình Hà Nội</p>{' '}
                {/* Remove default margin */}
              </div>
            </Card>
          </div>
        </div>
        <div className='home-3'>
          <p className='title-3'>Thị trường việc làm</p>
          <div className='image-home-3'>
            <Row gutter={24}>
              <Col span={8}>
                <Image src='https://th.bing.com/th/id/OIP.YJxJDchzoC4HJLsD4lnQLgHaEK?rs=1&pid=ImgDetMain' />
              </Col>
              <Col span={16}></Col>
            </Row>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default HomePage
