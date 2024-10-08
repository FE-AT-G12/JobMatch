import { Button, Checkbox, Col, Input, Row } from "antd";
import { SafetyCertificateOutlined, ChromeOutlined } from '@ant-design/icons';
import { useState } from "react"; // Import useState
import "./index.scss";
import { Link } from "react-router-dom";

function LoginPage() {
  const [isChecked, setIsChecked] = useState(false); 

  const onChange = (e) => {
    setIsChecked(e.target.checked); 
  };

  return (
    <div className="loginpage">
      <Row>
        <Col span={18} className="login-1">
          <div className="header">
            <h2 className="title">Chào mừng bạn đến với Job Match</h2>
            <div className="caption">Cùng tìm kiếm và nhận được các cơ hội sự nghiệp lý tưởng</div>
          </div>
          <div className="login">
            <div className="input">
              <p style={{ marginBottom: '10px' }}>Email</p>
              <Input size="large" placeholder="Email" prefix={<ChromeOutlined style={{ color: '#00b14f' }} />} />
            </div>
            <div className="input">
              <p style={{ marginBottom: '10px' }}>Password</p>
              <Input.Password size="large" placeholder="Password" prefix={<SafetyCertificateOutlined style={{ color: '#00b14f' }} />} />
            </div>
          </div>
          <div className="forgot-password">
            <Link to={""} style={{ color: '#00b14f' }}>Quên mật khẩu</Link>
          </div>
          <div className="button">
            <Button className="button-login" type="primary" block>
              Đăng nhập
            </Button>
            <div className="or-login">Hoặc đăng nhập bằng</div>

            {/* Nút Google ban đầu sẽ mờ và hiện rõ khi checkbox được chọn */}
            <Button 
              className="button-login-gg" 
              type="primary" 
              block 
              style={{ opacity: isChecked ? 1 : 0.5, pointerEvents: isChecked ? 'auto' : 'none' }} // Điều chỉnh opacity và pointerEvents
            >
              <ChromeOutlined /> Google
            </Button>
          </div>
          <div className="accept">
            <Checkbox onChange={onChange}>
              Bằng việc đăng nhập bằng tài khoản mạng xã hội, tôi đã đọc và đồng ý với <Link to={"/dieu-vu"} style={{ color: '#00b14f' }}>Điều khoản dịch vụ</Link> và <Link to={"/chinh-sach"} style={{ color: '#00b14f' }}>Chính sách bảo mật</Link> của Job Match
            </Checkbox>
          </div>
          <div className="register-account">
            Bạn chưa có tài khoản? <Link to={"/register"} style={{ color: '#00b14f' }}>Đăng ký ngay</Link>
          </div>
        </Col>
        <Col span={6} className="backgroud">
        </Col>
      </Row>
    </div>
  );
}

export default LoginPage;
