import JobAdminTable from '../../components/JobAdmin/JobAdminTable'
import JobAddButton from '../../components/JobAdmin/JobAddButton'

export default function JobAdmin() {
  return (
    <div>
      <div>
        <JobAddButton />
      </div>
      <div>
        <JobAdminTable />
      </div>
    </div>
  )
}
