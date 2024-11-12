import { Flex, Typography } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

function EmptyJobList() {
  return (
    <Flex justify='center' vertical align='center'>
      <img src='/public/empty-folder.png' width={408} draggable={false} />
      <Typography.Title level={4}>
        Bạn chưa đăng tin tuyển dụng nào !
      </Typography.Title>
      <Typography.Text>Bạn chưa đăng tin tuyển dụng nào !</Typography.Text>
      <Typography.Text>
        Bắt đầu tìm kiếm hàng nghìn nhận sự đắc lực và chất lượng tại Job Match
      </Typography.Text>
      <Link to='/job/post'>
        <button
          style={{
            width: 150,
            padding: '10px 0',
            backgroundColor: '#024caa',
            color: '#fff',
            textAlign: 'center',
            borderRadius: 10,
            fontSize: 16,
            fontWeight: 500,
            marginTop: 35,
          }}
        >
          Đăng tuyển ngay
        </button>
      </Link>
    </Flex>
  )
}

export default EmptyJobList
