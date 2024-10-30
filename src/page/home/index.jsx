import { useEffect, useState } from "react";
import "./index.scss";
import { SearchOutlined, EnvironmentOutlined } from "@ant-design/icons";
import Container from "../../components/container";
import { Card, Carousel, Col, Image, Pagination, Row } from "antd";
import axios from "axios";
import Whychose from "../../components/whychosewe";

function HomePage() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [job, setJob] = useState([]);
  const [companies, setCompanies] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 9;

  useEffect(() => {
    axios
      .get("http://localhost:3000/job")
      .then((response) => {
        setJob(response.data);
      })
      .catch((error) => {
        console.error("Error fetching job:", error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3000/companies")
      .then((response) => {
        setCompanies(response.data);
      })
      .catch((error) => {
        console.error("Error fetching job:", error);
      });
  }, []);

  const handleSearch = () => {
    console.log('Tìm kiếm với:', input1, input2)
  }

  const [selectedValue, setSelectedValue] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const options = ['TP Hồ Chí Minh', 'Hà Nội', 'Đà Nẵng']

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionClick = (value) => {
    setSelectedValue(value);
    setIsOpen(false);
  };
  const indexOfLastJob = currentPage * pageSize;
  const indexOfFirstJob = indexOfLastJob - pageSize;
  const currentJobs = job.slice(indexOfFirstJob, indexOfLastJob);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <div className='home'>
      <div className='search'>
        <h1 className='slogan'>
          Tìm việc nhanh, kiếm tiền nhanh hơn với Job Match
        </h1>
        <div className='advanced-search'>
          <div className='search-group'>
            <div className='combined-input'>
              <div className='input-with-icon'>
                <SearchOutlined className='input-icon' />
                <input
                  type='text'
                  placeholder='Vị trí tuyển dụng'
                  value={input1}
                  onChange={(e) => setInput1(e.target.value)}
                />
              </div>
              <div className='input-with-icon'>
                <EnvironmentOutlined className='input-icon' />
                <input
                  type='text'
                  placeholder='Tất cả địa điểm'
                  value={input2}
                  onChange={(e) => setInput2(e.target.value)}
                />
              </div>
              <button className='button' onClick={handleSearch}>
                Tìm kiếm
              </button>
            </div>
          </div>
        </div>
      </div>
      <Container>
        <div className='home-1'>
          <p className='title-1'>Việc làm tốt nhất</p>
          <div className='search-dropdown'>
            <div className='search-input' onClick={toggleDropdown}>
              <p style={{ fontSize: '12px', color: '#ccc', display: 'flex' }}>
                Lọc theo:
              </p>
              <input
                type='text'
                placeholder='Tìm kiếm'
                value={selectedValue}
                readOnly
              />
              <span className='dropdown-icon'>&#9662;</span>{' '}
            </div>

            {isOpen && (
              <ul className='dropdown-menu'>
                {options.map((option) => (
                  <li key={option} onClick={() => handleOptionClick(option)}>
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="card-job-container">
            {currentJobs.map((job) => (
              <div key={job.jobId} className="card-job">
                <Card
                  style={{
                    width: "350px",
                    height: "130px",
                    borderRadius: "10px",
                    overflow: "hidden",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <Row gutter={24}>
                    <Col span={8}>
                      <Image
                        src={job.companyLogo}
                        alt="Company Logo"
                        style={{ borderRadius: "8px" }}
                      />
                    </Col>
                    <Col span={16}>
                      <div className="job-infor">
                        <p className="job-title text_ellipsis">{job.title}</p>
                        <p className="job-city text_ellipsis">{job.cityjob}</p>
                        <div className="box-footer">
                          <div className="col-job-info">
                            <div className="salary">
                              <span className="text_ellipsis">
                                {job.payment.payRate}
                              </span>
                            </div>
                            <div className="address">
                              <span className="text_ellipsis">
                                {job.cityAddress}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Card>
              </div>
            ))}
          </div>
          <Pagination
            current={currentPage}
            pageSize={pageSize}
            total={job.length}
            onChange={handlePageChange}
            style={{
              textAlign: "center",
              marginTop: "20px",
              display: "flex",
              justifyContent: "center",
            }}
          />
        </div>
        <div className="home-2">
          <p className="title-2">Công ty hàng đầu</p>
          <Carousel autoplay dots={false} slidesToShow={3} slidesToScroll={1}>
            {companies.map((company) => (
              <div key={company.id} className="city-card">
                <Card
                  className="city-card-mini"
                  style={{
                    width: "350px",
                    height: "200px",
                    borderRadius: "10px",
                    overflow: "hidden",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    display: "flex", // Use Flexbox
                    flexDirection: "column", // Stack items vertically
                    justifyContent: "center", // Center items vertically
                    alignItems: "center", // Center items horizontally
                    textAlign: "center", // Center text
                  }}
                >
                  <Image
                    src={company.logo}
                    alt="Company Logo"
                    style={{
                      borderRadius: "8px",
                      width: "120px",
                      marginBottom: "10px",
                    }}
                  />
                  <div className="city-name">
                    <p style={{ margin: 0 }}>{company.name}</p>
                  </div>
                </Card>
              </div>
            ))}
          </Carousel>
        </div>
        <div className='home-3'>
          <p className='title-3'>Thị trường việc làm</p>
          <div className='image-home-3'>
            <Row gutter={24}>
              <Col span={8}>
                <Image src='https://th.bing.com/th/id/OIP.YJxJDchzoC4HJLsD4lnQLgHaEK?rs=1&pid=ImgDetMain' />
              </Col>
              <Col span={16}></Col>
            </Row>
          </div>
          <div className="detail-home-3"></div>
        </div>
        <div className="home-4">
          <p className="title-2">Top ngành nghề nổi bật</p>
          <div className="city-card">
            <Card
              className="city-card-mini"
              style={{
                width: "350px",
                height: "200px",
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                display: "flex", // Use Flexbox
                flexDirection: "column", // Stack items vertically
                justifyContent: "center", // Center items vertically
                alignItems: "center", // Center items horizontally
                textAlign: "center", // Center text
              }}
            >
              <Image
                src="https://www.topcv.vn/v4/image/welcome/top-categories/it-phan-mem.png?v=2"
                alt="Company Logo"
                style={{
                  borderRadius: "8px",
                  width: "120px",
                  marginBottom: "10px", // Add space below the image
                }}
                readOnly
              />
              <div className="city-name">
                <p style={{ margin: 0 }}>Nhân viên bán thời gian</p>{" "}
                {/* Remove default margin */}
              </div>
            </Card>
          </div>
        </div>
        <div className="whychosewe">
          <Whychose/>
        </div>
      </Container>
    </div>
  )
}

export default HomePage
