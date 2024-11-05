import { useState } from 'react'
//import Footer from "../footer";
import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'
import Header from '../header/Header'

const { Content } = Layout

function MainLayout() {
  const [quantity, setQuantity] = useState()
  return (
    <Layout
      style={{
        minHeight: '100vh',
        overflow: 'hidden',
      }}
    >
      <Header quantity={quantity} setQuantity={setQuantity} />
      <Layout>
        <Content style={{ margin: '', overflow: 'initial' }}>
          <div
            style={{
              paddingLeft: 100,
              paddingRight: 100,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}

export default MainLayout
