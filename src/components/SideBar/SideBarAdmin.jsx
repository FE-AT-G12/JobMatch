import { Menu } from 'antd'
import { dataItems } from './data'
export default function SideBarAdmin() {
  return <Menu defaultSelectedKeys={['1']} items={dataItems} />
}
