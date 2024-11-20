import { Menu } from 'antd'
import { dataItems } from './data'
import LogOut from '../LogOutButton/logOut'
export default function SideBarAdmin() {
  return (
    <>

      <Menu defaultSelectedKeys={['1']} items={dataItems} />
      <LogOut />
    </>
  )
}
