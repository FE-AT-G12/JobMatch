import { Row, Col, Image } from 'antd'
import './stylesHome/_home_3.scss'

function JobMarketSection() {
  return (
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
      <div className='detail-home-3'></div>
    </div>
  )
}

export default JobMarketSection
