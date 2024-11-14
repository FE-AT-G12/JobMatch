import React from 'react'
import './Jobmarket.scss'
import { Card, Divider } from 'antd'
import { Link } from 'react-router-dom' // Ensure Link is imported
import { useGetMarketjobListQuery } from '../../features/handbook/Marketjob'

function Jobmarket() {
  const { data: marketjob = [], error, isLoading } = useGetMarketjobListQuery()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <div className='marketjob'>
      <div className='title-marketjob'>
        <h2>Thị trường và xu hướng tuyển dụng</h2>
      </div>
      <div className='card-marketjob'>
        {marketjob.length > 0 ? (
          marketjob.map((marketjobItem, index) => (
            <div key={index}>
              <Link to={`/handbook-detail/${marketjobItem.id}`}>
                <Card
                  style={{ width: '100%', background: 'rgba(0, 0, 0, 0)' }}
                  className='card-container'
                >
                  <div className='card-content'>
                    <div className='describe-title'>
                      <p className='title'>{marketjobItem.title}</p>
                      <p className='description'>{marketjobItem.describe}</p>
                    </div>
                    <div className='image-container'>
                      {/* Ensure imgmarket has a valid URL */}
                      <img
                        src={marketjobItem.imgmarket || '/default-image.jpg'} // Fallback image if missing
                        alt='Marketjob'
                        className='marketjob-image'
                      />
                    </div>
                  </div>
                </Card>
              </Link>
              <Divider
                style={{
                  borderColor: '#ccc',
                  width: '70%',
                  margin: '10px auto',
                }}
              />
            </div>
          ))
        ) : (
          <div>No marketjobs data available</div>
        )}
      </div>
    </div>
  )
}

export default Jobmarket
