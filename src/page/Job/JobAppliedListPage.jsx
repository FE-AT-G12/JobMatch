import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../redux/features/userSlice'
import { useGetJobListQuery } from '../../features/job/jobApi'
import CustomLoading from '../../components/Loading/Loading'
import JobAppliedList from '../../components/Job/JobAppliedList'
function JobAppliedListPage() {
  const user = useSelector(selectUser)
  const { data, isLoading, isError, isSuccess } = useGetJobListQuery()
  if (isLoading) {
    return <CustomLoading />
  }
  if (isError) {
    return 'Có lỗi xảy ra'
  }
  if (isSuccess) {
    let clientJobs = data.filter((job) =>
      job.clientApplyId.some((id) => id === user.userId) ||
    job.clientId.some((id) => id === user.userId)
    )
    return <JobAppliedList jobs={clientJobs} userId={user.userId} />
  }
}

export default JobAppliedListPage
