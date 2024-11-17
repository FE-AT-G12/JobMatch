import React from 'react'
import { Typography, Divider, Button } from 'antd'
import { ageRequirement } from '../../utils/ageRequirement'
import { moneyFormatter } from '../../utils/moneyFormatter'
import { SendOutlined } from '@ant-design/icons'
import { dateFromDbToString } from '../../utils/DayFormater'
import { Link } from 'react-router-dom'

const { Title, Text, Paragraph } = Typography

const JobDescription = ({ job, handleApplyJob, user }) => {
  return (
    <div
      style={{ padding: '16px', backgroundColor: '#fff', borderRadius: '8px' }}
    >
      {/* Job Details Section */}
      <Title
        level={3}
        style={{
          borderLeft: '4px solid #007bff',
          paddingLeft: '8px',
          marginBottom: 0,
        }}
      >
        Chi tiết tin tuyển dụng
      </Title>

      <Divider />

      {/* Job Description */}
      <Title level={4}>Mô tả công việc</Title>
      <Paragraph>{job.description}</Paragraph>

      {/* Applicant Requirements */}
      <Title level={4}>Yêu cầu ứng viên</Title>
      <ul>
        <li>
          <Text strong>Tuổi: </Text>
          <Text>{ageRequirement(job.ageRequirement)}</Text>
        </li>
        <li>
          <Text strong>Kĩ năng cần thiết: </Text>
          {job.skillRequirement && job.skillRequirement.length !== 0
            ? job.skillRequirement.join(', ')
            : 'Không yêu cầu kĩ năng'}
        </li>
      </ul>

      {/* Time and Location */}
      <Title level={4}>Thời gian và địa điểm</Title>
      <ul>
        <li>
          <Text strong>Ngày bắt đầu: </Text>
          <Text>{dateFromDbToString(job.dateStart)}</Text>
        </li>
        <li>
          <Text strong>Ngày kết thúc: </Text>
          <Text>{dateFromDbToString(job.dateEnd)}</Text>
        </li>
        <li>
          <Text strong>Thời gian làm việc: </Text>
          <Text>{`${job.timeStart} - ${job.timeEnd}`}</Text>
        </li>
        <li>
          <Text strong>Ngày lặp lại trong tuần: </Text>
          <Text>
            {job?.repeatOn?.length !== 0 ? job.repeatOn.join(', ') : 'Không'}
          </Text>
        </li>
        <li>
          <Text strong>Địa điểm: </Text>
          <Text>{job.location}</Text>
        </li>
      </ul>

      {/* Payment Method and Salary */}
      <Title level={4}>Hình thức thanh toán và mức lương</Title>
      <ul>
        <li>
          <Text strong>Mức lương: </Text>
          <Text>{`${moneyFormatter(job.payment.payRate)} / giờ`}</Text>
        </li>
        <li>
          <Text strong>Phương thức thanh toán: </Text>
          <Text>
            {job.payment.paymentMethod == 'cash' ? 'Tiền mặt' : 'Chuyển khoản'}
          </Text>
        </li>
        <li>
          <Text strong>Thời gian thanh toán: </Text>
          <Text>
            {job.payment.payTime === 'before' ? 'Trả trước' : 'Trả sau'}
          </Text>
        </li>
      </ul>
      {user ? (
        user.role == 'client'  && job.status === 'Đang tuyển' && <Button
          type='primary'
          style={{ backgroundColor: '#024caa', flex: 1 }}
          size='large'
          onClick={handleApplyJob}
        >
          Ứng tuyển ngay
        </Button>
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
    </div>
  )
}

export default JobDescription
