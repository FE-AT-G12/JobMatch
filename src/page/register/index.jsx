import { Button, Checkbox, Col, Input, Row } from "antd";
import {
  SafetyCertificateOutlined,
  ChromeOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import "./index.scss";
import { Link } from "react-router-dom";

function RegisterPage() {
  const [isChecked, setIsChecked] = useState(false);

  const onChange = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <div className="registerpage">
      <Row>
        <Col span={18} className="register-1">
          <div className="header">
            <h2 className="title">Chào mừng bạn đến với Job Match</h2>
            <div className="caption">
              Cùng tìm kiếm và nhận được các cơ hội sự nghiệp lý tưởng
            </div>
          </div>
          <div className="register">
            <div className="input">
              <p style={{ marginBottom: "10px" }}>Họ và tên</p>
              <Input
                size="large"
                placeholder="Họ và tên"
                prefix={<UserOutlined style={{ color: "#024CAA" }} />}
              />
            </div>
            <div className="input">
              <p style={{ marginBottom: "10px" }}>Email</p>
              <Input
                size="large"
                placeholder="Email"
                prefix={<ChromeOutlined style={{ color: "#024CAA" }} />}
              />
            </div>
            <div className="input">
              <p style={{ marginBottom: "10px" }}>Mật khẩu</p>
              <Input.Password
                size="large"
                placeholder="Mật khẩu"
                prefix={
                  <SafetyCertificateOutlined style={{ color: "#024CAA" }} />
                }
              />
            </div>
            <div className="input">
              <p style={{ marginBottom: "10px" }}>Nhập lại mật khẩu</p>
              <Input.Password
                size="large"
                placeholder="Nhập lại mật khẩu"
                prefix={
                  <SafetyCertificateOutlined style={{ color: "#024CAA" }} />
                }
              />
            </div>
          </div>
          <div className="button">
            <Button
              className="button-register"
              type="primary"
              block
              style={{
                opacity: isChecked ? 1 : 0.5,
                pointerEvents: isChecked ? "auto" : "none",
              }}
            >
              Đăng ký
            </Button>
          </div>
          <div className="accept">
            <Checkbox onChange={onChange}>
              Bằng việc đăng nhập bằng tài khoản mạng xã hội, tôi đã đọc và đồng
              ý với{" "}
              <Link to={"/dieu-vu"} style={{ color: "#024CAA" }}>
                Điều khoản dịch vụ
              </Link>{" "}
              và{" "}
              <Link to={"/chinh-sach"} style={{ color: "#024CAA" }}>
                Chính sách bảo mật
              </Link>{" "}
              của Job Match
            </Checkbox>
          </div>
        </Col>
        <Col span={6} className="backgroud"></Col>
      </Row>
    </div>
  );
}

export default RegisterPage;
