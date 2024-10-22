import { Button, Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import "./index.scss";

const { Header: AntHeader } = Layout;

function Header() {
  return (
    <div className="header">
      <Layout>
        <AntHeader style={{ backgroundColor: "white", padding: "0 50px" }}>
          <div
            className="header-content"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* Logo */}
            <div
              className="logo"
              style={{ color: "black", fontSize: "20px", fontWeight: "bold" }}
            >
              Job Match
            </div>

            {/* Menu */}
            <Menu
              mode="horizontal"
              defaultSelectedKeys={["1"]}
              style={{
                backgroundColor: "white",
                borderBottom: "none",
                color: "black",
                flex: 1,
              }}
            >
              <Menu.Item key="1">
                <Link to="/" style={{ color: "black", fontWeight: "500" }}>
                  Trang chủ
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link
                  to="/viec-lam"
                  style={{ color: "black", fontWeight: "500" }}
                >
                  Việc làm
                </Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link
                  to="/viec-lam-cua-toi"
                  style={{ color: "black", fontWeight: "500" }}
                >
                  Việc làm của tôi
                </Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link
                  to="/cong-ty"
                  style={{ color: "black", fontWeight: "500" }}
                >
                  Công ty
                </Link>
              </Menu.Item>
              <Menu.Item key="5">
                <Link
                  to="/cam-nang"
                  style={{ color: "black", fontWeight: "500" }}
                >
                  Cẩm nang nghề nghiệp
                </Link>
              </Menu.Item>
            </Menu>

            {/* Buttons */}
            <div
              className="button-group"
              style={{ display: "flex", gap: "10px" }}
            >
              <Button className="login-home">
                <Link to={"/login"}>Đăng nhập</Link>
              </Button>
              <Button className="register-home" type="primary">
                <Link to={"/register"}>Đăng ký</Link>
              </Button>
              <Button className="dang-tuyen-home" type="primary">
                Đăng tuyển việc làm
              </Button>
            </div>
          </div>
        </AntHeader>
      </Layout>
    </div>
  );
}

export default Header;
