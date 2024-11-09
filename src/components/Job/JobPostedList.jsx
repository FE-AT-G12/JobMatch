import { Button, Col, Flex, Image, Row, Select, Typography } from 'antd'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function JobPostedList({ jobs }) {
  const [status, setStatus] = useState(null)
  console.log(jobs)

  return (
    <Row style={{ width: '100%', marginTop: '47px' }}>
      <Col
        span={12}
        offset={4}
        style={{
          padding: 36,
          border: '1px #024caa',
          borderStyle: 'dotted',
          borderRadius: 8,
          backgroundColor: '#fff',
          // boxShadow: '2px 4px 10px -2px rgba(0,0,0,0.42)'
        }}
      >
        <Flex justify='space-between'>
          <Typography.Title level={3}>Quản lý tin tuyển dụng</Typography.Title>
          <Select
            placeholder='Trạng thái'
            style={{ width: '130px' }}
            options={[
              {
                label: 'Tất cả',
                value: 'Tất cả',
              },
              {
                label: 'Đang tuyển',
                value: 'Đang tuyển',
              },
              {
                label: 'Đã tuyển',
                value: 'Đã tuyển',
              },
              {
                label: 'Đã hủy',
                value: 'Đã hủy',
              },
            ]}
          />
        </Flex>
        <Flex justify='center' vertical align='center'>
          <img src='/public/empty-folder.png' width={408} draggable={false} />
          <Typography.Title level={4}>
            Bạn chưa đăng tin tuyển dụng nào !
          </Typography.Title>
          <Typography.Text>Bạn chưa đăng tin tuyển dụng nào !</Typography.Text>
          <Typography.Text>
            Bắt đầu tìm kiếm hàng nghìn nhận sự đắc lực và chất lượng tại Job
            Match
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
      </Col>
    </Row>
  )
}

export default JobPostedList
