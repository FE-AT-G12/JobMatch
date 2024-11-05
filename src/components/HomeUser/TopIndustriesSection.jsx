import { Card, Image } from 'antd'
import './stylesHome/_home_4.scss'

function TopIndustriesSection() {
  return (
    <div className='home-4'>
      <p className='title-2'>Top ngành nghề nổi bật</p>
      <div className='city-card'>
        <Card
          className='city-card-mini'
          style={{
            width: '350px',
            height: '200px',
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
            src='https://www.topcv.vn/v4/image/welcome/top-categories/it-phan-mem.png?v=2'
            alt='Company Logo'
            style={{
              borderRadius: '8px',
              width: '120px',
              marginBottom: '10px', // Add space below the image
            }}
            readOnly
          />
          <div className='city-name'>
            <p style={{ margin: 0 }}>Nhân viên bán thời gian</p>{' '}
            {/* Remove default margin */}
          </div>
        </Card>
      </div>
    </div>
  )
}

export default TopIndustriesSection
