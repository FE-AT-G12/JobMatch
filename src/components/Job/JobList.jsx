import { EnvironmentOutlined, SearchOutlined } from '@ant-design/icons'
import {
  Button,
  Col,
  Divider,
  Flex,
  Input,
  Row,
  Select,
  Typography,
  Pagination,
} from 'antd'
import React, { useState, useEffect } from 'react'
import { useGetCityListQuery } from '../../features/city/cityApi'
import CustomLoading from '../Loading/Loading'
import JobCard from './JobCard'
import { useGetJobListQuery } from '../../features/job/jobApi'
import { scrollToTop } from '../../utils/scrollToTop'
import { getCityByAddress } from '../../utils/getCity'

function JobList() {
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(8)
  const [titleFilter, setTitleFilter] = useState('') // State for title filter
  const [cityFilter, setCityFilter] = useState([]) // State for city filter
  const [filteredJobs, setFilteredJobs] = useState([]) // State for filtered jobs

  const {
    data: cityData,
    isSuccess: isGetCitySuccess,
    isLoading: cityLoading,
  } = useGetCityListQuery()
  const { data: jobs, isLoading: jobsLoading } = useGetJobListQuery()

  useEffect(() => {
    if (jobs && !jobsLoading) {
      setFilteredJobs(jobs?.filter((job) => job.status === 'Đang tuyển')) // Initialize with all jobs when jobs are first loaded
    }
  }, [jobs, jobsLoading])

  if (cityLoading || jobsLoading) {
    return <CustomLoading />
  }

  let cityOptions
  if (isGetCitySuccess) {
    cityOptions = cityData.map((city) => ({
      label: city.name,
      value: city.name,
    }))
  }

  const handleFilter = () => {
    // Apply the filters to jobs when "Tìm kiếm" button is clicked
    const filtered = jobs.filter((job) => {
      if (job.status !== 'Đang tuyển') return false
      const matchesTitle =
        titleFilter === '' ||
        job.title
          .trim()
          .toLowerCase()
          .includes(titleFilter.trim().toLowerCase())
      const matchesCity =
        cityFilter.length === 0 ||
        cityFilter.some((city) => getCityByAddress(job.location).includes(city))
      return matchesTitle && matchesCity
    })
    setFilteredJobs(filtered) // Update filtered jobs list
    setCurrentPage(1) // Reset to first page
  }
  const handleResetFilter = () => {
    setTitleFilter('')
    setCityFilter([])
    setFilteredJobs(jobs?.filter((job) => job.status === 'Đang tuyển'))
  }

  const onPageChange = (page, pageSize) => {
    setCurrentPage(page)
    setPageSize(pageSize)
    scrollToTop()
  }

  const startIndex = (currentPage - 1) * pageSize
  const endIndex = startIndex + pageSize
  const jobsData = filteredJobs.slice(startIndex, endIndex) // Paginate filtered jobs

  return (
    <Row>
      <Col
        span={12}
        offset={6}
        style={{
          backgroundColor: '#fff',
          borderRadius: 8,
          marginTop: -34,
          height: '70px',
          boxShadow: '-1px 1px 9px 2px rgba(63,167,242,0.1)',
          padding: '10px 30px',
        }}
      >
        <Flex
          align='center'
          gap={8}
          split={<Divider type='vertical' />}
          style={{ height: '100%', width: '100%' }}
        >
          {/* Title Filter Input */}
          <Flex gap='middle' flex={1}>
            <SearchOutlined style={{ color: '#024caa', fontSize: 20 }} />
            <Input
              placeholder='Tìm kiếm công việc'
              style={{
                fontSize: 18,
                border: 'none',
                outline: 'none',
                padding: '8px',
                width: '100%',
              }}
              value={titleFilter}
              onChange={(e) => setTitleFilter(e.target.value)}
            />
          </Flex>
          <Divider type='vertical' style={{ height: '50%' }} />

          {/* City Filter Select */}
          <Flex gap={'middle'} flex={1}>
            <EnvironmentOutlined style={{ color: '#024caa', fontSize: 20 }} />
            <Select
              allowClear
              mode='multiple'
              showSearch
              size='large'
              style={{ flexGrow: 1 }}
              maxTagCount={2}
              placeholder='Tỉnh và thành phố'
              options={cityOptions}
              value={cityFilter}
              onChange={(value) => setCityFilter(value)}
            />
          </Flex>

          {/* Search Button */}
          <Flex style={{ height: '100%' }} gap={8}>
            <Button
              style={{
                color: 'black',
                height: '100%',
                width: '100%',
                fontSize: 16,
                fontWeight: 500,
                border: '1px solid #024caa',
              }}
              onClick={handleResetFilter} // Trigger filtering only on button click
            >
              Hủy lọc
            </Button>
            <Button
              style={{
                color: '#fff',
                backgroundColor: '#024caa',
                height: '100%',
                width: '100%',
                fontSize: 16,
                fontWeight: 500,
              }}
              onClick={handleFilter} // Trigger filtering only on button click
            >
              Tìm kiếm
            </Button>
          </Flex>
        </Flex>
      </Col>

      {/* Job Listings */}
      <Col span={16} offset={4}>
        {filteredJobs && filteredJobs.length !== 0 ? (
          <>
            {jobsData.map((job) => (
              <JobCard key={job.id} job={job} showListClient={false}/>
            ))}
            <Pagination
              current={currentPage}
              pageSize={pageSize}
              total={filteredJobs.length}
              onChange={onPageChange}
              style={{ marginTop: '20px', textAlign: 'center' }}
            />
          </>
        ) : (
          <Flex align='center' vertical>
            <img
              style={{ width: '30%', mixBlendMode: 'darken' }}
              src='/public/empty-folder.png'
            />
            <Typography.Title level={2} align='center'>
              Hiện tại chưa có công việc nào được đăng tải!
            </Typography.Title>
          </Flex>
        )}
      </Col>
    </Row>
  )
}

export default JobList
