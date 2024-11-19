import {
    Button,
    DatePicker,
    Form,
    Input,
    Modal,
    notification,
    Switch,
} from 'antd';
import React, { useEffect } from 'react';
import { useUpdateUserMutation } from '../../features/user/userApi';
export default function EditModal({ isOpen, onOk, onClose, userInfo, error }) {
    const [form] = Form.useForm();
    const [updateAccount, { isLoading }] = useUpdateUserMutation();

    useEffect(() => {
        if (userInfo) {
            form.setFieldsValue(userInfo);
        }
    }, [userInfo, form]);

    const handleSubmit = async (values) => {
        const currentValues = form.getFieldsValue(true);
        const updatedValues = { ...currentValues, ...values };

        try {
            await updateAccount({
                id: userInfo?.id,
                data: updatedValues,
            });
            notification.success({
                message: 'Cập nhật người dùng thành công',
            });
            onOk();
        } catch (error) {
            notification.error({
                message: 'Cập nhật người dùng thất bại',
            });
        }
    };

    return (
        <Modal
            title="Update User"
            open={isOpen}
            onOk={form.submit} // Submit form on OK
            onCancel={onClose}
            confirmLoading={isLoading}
        >
            {error ? (
                <p>Error loading user details: {error.message}</p>
            ) : (
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
                            style={{ marginTop: 30 }}
                            label="Tên "
                            name="name"
                            rules={[{ required: true, message: 'Vui lòng nhập tên ' }]}
                        >
                            <Input placeholder="Nhập tên công việc" />
                        </Form.Item>
                        <Form.Item
                            style={{ marginTop: 30 }}
                            label="Số điện thoại "
                            name="phoneNumber"
                            rules={[
                                { pattern: /^[0-9]{10,15}$/, message: 'Số điện thoại không hợp lệ!' },
                            ]}
                        >
                            <Input placeholder="Nhập số điện thoại" />
                        </Form.Item>
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                { type: 'email', message: 'Vui lòng nhập email hợp lệ!' },
                            ]}
                        >
                            <Input placeholder="Nhập email" />
                        </Form.Item>
                        <Form.Item
                            style={{ marginTop: 30 }}
                            label="CMND "
                            name="identityNumber"
                            rules={[
                                { pattern: /^[0-9]{12}$/, message: 'Số CMND không hợp lệ!' },
                            ]}
                        >
                            <Input placeholder="Nhập số CMND" />
                        </Form.Item>
                        <Form.Item
                            label="Trạng thái"
                            name="status"
                            valuePropName="checked"
                        >
                            <Switch
                                checkedChildren="Active"
                                unCheckedChildren="Nonactive"
                            />
                        </Form.Item>
                    </div>
                </Form>
            )}
        </Modal>
    );
}
