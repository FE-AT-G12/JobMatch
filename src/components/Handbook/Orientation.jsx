import React from 'react'
import './Orientation.scss'
import { Card, Divider } from 'antd' // Import Divider from Ant Design
import { Link } from 'react-router-dom' // Ensure you import Link from react-router-dom
import { useGetHandbookListQuery } from '../../features/handbook/Handbook'

function Orientation() {
  const { data: handbook = [], error, isLoading } = useGetHandbookListQuery()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <div className='hand-book-1'>
      <div className='card-handbook'>
        <h2>Định hướng nghề nghiệp</h2>
      </div>
      <div className='card-orientation'>
        {handbook.length > 0 ? (
          handbook.map((handbookItem, index) => (
            <div key={index}>
              <Link to={`/handbook-detail/${handbookItem.id}`}>
                <Card
                  style={{ width: '100%', background: 'rgba(0, 0, 0, 0)' }}
                  className='card-container'
                >
                  <div className='card-content'>
                    <div className='describe-title'>
                      <p className='title'>{handbookItem.title}</p>
                      <p className='description'>{handbookItem.describe_1}</p>
                    </div>
                    <div className='image-container'>
                      <img
                        src={handbookItem.imghandbook}
                        alt='Handbook'
                        className='handbook-image'
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
          <div>No handbook data available</div>
        )}
      </div>
    </div>
  )
}

export default Orientation
