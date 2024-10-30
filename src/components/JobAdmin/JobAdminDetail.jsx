import { Spin, Alert } from 'antd'
import { useParams } from 'react-router-dom'
import { useGetJobDetailQuery } from '../../features/job/jobApi'

const JobAdminDetail = () => {
  const { jobId } = useParams()
  const { data: job, error, isLoading } = useGetJobDetailQuery(jobId)

  if (isLoading) {
    return <Spin tip='Loading...' />
  }

  if (error) {
    return (
      <Alert
        message='Error'
        description='Failed to load jobs.'
        type='error'
        showIcon
      />
    )
  }

  return (
    <div>
      <h1>{job.title}</h1>
      <p>{job.description}</p>
      <p>Category: {job.category}</p>
      <p>Location: {job.location}</p>
      <p>Start Date: {job.dateStart}</p>
      <p>End Date: {job.dateEnd}</p>
      <p>Time Start: {job.timeStart}</p>
      <p>Duration: {job.duration} hours</p>
      <p>Payment Rate: {job.payment.payRate}</p>
      <p>Payment Method: {job.payment.paymentMethod}</p>
      <p>Status: {job.status}</p>
    </div>
  )
}

export default JobAdminDetail
