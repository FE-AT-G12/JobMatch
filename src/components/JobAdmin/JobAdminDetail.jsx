import { Spin, Alert, Typography, Card } from 'antd'
import { useParams } from 'react-router-dom'
import { useGetJobDetailQuery } from '../../features/job/jobApi'
import DeleteJobButton from '../../components/JobAdmin/JobDeleteButton'

const { Title, Text } = Typography

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
    <div
      style={{
        marginTop: '35px',
        display: 'flex',
        justifyContent: 'space-around',
      }}
    >
      <div>
        {job && (
          <Card
            style={{
              width: '500px',
            }}
          >
            <div>
              <Title level={1}>{job.data.title}</Title>
              <div style={{ marginBottom: '10px' }}>
                <Text strong>Miêu tả:</Text>{' '}
                <Text>{job.data.description}</Text>
              </div>
              <div style={{ marginBottom: '10px' }}>
                <Text strong>Danh mục:</Text> <Text>{job.data.category}</Text>
              </div>
              <div style={{ marginBottom: '10px' }}>
                <Text strong>Vị trí:</Text> <Text>{job.data.location}</Text>
              </div>
              <div style={{ marginBottom: '10px' }}>
                <Text strong>Ngày bắt đầu:</Text>{' '}
                <Text>{job.data.dateStart}</Text>
              </div>
              <div style={{ marginBottom: '10px' }}>
                <Text strong>Ngày kết thúc:</Text> <Text>{job.data.dateEnd}</Text>
              </div>
              <div style={{ marginBottom: '10px' }}>
                <Text strong>Thời gian bắt đầu:</Text>{' '}
                <Text>{job.data.timeStart}</Text>
              </div>
              <div style={{ marginBottom: '10px' }}>
                <Text strong>Thời lượng làm việc:</Text>{' '}
                <Text>{job.data.duration} hours</Text>
              </div>
              <div style={{ marginBottom: '10px' }}>
                <Text strong>Lương:</Text>{' '}
                <Text>{job.data.payment.payRate}</Text>
              </div>
              <div style={{ marginBottom: '10px' }}>
                <Text strong>Thanh toán bằng:</Text>{' '}
                <Text>{job.data.payment.paymentMethod}</Text>
              </div>
              <div style={{ marginBottom: '10px' }}>
                <Text strong>Trạng thái:</Text> <Text>{job.data.status}</Text>
              </div>
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'flex-end'
            }}>
              <DeleteJobButton />
            </div>
          </Card>
        )}
      </div>
    </div>
  )
}

export default JobAdminDetail
