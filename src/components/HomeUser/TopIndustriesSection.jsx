import { Card, Image, Pagination } from 'antd'
import React, { useState } from 'react'
import './stylesHome/_home_4.scss'
import { useGetJobListQuery } from '../../features/job/jobApi'

function TopIndustriesSection() {
  const { data: jobs, error, isLoading } = useGetJobListQuery()
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 12

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  // Calculate the jobs to display on the current page
  const startIndex = (currentPage - 1) * pageSize
  const currentJobs = jobs.slice(startIndex, startIndex + pageSize)

  return (
    <div className='home-4'>
      <p className='title-2'>Top ngành nghề nổi bật</p>
      <div className='city-card'>
        <div className='job-grid'>
          {currentJobs.map((job) => (
            <Card
              key={job.id}
              className='city-card-mini'
              style={{
                width: '100%',
                height: '200px',
                borderRadius: '10px',
                overflow: 'hidden',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <Image
                src='https://www.topcv.vn/v4/image/welcome/top-categories/it-phan-mem.png?v=2'
                alt='Job Logo'
                style={{
                  borderRadius: '8px',
                  width: '120px',
                  marginBottom: '10px',
                }}
              />
              <div className='city-name'>
                <p style={{ margin: 0 }}>{job.title}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <Pagination
        current={currentPage}
        pageSize={pageSize}
        total={jobs.length}
        onChange={(page) => setCurrentPage(page)}
        style={{
          textAlign: 'center',
          marginTop: '20px',
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '20px'
        }}
      />
    </div>
  )
}

export default TopIndustriesSection
