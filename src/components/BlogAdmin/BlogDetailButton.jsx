import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'
// eslint-disable-next-line react/prop-types
export const BlogDetailButton = ({ record }) => {
  const nav = useNavigate()

  const handleDetailClick = () => {
    // eslint-disable-next-line react/prop-types
    nav(`/admin/blog/${record.id}`)
  }

  return (
    <Button color='primary' onClick={handleDetailClick}>
      Chi tiết
    </Button>
  )
}
