import React from 'react'
import './JobHeaderBanner.css' // Import the CSS file

const JobHeaderBanner = () => {
  return (
    <div className='search-banner-container'>
      {/* Decorative Squares */}
      <div className='square1'></div>
      <div className='square2'></div>
      <div className='square3'></div>
      <div className='square4'></div>
      <div className='square5'></div>

      {/* Main Content */}
      <div className='search-banner-content'>
        <h1 className='search-title'>Việc làm tốt nhất</h1>
        <p className='search-subtitle'>
          Tìm kiếm công việc mơ ước từ những cơ hội việc làm tốt nhất trên Job
          Match
        </p>
      </div>
    </div>
  )
}

export default JobHeaderBanner
