import { useSelector } from 'react-redux'
import NoPermission from './NoPermission'
import { selectUser } from '../../redux/features/userSlice'

const PermissionCheck = ({ children, protectedRole }) => {
  const user = useSelector(selectUser)
  if (!protectedRole) return children
  if (user) {
    if (protectedRole.some((role) => user.role === role)) {
      return children
    }
    return <NoPermission />
  } else {
    return <NoPermission />
  }
}

export default PermissionCheck
