import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import SideBarAdmin from '../SideBar/SideBarAdmin'
import { Layout, Button } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
const { Sider, Header, Content } = Layout
export default function AdminLayout() {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <div>
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          style={{
            minHeight: '100vh',
            background: '#fff',
          }}
        >
          <SideBarAdmin />
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: '#fff',
            }}
          >
            <Button
              type='text'
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
              }}
            />
          </Header>
          <Content
            style={{
              minHeight: '90vh',
              overflow: 'initial',
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </div>
  )
}
