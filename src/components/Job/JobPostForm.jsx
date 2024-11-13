import React, { useState } from 'react'

import {
  Button,
  Flex,
  Form,
  Input,
  InputNumber,
  message,
  Select,
  Typography,
  DatePicker,
  TimePicker,
} from 'antd'
import { useCreateJobMutation } from '../../features/job/jobApi'
import {
  dateJsToStringFormatter,
  timeJsToStringFormatter,
} from '../../utils/DayFormater'
const { Title, Text } = Typography
const { RangePicker } = DatePicker
import dayjs from 'dayjs'
import { useSelector } from 'react-redux'
import { selectUser } from '../../redux/features/userSlice'
import ModalLoading from '../Loading/ModalLoading'
import { dayOfWeek } from '../../constant'
import AutocompleteAddress from '../AutoCompleteAddress/AutocompleteAddress'

const Require = () => <span style={{ color: 'red' }}>*</span>
function JobPostForm() {
  const [form] = Form.useForm()

  const [createJob, { isLoading }] = useCreateJobMutation()
  const hirer = useSelector(selectUser)

  const handleSubmit = async (values) => {
    //prepare data
    const job = {
      title: values.title,
      description: values.description,
      skillRequirement: values.skillRequirement,
      ageRequirement: {
        min: values.minAge,
        max: values.maxAge,
      },
      repeatOn: values.repeatOn || [],
      //Category
      category: 'Dọn dẹp vệ sinh',
      location: values.location,
      dateStart: dateJsToStringFormatter(values.date[0]),
      dateEnd: dateJsToStringFormatter(values.date[1]),
      timeStart: timeJsToStringFormatter(values.time[0]),
      timeEnd: timeJsToStringFormatter(values.time[1]),
      payment: {
        payRate: values.payRate,
        paymentMethod: values.paymentMethod,
        payTime: values.payTime,
      },
      hirerId: hirer.userId,
      clientId: [],
      clientApplyId: [],
      datePosted: dayjs().format('YYYY-MM-DD HH:mm:ss'),
      status: 'Đang tuyển',
    }
    try {
      await createJob(job)
      message.success('Đăng tuyển công việc thành công!')
    } catch (error) {
      message.error('Đăng tuyển công việc thất bại!')
    }
  }
  return (
    <>
      {isLoading && <ModalLoading />}
      <Form
        form={form}
        onFinish={handleSubmit}
        layout='vertical'
        style={{ marginTop: 30 }}
      >
        <div
          style={{
            padding: '24px 24px 50px 24px',
            background: '#fff',
            borderRadius: 8,
          }}
        >
          <Title level={3}>Tổng quan công việc</Title>
          <Text style={{ color: '#8C8C8C' }}>
            (<Require />) Các thông tin bắt buộc
          </Text>
          <Form.Item
            style={{ marginTop: 30 }}
            label='Tên công việc'
            name='title'
            rules={[{ required: true, message: 'Vui lòng nhập tên công việc' }]}
          >
            <Input placeholder='Nhập tên công việc' />
          </Form.Item>
          <Form.Item
            label='Miêu tả công việc'
            name='description'
            rules={[
              { required: true, message: 'Vui lòng nhập miêu tả công việc' },
            ]}
          >
            <Input.TextArea
              style={{ height: '156px' }}
              placeholder='Nhập miêu tả công việc'
            />
          </Form.Item>
          <Form.Item label='Yêu cầu kĩ năng' name='skillRequirement'>
            <Select
              style={{ height: 40 }}
              mode='tags'
              allowClear
              placeholder='Nhập các kĩ năng có thể phục vụ cho công việc.'
            />
          </Form.Item>
          <Flex gap={20}>
            <Form.Item label='Độ tuổi tối thiểu' name='minAge'>
              <InputNumber min={0} />
            </Form.Item>
            <Form.Item label='Độ tuổi tối đa' name='maxAge'>
              <InputNumber min={0} />
            </Form.Item>
          </Flex>
        </div>
        <div
          style={{
            padding: '24px 24px 50px 24px',
            background: '#fff',
            borderRadius: 8,
            marginTop: 35,
          }}
        >
          <Title level={3}>Địa điểm và thời gian</Title>
          <Text style={{ color: '#8C8C8C' }}>
            (<Require />) Các thông tin bắt buộc
          </Text>
          <Form.Item
            label='Địa điểm'
            name='location'
            style={{ marginTop: 30 }}
            rules={[{ required: true, message: 'Vui lòng nhập địa điểm' }]}
          >
            {/* Location */}
            <AutocompleteAddress form={form} />
          </Form.Item>
          <Flex gap={50}>
            <Form.Item
              label='Ngày bắt đầu và kết thúc'
              name='date'
              rules={[
                {
                  required: true,
                  message: 'Vui lòng nhập thời gian bắt đầu và kết thúc',
                },
              ]}
            >
              <RangePicker
                placeholder={['Bắt đầu vào', 'Kết thúc vào']}
                format='DD-MM-YYYY'
              />
            </Form.Item>
            <Form.Item name='repeatOn' label='Lặp lại vào'>
              <Select
                placeholder='Ngày trong tuần'
                maxTagCount={3}
                style={{ minWidth: '150px' }}
                allowClear
                mode='multiple'
                options={dayOfWeek}
              />
            </Form.Item>
          </Flex>
          <Flex>
            <Form.Item
              name='time'
              label='Giờ bắt đầu và kết thúc'
              rules={[{ required: true, message: 'Vui lòng nhập giờ bắt đầu' }]}
            >
              <TimePicker.RangePicker
                needConfirm={false}
                placeholder='Nhập giờ'
                size='middle'
                format='HH:mm'
              />
            </Form.Item>
          </Flex>
        </div>
        <div
          style={{
            padding: '24px',
            background: '#fff',
            borderRadius: 8,
            paddingBottom: 80,
            marginTop: 35,
          }}
        >
          <Title level={3}>Thông tin thanh toán</Title>
          <Text style={{ color: '#8C8C8C' }}>
            (<Require />) Các thông tin bắt buộc
          </Text>
          <Form.Item
            style={{ marginTop: 35 }}
            name='payRate'
            label='Mức lương theo giờ'
            rules={[{ required: true, message: 'Vui lòng nhập mức lương' }]}
          >
            <InputNumber
              addonAfter='VND'
              placeholder='Mức lương'
              min={0}
              formatter={(value) =>
                `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
              }
              parser={(value) => value?.replace(/\$\s?|(,*)/g, '')}
            />
          </Form.Item>
          <Flex gap={36}>
            <Form.Item
              name='paymentMethod'
              label='Hình thức thanh toán'
              rules={[
                {
                  required: true,
                  message: 'Vui lòng nhập hình thức thanh toán',
                },
              ]}
            >
              <Select
                placeholder='Hình thức thanh toán'
                options={[
                  {
                    label: 'Tiền mặt',
                    value: 'cash',
                  },
                  {
                    label: 'Chuyển khoản',
                    value: 'transfer',
                  },
                ]}
              />
            </Form.Item>
            <Form.Item
              label='Thời gian thanh toán'
              name='payTime'
              rules={[
                {
                  required: true,
                  message: 'Vui lòng nhập thời gian thanh toán',
                },
              ]}
            >
              <Select
                placeholder='Thời gian thanh toán'
                options={[
                  {
                    label: 'Trả trước',
                    value: 'before',
                  },
                  {
                    label: 'Trả sau',
                    value: 'after',
                  },
                ]}
              />
            </Form.Item>
          </Flex>
        </div>
        <Form.Item>
          <Button
            style={{
              width: '100%',
              marginTop: '24px',
              padding: '25px 0',
              color: '#fff',
              backgroundColor: '#024CAA',
              textAlign: 'center',
              borderRadius: '20px',
            }}
            htmlType='submit'
          >
            <div style={{ fontSize: '20px', fontWeight: '600' }}>
              Đăng tuyển ngay
            </div>
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default JobPostForm
