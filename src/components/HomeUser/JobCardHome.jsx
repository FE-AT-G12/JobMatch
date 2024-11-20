import React from 'react'
import PropTypes from 'prop-types'
import { Card, Row, Col } from 'antd'
import { getCityByAddress } from '../../utils/getCity'
import './stylesHome/_home_1.scss'
import { Link } from 'react-router-dom'

const JobCardHome = ({ jobs }) => {
  return (
    <div>
      <div className='title-1'>Việc làm tốt nhất</div>
      <div className='card-job-container'>
        {jobs.map((job) => (
          <div key={job.id} className='card-job'>
            <Link to={`/job/${job.id}`}>
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
                    <img
                      src={job.companyLogo}
                      alt='Company Logo'
                      style={{ borderRadius: '8px', width: '100%' }}
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
                              {getCityByAddress(job.location)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Card>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

JobCardHome.propTypes = {
  jobs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      companyLogo: PropTypes.string,
      title: PropTypes.string.isRequired,
      cityjob: PropTypes.string,
      location: PropTypes.string,
      payment: PropTypes.shape({
        payRate: PropTypes.string,
      }),
    })
  ),
}

JobCardHome.defaultProps = {
  jobs: [],
}

export default JobCardHome
