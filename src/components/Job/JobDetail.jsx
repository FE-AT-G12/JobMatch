import React from 'react'
import { Card, Row, Col, Button, Tag, Typography, Flex } from 'antd'
import {
  EnvironmentOutlined,
  MoneyCollectOutlined,
  SendOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { moneyFormatter } from '../../utils/moneyFormatter'
import { getCityByAddress } from '../../utils/getCity'
import { ageRequirement } from '../../utils/ageRequirement'
import { dateFromDbToString } from '../../utils/DayFormater'
import { Link } from 'react-router-dom'
import JobStatusTag from './JobStatusTag'

export default function JobDetail({ job, handleApplyJob, user, notShowBtn }) {
  return (
    <>
      <Card bordered={false}>
        <Row>
          <Col span={24}>
            <Flex align='start' justify='space-between'>
              <Typography.Title level={3}>{job?.title}</Typography.Title>
              <Typography.Text level={3}>
                <JobStatusTag status={job.status} />
              </Typography.Text>
            </Flex>
          </Col>
          <Col span={24}>
            <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
              <Col span={8}>
                <MoneyCollectOutlined
                  style={{ color: '#024caa', fontSize: 18 }}
                />
                <Typography.Text style={{ marginLeft: 8, fontSize: 16 }}>
                  Mức lương
                </Typography.Text>
                <div style={{ fontWeight: 600, fontSize: 16 }}>
                  {moneyFormatter(job.payment.payRate)}
                </div>
              </Col>
              <Col span={8}>
                <EnvironmentOutlined
                  style={{ color: '#024caa', fontSize: 18 }}
                />
                <span style={{ marginLeft: 8, fontSize: 16 }}>Địa điểm</span>
                <div style={{ fontWeight: 600, fontSize: 16 }}>
                  {getCityByAddress(job.location)}
                </div>
              </Col>
              <Col span={8}>
                <UserOutlined style={{ color: '#024caa', fontSize: 18 }} />
                <span style={{ marginLeft: 8, fontSize: 16 }}>Độ tuổi</span>
                <div style={{ fontWeight: 600, fontSize: 16 }}>
                  {ageRequirement(job.ageRequirement)}
                </div>
              </Col>
            </Row>
          </Col>
          <Col span={24}>
            <div style={{ marginTop: 16, color: '#666' }}>
              Đã đăng vào:{' '}
              <span style={{ fontWeight: 600 }}>
                {dateFromDbToString(job.datePosted)}
              </span>
            </div>
          </Col>
          <Col span={24} style={{ display: notShowBtn ? 'none' : 'block' }}>
            <Flex style={{ marginTop: 16 }} wrap gap={16}>
              {user ? (
                user.role == 'client' && (
                  <Button
                    onClick={handleApplyJob}
                    type='primary'
                    style={{ backgroundColor: '#024caa', flex: 1 }}
                    size='large'
                  >
                    <SendOutlined /> Ứng tuyển ngay
                  </Button>
                )
              ) : (
                <Link to='/login'>
                  <Button
                    onClick={handleApplyJob}
                    type='primary'
                    style={{ backgroundColor: '#024caa', flex: 1 }}
                    size='large'
                  >
                    <SendOutlined /> Bạn cần đăng nhập để ứng tuyển
                  </Button>
                </Link>
              )}
              {user?.role == 'client' && <Button size='large'>Lưu</Button>}
            </Flex>
          </Col>
        </Row>
      </Card>
    </>
  )
}
