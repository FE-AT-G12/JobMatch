import React from 'react'
import './HandbookUser.scss'
import Orientation from '../../components/Handbook/Orientation'
import Jobmarket from '../../components/Handbook/Jobmarket'
import Container from '../../components/container'
import Whychose from '../../components/whychosewe'

function HandbookUser() {
  return (
    <div className='handbook'>
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
        <div className='handbook-1'>
          <Orientation />
        </div>
        <div className='handbook-2'>
          <Jobmarket />
        </div>
        <Whychose />
      </Container>
    </div>
  )
}

export default HandbookUser
