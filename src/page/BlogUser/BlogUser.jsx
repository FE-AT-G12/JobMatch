import React from 'react'
import './HandbookUser.scss'
import Blog from '../../components/Blog/Blog'
import Container from '../../components/container'
import BannerBlog from '../../components/BannerBlog/BannerBlog'

export default function BlogUser() {
  return (
    <div className='handbook'>
      <BannerBlog />
      <Container>
        <div className='handbook-1'>
          <Blog />
        </div>
      </Container>
    </div>
  )
}
