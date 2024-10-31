import { useState } from 'react'
import Container from '../../components/container'
import SearchSection from '../../components/HomeUser/SearchSection'
import JobListSection from '../../components/HomeUser/JobListSection'
import TopCompaniesSection from '../../components/HomeUser/TopCompaniesSection'
import JobMarketSection from '../../components/HomeUser/JobMarketSection'
import TopIndustriesSection from '../../components/HomeUser/TopIndustriesSection'
import Whychose from '../../components/whychosewe'

function HomePage() {
  const [input1, setInput1] = useState('')
  const [input2, setInput2] = useState('')
  const [selectedValue, setSelectedValue] = useState('')

  return (
    <div className='home'>
      <SearchSection
        input1={input1}
        setInput1={setInput1}
        input2={input2}
        setInput2={setInput2}
      />
      <Container>
        <JobListSection
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
        />
        <TopCompaniesSection />
        <JobMarketSection />
        <TopIndustriesSection />
        <Whychose />
      </Container>
    </div>
  )
}

export default HomePage
