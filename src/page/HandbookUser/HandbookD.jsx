import React from 'react'
import './HandbookUser.scss'
import HandbookDetail from '../../components/Handbook/HandbookDetail'
import Container from '../../components/container'
import Whychose from '../../components/whychosewe'

function HandbookD() {
  return (
    <div className='handbook-detail'>
      <div className='baner-handbook'>
        <div className='intro'>
          <p className='intro-1'>Cẩm nang nghề nghiệp</p>
          <p className='intro-handbook'>
            Khám phá thông tin hữu ích liên quan tới nghề nghiệp bạn quan tâm.
            Chia sẻ kinh nghiệm, kiến thức
            <br /> chuyên môn giúp bạn tìm được công việc phù hợp và phát triển
            bản thân.
          </p>
        </div>
      </div>
      <Container>
        {' '}
        <div>
          <HandbookDetail />
        </div>
      </Container>
    </div>
  )
}

export default HandbookD
