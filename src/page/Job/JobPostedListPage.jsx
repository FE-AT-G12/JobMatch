import React, { useState } from 'react'
import JobPostedList from '../../components/Job/JobPostedList'
import { useSelector } from 'react-redux'
import { selectUser } from '../../redux/features/userSlice'
import { useGetJobListByHirerIdQuery } from '../../features/job/jobApi'
import CustomLoading from '../../components/Loading/Loading'
function JobPostedListPage() {
  const user = useSelector(selectUser)
  const { data, isLoading, isError } = useGetJobListByHirerIdQuery(user.userId)
  if (isLoading) {
    return <CustomLoading />
  }
  if (isError) {
    return 'Có lỗi xảy ra'
  }
  return <JobPostedList jobs={data} />
}

export default JobPostedListPage
