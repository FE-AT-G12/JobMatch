import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Form, Input, Button, message, Popconfirm } from 'antd'
import {
  useGetCompanyDetailQuery,
  useUpdateCompanyMutation,
  useDeleteCompanyMutation,
} from '../../features/company/companyApi'

function CompanyAdminDetail() {
  const { id } = useParams() // Get company ID from the URL
  const navigate = useNavigate()

  const { data: companyData, error, isLoading } = useGetCompanyDetailQuery(id)
  const [updateCompany, { isLoading: isUpdating }] = useUpdateCompanyMutation()
  const [deleteCompany, { isLoading: isDeleting }] = useDeleteCompanyMutation()

  const [form] = Form.useForm()

  useEffect(() => {
    if (companyData) {
      form.setFieldsValue(companyData)
    }
  }, [companyData, form])

  const onUpdate = (values) => {
    updateCompany({ id: parseInt(id), ...values })
      .then(() => {
        message.success('Company updated successfully!')
        navigate('/admin/company')
      })
      .catch((error) => {
        console.error('Failed to update company:', error)
        message.error('Failed to update company.')
      })
  }

  const onDelete = () => {
    deleteCompany(id)
      .then(() => {
        message.success('Company deleted successfully!')
        navigate('/admin/company') // Redirect after delete
      })
      .catch((error) => {
        console.error('Failed to delete company:', error)
        message.error('Failed to delete company.')
      })
  }

  if (isLoading) return <div>Loading company details...</div>
  if (error) return <div>Error loading company details.</div>

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Chi tiết Công ty</h2>
      <Form
        form={form}
        layout='vertical'
        onFinish={onUpdate}
        initialValues={companyData}
      >
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
          <Button type='primary' htmlType='submit' loading={isUpdating}>
            Cập nhật công ty
          </Button>
          <Popconfirm
            title='Bạn có chắc chắn muốn xóa công ty này không?'
            onConfirm={onDelete}
            okText='Yes'
            cancelText='No'
          >
            <Button
              type='danger'
              loading={isDeleting}
              style={{ marginLeft: '10px', color: 'red' }}
            >
              Xóa công ty
            </Button>
          </Popconfirm>
        </Form.Item>
      </Form>
    </div>
  )
}

export default CompanyAdminDetail
