import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'
export const CompanyDetailButton = ({ record }) => {
  const nav = useNavigate()

  const handleDetailClick = () => {
    nav(`/admin/company/${record.id}`)
  }

  return (
    <Button color='primary' variant='outlined' onClick={handleDetailClick}>
      Chi tiết
    </Button>
  )
}
export default CompanyDetailButton
