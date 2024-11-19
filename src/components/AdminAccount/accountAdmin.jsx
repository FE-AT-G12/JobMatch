import React, { useState } from 'react'
import './adminAccount.scss'
import { Col, Container, Row } from 'react-bootstrap'
import { useGetUserDetailQuery, useGetUserListQuery } from '../../features/user/userApi'
import { Button, Modal, Table, Tag } from 'antd'
import EditModal from '../../components/EditModal/editModal'

export default function AccountAdmin() {
    const { data, error, isLoading } = useGetUserListQuery()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedUserId, setSelectedUserId] = useState(null)
    const { data: userInfo, error: error1, isLoading: isLoading1 } = useGetUserDetailQuery(selectedUserId, {
        skip: !selectedUserId,
    })

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Error: {error.message}</div>

    const user = JSON.parse(localStorage.getItem("user"))

    const columns = [
        {
            title: "ID",
            dataIndex: "id",
            key: "id",
        },
        {
            title: "Tên",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
        },
        {
            title: "Trạng thái",
            dataIndex: "status",
            key: "status",
            onFilter: (value, record) => record.status.includes(value),
            render: (text) => {
                let color = "";
                let displayText = text;
                switch (text) {
                    case true:
                        color = "lightskyblue";
                        displayText = "Active"
                        break;
                    case false:
                        color = "tomato";
                        displayText = "Banned"
                        break;
                    default:
                        color = "default";
                        displayText = "Active"
                }
                return <Tag color={color}>{displayText}</Tag>;
            },
        },
        {
            title: "Edit",
            render: (value, record) => (
                <Button
                    type="primary"
                    onClick={() => showModal(record.id)}
                >
                    Edit
                </Button>
            ),
        },
    ];

    const showModal = (id) => {
        setSelectedUserId(id)
        setIsModalOpen(true)
    }

    const handleOk = () => {
        setIsModalOpen(false)
        setSelectedUserId(null)
    }

    const handleCancel = () => {
        setIsModalOpen(false)
        setSelectedUserId(null)
    }

    return (
        <>
            <Container>
                <EditModal
                    isOpen={isModalOpen}
                    onOk={handleOk}
                    onClose={handleCancel}
                    userInfo={userInfo}
                />
                <Row className='justify-content-md-center'>
                    <Col md={12}>
                        <Row style={{ marginBottom: '5%' }}>
                            <b style={{ fontSize: '1.5rem' }}>Xin chào {user?.name}</b>
                            <h5 style={{ fontSize: '0.9rem', color: 'grey' }}>
                                Theo dõi mọi tiến độ công việc tại đây!
                            </h5>
                        </Row>
                        <Row>
                            <Table
                                dataSource={data}
                                columns={columns}
                                size="middle"
                            />
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
