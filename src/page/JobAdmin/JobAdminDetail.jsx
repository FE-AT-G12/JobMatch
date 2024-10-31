import JobAdminDetail from '../../components/JobAdmin/JobAdminDetail'
import JobUpdateButton from '../../components/JobAdmin/JobUpdateButton.jsx'
import DeleteJobButton from '../../components/JobAdmin/JobDeleteButton'
export default function JobDetail() {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '10px',
          width: '25%',
        }}
      >
        <JobUpdateButton />
        <DeleteJobButton />
      </div>
      <div>
        <JobAdminDetail />
      </div>
    </div>
  )
}
