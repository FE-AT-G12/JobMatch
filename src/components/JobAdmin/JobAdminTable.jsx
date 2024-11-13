import { Table, Spin, Alert } from 'antd'
import { useGetJobListQuery } from '../../features/job/jobApi'
import { collumn } from './data'

const JobAdminTable = () => {
  const { data, error, isLoading } = useGetJobListQuery()
  const dataWithIndex = data?.map((job, index) => ({
    id: job.id,
    ...job,
    index: index + 1,
  }))

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

  return <Table dataSource={dataWithIndex || []} columns={collumn} />
}

export default JobAdminTable
