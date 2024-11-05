import { Carousel, Card, Image } from 'antd'
import { useGetCompanyListQuery } from '../../features/company/companyApi'
import './stylesHome/_home_2.scss'

function TopCompaniesSection() {
  const { data: companies, error, isLoading } = useGetCompanyListQuery()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <div className='home-2'>
      <p className='title-2'>Công ty hàng đầu</p>
      <Carousel autoplay dots={false} slidesToShow={3} slidesToScroll={1}>
        {companies.map((company) => (
          <div key={company.id} className='city-card'>
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
                src={company.logo}
                alt='Company Logo'
                style={{
                  borderRadius: '8px',
                  width: '120px',
                  marginBottom: '10px',
                }}
              />
              <div className='city-name'>
                <p style={{ margin: 0 }}>{company.name}</p>
              </div>
            </Card>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default TopCompaniesSection
