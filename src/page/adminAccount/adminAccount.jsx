import React from 'react'
import { useGetUserListQuery } from '../../features/user/userApi'
import AccountAdmin from '../../components/AdminAccount/accountAdmin'
export default function adminAccount() {
  const { data, error, isLoading } = useGetUserListQuery()
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>
  return (
    <div>
      <AccountAdmin />
    </div>
  )
}
