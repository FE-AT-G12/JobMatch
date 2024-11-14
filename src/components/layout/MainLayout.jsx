import { useState } from 'react'
//import Footer from "../footer";
import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'
import Header from '../header/Header'
import Footer from '../footer'

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
      <Content style={{ margin: '', overflow: 'initial' }}>
        <Outlet />
      </Content>
      <Footer />
    </Layout>
  )
}

export default MainLayout
