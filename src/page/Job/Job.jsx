import { useGetJobListQuery } from '../../features/job/jobApi'

export default function Job() {
  const { data, error, isLoading } = useGetJobListQuery()
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>
  console.log(data)
  return (
    <div>
      {data.map(job => (
        <div key={job.id}>{job.title}</div>
      ))}
    </div>
  )
}