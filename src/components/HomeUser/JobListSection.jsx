import { useState } from 'react'
import { Card, Pagination, Row, Col, Image } from 'antd'
import { useGetJobListQuery } from '../../features/job/jobApi'
import './stylesHome/_home_1.scss'

function JobListSection({ selectedValue, setSelectedValue }) {
  const { data: jobList = [], error, isLoading } = useGetJobListQuery()
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 9

  const indexOfLastJob = currentPage * pageSize
  const indexOfFirstJob = indexOfLastJob - pageSize
  const currentJobs = jobList.slice(indexOfFirstJob, indexOfLastJob)

  const [isOpen, setIsOpen] = useState(false)
  const options = ['TP Hồ Chí Minh', 'Hà Nội', 'Đà Nẵng']

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionClick = (value) => {
    setSelectedValue(value)
    setIsOpen(false)
  }
  const handlePageChange = (page) => {
    setCurrentPage(page)
  }
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
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
          <span className='dropdown-icon'>&#9662;</span>
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
        {currentJobs.map((job) => (
          <div key={job.jobId} className='card-job'>
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
                    src={job.companyLogo}
                    alt='Company Logo'
                    style={{ borderRadius: '8px' }}
                  />
                </Col>
                <Col span={16}>
                  <div className='job-infor'>
                    <p className='job-title text_ellipsis'>{job.title}</p>
                    <p className='job-city text_ellipsis'>{job.cityjob}</p>
                    <div className='box-footer'>
                      <div className='col-job-info'>
                        <div className='salary'>
                          <span className='text_ellipsis'>
                            {job.payment?.payRate || 'N/A'}
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
                </Col>
              </Row>
            </Card>
          </div>
        ))}
      </div>
      <Pagination
        current={currentPage}
        pageSize={pageSize}
        total={jobList.length}
        onChange={handlePageChange}
        style={{
          textAlign: 'center',
          marginTop: '20px',
          display: 'flex',
          justifyContent: 'center',
        }}
      />
    </div>
  )
}

export default JobListSection
