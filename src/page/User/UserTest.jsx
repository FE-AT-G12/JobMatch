import { useGetUserListQuery } from '../../features/user/userApi'

export default function UserTest() {
  const { data, error, isLoading } = useGetUserListQuery()
  console.log(data)

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}
