import React, { useEffect } from 'react';
import {
    Form,
    Input,
    Modal,
    notification,
    Switch,
} from 'antd';
import { useCreateUserMutation, useGetUserListQuery } from '../../features/user/userApi';
import { SafetyCertificateOutlined } from '@ant-design/icons';
import { hashPassword } from '../../utils/Hash';

export default function AddAccount({ isOpen, onOk, onClose }) {
    const [form] = Form.useForm();
    const [createAccount, { isLoading }] = useCreateUserMutation();
    const { data: userList } = useGetUserListQuery();
    const isEmailDuplicated = (email) => {
        return userList?.some((user) => user.email === email);
    };
    const handleSubmit = async ({ email, name, password, phoneNumber,status }) => {
        if (isEmailDuplicated(email)) {
            notification.error({
                message: 'Email đã tồn tại!',
            });
            return;
        }
        try {
            const hashedPassword = await hashPassword(password)
            await createAccount({ name, email, phoneNumber, password: hashedPassword, status :true }).unwrap();
            notification.success({
                message: 'Tạo tài khoản mới thành công!',
            });
            form.resetFields();
            onClose();
        } catch (error) {
            notification.error({
                message: 'Tạo tài khoản mới thất bại!',
                description: error.data?.message || 'Đã xảy ra lỗi',
            });
        }
    };
    //trigger khi form bị đóng
    useEffect(() => {
        if (!isOpen) {
            form.resetFields(); 
        }
    }, [isOpen, form]);

    return (
        <Modal
            title="Thêm tài khoản mới"
            open={isOpen}
            onOk={form.submit}
            onCancel={onClose}
            confirmLoading={isLoading}
        >
            <Form
                form={form}
                onFinish={handleSubmit}
                layout="vertical"
                style={{ marginTop: 30 }}
            >
                <div
                    style={{
                        padding: '24px 24px 50px 24px',
                        background: '#fff',
                        borderRadius: 8,
                    }}
                >
                    <Form.Item
                        label="Tên"
                        name="name"
                        rules={[{ required: true, message: 'Vui lòng nhập tên!' }]}
                    >
                        <Input placeholder="Nhập tên" />
                    </Form.Item>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                type: 'email',
                                message: 'Vui lòng nhập email hợp lệ!',
                            },
                            {
                                required: true,
                                message: 'Vui lòng nhập email!',
                            },
                            {
                                validator: (_, value) =>
                                    isEmailDuplicated(value)
                                        ? Promise.reject('Email đã tồn tại!')
                                        : Promise.resolve(),
                            },
                        ]}
                    >
                        <Input placeholder="Nhập email" />
                    </Form.Item>
                    <Form.Item
                        label="Số điện thoại"
                        name="phoneNumber"
                        rules={[
                            {
                                pattern: /^[0-9]{10,15}$/,
                                message: 'Số điện thoại không hợp lệ!',
                            },
                            { required: true, message: 'Vui lòng nhập số điện thoại!' },
                        ]}
                    >
                        <Input placeholder="Nhập số điện thoại" />
                    </Form.Item>
                    <Form.Item
                        label="Mật khẩu"
                        name='password'
                        rules={[
                            { required: true, message: 'Vui lòng nhập mật khẩu' },
                        ]}
                    >
                        <Input.Password
                            style={{ height: 45 }}
                            size='large'
                            placeholder='Mật khẩu'
                            prefix={
                                <SafetyCertificateOutlined style={{ color: '#024CAA' }} />
                            }
                        />
                    </Form.Item>
                    <Form.Item
                        name='confirmPassword'
                        dependencies={['password']}
                        label="Xác nhận mật khẩu"
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng xác nhận mật khẩu',
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve()
                                    }
                                    return Promise.reject(
                                        new Error('Mật khẩu và xác nhận mật khẩu không khớp')
                                    )
                                },
                            }),
                        ]}
                    >
                        <Input.Password
                            style={{ height: 45 }}
                            size='large'
                            placeholder='Xác nhận mật khẩu'
                            prefix={
                                <SafetyCertificateOutlined style={{ color: '#024CAA' }} />
                            }
                        />
                    </Form.Item>
                </div>
            </Form>
        </Modal>
    );
}
