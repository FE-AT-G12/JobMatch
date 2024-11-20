import { LogoutOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function LogOut() {
    const nav = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem("user");
        nav("/")
        window.location.reload();
    };
    return (
        <Button
            type="primary"
            danger
            onClick={handleLogout}
            style={{
                position: 'fixed',
                bottom: '20px',
                left: '20px', 
                zIndex: 1000,
            }}
            icon={<LogoutOutlined />}
        >
            Đăng xuất
        </Button>
    )
}
