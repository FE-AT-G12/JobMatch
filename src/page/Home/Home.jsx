import Container from '../../components/container'

import JobListSection from '../../components/HomeUser/JobListSection'
import TopCompaniesSection from '../../components/HomeUser/TopCompaniesSection'
import JobMarketSection from '../../components/HomeUser/JobMarketSection'
import TopIndustriesSection from '../../components/HomeUser/TopIndustriesSection'
import HomeHeaderbaner from '../../components/HomeUser/HomeHeaderbaner'

function HomePage() {
  return (
    <div className='home'>
      <HomeHeaderbaner />
      <JobListSection />
      <Container>
        <TopCompaniesSection />
        <JobMarketSection />
        <TopIndustriesSection />
      </Container>
    </div>
  )
}

export default HomePage
