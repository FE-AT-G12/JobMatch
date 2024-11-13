import React from 'react';
import { Row, Col, Typography, Divider } from 'antd';
import { MailOutlined, PhoneOutlined } from '@ant-design/icons';

const { Title, Text, Link, Paragraph } = Typography;

const Footer = () => {
  return (
    <div style={{ backgroundColor: '#fff', padding: '40px 0', marginTop: '150px' }}>
      {/* Top Section */}
      <Row justify="center" style={{ textAlign: 'center', marginBottom: '40px' }}>
        <Col span={16}>
          <Title level={3}>VÌ SAO CHỌN JOB MATCH?</Title>
          <Paragraph style={{ fontSize: '16px', lineHeight: '1.8' }}>
            Job Match là nền tảng tiên phong kết nối các freelancer đa độ tuổi với những công việc nhỏ, nhanh và linh hoạt.
            Với mục tiêu hiểu rằng nhu cầu tìm kiếm công việc tạm thời, ngắn hạn và đa dạng thực hiện đang ngày càng tăng,
            đặc biệt là trong các lĩnh vực như tạp vụ, phục vụ, lễ tân, và nhiều công việc khác không đòi hỏi chuyên môn cao.
            <br /><br />
            Nơi kết nối các freelancer với những công việc online linh hoạt, phù hợp với mọi độ tuổi và kỹ năng. Với việc hiểu
            rằng nhu cầu làm việc từ xa, đặc biệt trong các công việc như thiết kế slide, thuyết trình, quản lý dự án, nhập liệu,
            và nhiều công việc khác đang ngày càng gia tăng. Nền tảng này là giải pháp giúp bạn tìm kiếm cơ hội việc làm trực tuyến
            dễ dàng, đáp ứng nhu cầu làm việc tại nhà ở bất kỳ đâu.
            <br /><br />
            Với nền tảng này, các freelancer thuộc mọi độ tuổi – từ sinh viên đến người cao tuổi – đều có cơ hội tìm kiếm những công việc
            phù hợp với thời gian và kỹ năng của mình. Chỉ với vài thao tác đơn giản, bạn có thể kết nối ngay với các nhà tuyển dụng,
            các cửa hàng cần nhân lực nhanh chóng, dễ dàng tìm việc trong khu vực gần bạn và kiếm thu nhập linh hoạt.
          </Paragraph>
        </Col>
      </Row>

      <Divider />

      {/* Middle Section */}
      <Row gutter={[32, 32]} justify="center" style={{ padding: '20px 0' }}>
        <Col xs={24} sm={8} md={6} style={{ textAlign: 'center' }}>
          <img src="/logo.png" alt="Job Match Logo" style={{ width: '250px', marginBottom: '10px' }} />
          <br />
          <Text>Liên hệ</Text>
          <br />
          <Text><PhoneOutlined /> Hotline: (012) 3456 789</Text><br />
          <Text><MailOutlined /> Email: hotro@jobmatch</Text><br />
        </Col>

        <Col xs={24} sm={8} md={12}>
          <Row gutter={[16, 16]}>
            <Col span={6}>
              <Title level={5}>Về Job Match</Title>
              <Link href="#">Giới thiệu</Link><br />
              <Link href="#">Liên hệ</Link><br />
              <Link href="#">Tuyển dụng</Link><br />
            </Col>
            <Col span={6}>
              <Title level={5}>Về Job Match</Title>
              <Link href="#">Giới thiệu</Link><br />
              <Link href="#">Liên hệ</Link><br />
              <Link href="#">Tuyển dụng</Link><br />
            </Col>
            <Col span={6}>
              <Title level={5}>Về Job Match</Title>
              <Link href="#">Giới thiệu</Link><br />
              <Link href="#">Liên hệ</Link><br />
              <Link href="#">Tuyển dụng</Link><br />
            </Col>
            <Col span={6}>
              <Title level={5}>Về Job Match</Title>
              <Link href="#">Giới thiệu</Link><br />
              <Link href="#">Liên hệ</Link><br />
              <Link href="#">Tuyển dụng</Link><br />
            </Col>
          </Row>
        </Col>
      </Row>

      <Divider />

      {/* Bottom Section */}
      <Row justify="center" style={{ textAlign: 'center', padding: '20px 0' }}>
        <Col span={16}>
          <Text>Công ty Cổ phần Job Match Việt Nam</Text><br />
          <Text>Giấy phép đăng ký kinh doanh số: 123456</Text><br />
          <Text>Trụ sở: FPT</Text><br />
          <Text style={{ marginTop: '10px', display: 'block' }}>© 2024 Job Match. All rights reserved.</Text>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
