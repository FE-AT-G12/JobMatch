import { LoadingOutlined } from '@ant-design/icons'
import { Flex } from 'antd'
import React from 'react'

function ModalLoading() {
  return (
    <Flex
      justify='center'
      align='center'
      style={{
        position: 'absolute',
        zIndex: '999',
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(255,255,255,0.6)',
      }}
    >
      <LoadingOutlined style={{ fontSize: '50px' }} />
    </Flex>
  )
}

export default ModalLoading
