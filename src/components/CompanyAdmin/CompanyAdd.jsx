import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Input, Button } from 'antd'
import {
  useCreateCompanyMutation,
  useGetCompanyListQuery,
} from '../../features/company/companyApi'

function CompanyAdd() {
  const { data: companyList } = useGetCompanyListQuery()
  const [createCompany, { isLoading }] = useCreateCompanyMutation()
  const navigate = useNavigate() // Initialize the navigate function

  const onFinish = (values) => {
    // Generate the new ID based on the current company list, ensuring it's a string
    const maxId = companyList
      ? Math.max(...companyList.map((company) => parseInt(company.id)))
      : 0
    const newId = String(maxId + 1) // Convert ID to string

    // Prepare the company data with the new string ID
    const companyData = { id: newId, ...values }

    // Create the company
    createCompany(companyData)
      .then(() => {
        alert('Company added successfully!')
        navigate('/admin/company') // Redirect to the company list after successful addition
      })
      .catch((error) => {
        console.error('Failed to add company:', error)
      })
  }

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Thêm công ty</h2>
      <Form layout='vertical' onFinish={onFinish}>
        <Form.Item
          name='name'
          label='Tên công ty'
          rules={[{ required: true, message: 'Vui lòng thêm tên công ty' }]}
        >
          <Input placeholder='Tên công ty' />
        </Form.Item>

        <Form.Item
          name='coverImage'
          label='Ảnh nền'
          rules={[{ required: true, message: 'Vui lòng thêm ảnh nền' }]}
        >
          <Input placeholder='Ảnh nền' />
        </Form.Item>

        <Form.Item
          name='location'
          label='Địa chỉ'
          rules={[{ required: true, message: 'Vui lòng thêm địa chỉ' }]}
        >
          <Input placeholder='Địa chỉ' />
        </Form.Item>

        <Form.Item
          name='address'
          label='Địa chỉ chi tiết'
          rules={[
            { required: true, message: 'Vui lòng thêm địa chỉ chi tiết' },
          ]}
        >
          <Input placeholder='Địa chỉ chi tiết' />
        </Form.Item>

        <Form.Item
          name='ggmap'
          label='Đường dẫn GG Map'
          rules={[
            { required: true, message: 'Vui lòng thêm đường dẫn GG Map' },
          ]}
        >
          <Input placeholder='Đường dẫn GG Map' />
        </Form.Item>

        <Form.Item
          name='salaryRange'
          label='Mức lương trung bình'
          rules={[
            { required: true, message: 'Vui lòng thêm mức lương trung bình' },
          ]}
        >
          <Input placeholder='Mức lương trung bình' />
        </Form.Item>

        <Form.Item
          name='logo'
          label='Logo URL'
          rules={[{ required: true, message: 'Vui lòng thêm logo URL' }]}
        >
          <Input placeholder='Logo URL' />
        </Form.Item>

        <Form.Item
          name='http'
          label='Website URL'
          rules={[{ required: true, message: 'Vui lòng thêm website URL' }]}
        >
          <Input placeholder='Website URL' />
        </Form.Item>

        <Form.Item
          name='employee'
          label='Số lượng nhân viên'
          rules={[
            { required: true, message: 'Vui lòng thêm số lượng nhân viên' },
          ]}
        >
          <Input placeholder='Số lượng nhân viên' />
        </Form.Item>

        <Form.Item
          name='follow'
          label='Lượt theo dõi'
          rules={[
            { required: true, message: 'Vui lòng thêm số lượt theo dõi' },
          ]}
        >
          <Input placeholder='Lượt theo dõi' />
        </Form.Item>

        <Form.Item
          name='infor'
          label='Thông tin công ty'
          rules={[
            { required: true, message: 'Vui lòng thêm thông tin công ty' },
          ]}
        >
          <Input.TextArea placeholder='Thông tin công ty' rows={4} />
        </Form.Item>

        <Form.Item
          name='intro'
          label='Giới thiệu'
          rules={[
            { required: true, message: 'Vui lòng thêm lời giới thiệu công ty' },
          ]}
        >
          <Input.TextArea placeholder='Giới thiệu' rows={4} />
        </Form.Item>

        <Form.Item>
          <Button type='primary' htmlType='submit' loading={isLoading}>
            Thêm công ty
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default CompanyAdd
