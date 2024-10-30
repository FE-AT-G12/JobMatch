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
      {job && (
        <>
          <h1>Title: {job.data.title}</h1>
          <p>Decription: {job.data.description}</p>
          <p>Category: {job.data.category}</p>
          <p>Location: {job.data.location}</p>
          <p>Start Date: {job.data.dateStart}</p>
          <p>End Date: {job.data.dateEnd}</p>
          <p>Time Start: {job.data.timeStart}</p>
          <p>Duration: {job.data.duration} hours</p>
          <p>Payment Rate: {job.data.payment.payRate}</p>
          <p>Payment Method: {job.data.payment.paymentMethod}</p>
          <p>Status: {job.data.status}</p>
        </>
      )}
    </div>
  )
}

export default JobAdminDetail
