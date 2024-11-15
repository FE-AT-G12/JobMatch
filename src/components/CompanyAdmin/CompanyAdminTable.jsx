import React from 'react'
import { collumn } from './data'
import { Alert, Spin, Table, Button } from 'antd'
import { useGetCompanyListQuery } from '../../features/company/companyApi'
import { useNavigate } from 'react-router-dom'

function CompanyAdminTable() {
  const { data, error, isLoading } = useGetCompanyListQuery()
  const navigate = useNavigate()
  const dataWithIndex = data?.map((company, index) => ({
    id: company.id,
    ...company,
    index: index + 1,
  }))

  if (isLoading) {
    return <Spin tip='Loading...' />
  }

  if (error) {
    return (
      <Alert
        message='Error'
        description='Failed to load companies.'
        type='error'
        showIcon
      />
    )
  }

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          marginBottom: 16,
        }}
      >
        <Button type='primary' onClick={() => navigate('/admin/companyadd')}>
          Thêm công ty
        </Button>
      </div>
      <Table dataSource={dataWithIndex || []} columns={collumn} />
    </div>
  )
}

export default CompanyAdminTable
