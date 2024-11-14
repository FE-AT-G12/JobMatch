import { Carousel, Card, Image } from 'antd'
import { Link } from 'react-router-dom'
import { useGetCompanyListQuery } from '../../features/company/companyApi'
import './stylesHome/_home_2.scss'
import { useState, useEffect } from 'react'

function TopCompaniesSection() {
  const { data: companies, error, isLoading } = useGetCompanyListQuery()
  const [slidesToShow, setSlidesToShow] = useState(3)

  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth < 768) setSlidesToShow(1)
      else if (window.innerWidth < 1024) setSlidesToShow(2)
      else setSlidesToShow(3)
    }

    updateSlidesToShow()
    window.addEventListener('resize', updateSlidesToShow)

    return () => {
      window.removeEventListener('resize', updateSlidesToShow)
    }
  }, [])

  if (isLoading) return <div className='loading'>Loading...</div>
  if (error) return <div className='error'>Error: Unable to load companies</div>

  return (
    <div className='home-2'>
      <p className='title-2'>Công ty hàng đầu</p>
      <Carousel
        autoplay
        dots={false}
        slidesToShow={slidesToShow}
        slidesToScroll={1}
      >
        {companies.map((company) => (
          <div key={company.id} className='city-card'>
            <Link to={`/companyDetail/${company.id}`}>
              <Card
                className='city-card-mini'
                style={{
                  width: '350px',
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
                  src={company.logo}
                  alt='Company Logo'
                  style={{
                    borderRadius: '8px',
                    width: '120px',
                    marginBottom: '10px',
                  }}
                />
                <div className='city-name'>
                  <p style={{ margin: 0, textDecoration: 'none' }}>
                    {company.name}
                  </p>
                </div>
              </Card>
            </Link>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default TopCompaniesSection
