import { LoadingOutlined } from '@ant-design/icons'
import { Flex } from 'antd'
import React from 'react'

function CustomLoading() {
  return (
    <Flex justify='center' align='center'  style={{width: '100%', minHeight: '100vh'}}>
        <LoadingOutlined style={{fontSize: '50px'}} />
    </Flex>
  )
}

export default CustomLoading