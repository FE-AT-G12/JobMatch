import React from 'react'
import './HandbookUser.scss'
import BlogDetail from '../../components/Blog/BlogDetail'
import Container from '../../components/container'
import Whychose from '../../components/whychosewe'
import BannerBlog from '../../components/BannerBlog/BannerBlog'

export default function BlogUserDetail() {
  return (
    <div className='handbook-detail'>
      <BannerBlog />
      <Container>
        {' '}
        <div>
          <BlogDetail />
        </div>
      </Container>
    </div>
  )
}
