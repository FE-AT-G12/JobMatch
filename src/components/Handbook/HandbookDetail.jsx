import { Card, Collapse, Divider } from 'antd'
import React from 'react'
import './HandbookDetail.scss'
import { Link, useParams } from 'react-router-dom'
import { useGetMarketjobListQuery } from '../../features/handbook/Marketjob'
import { useGetHandbookListQuery } from '../../features/handbook/Handbook'
import {
  MailOutlined,
  MessageOutlined,
  QuestionOutlined,
  ReadOutlined,
  UserOutlined,
} from '@ant-design/icons'

const { Panel } = Collapse

function HandbookDetail() {
  const { id } = useParams()
  const {
    data: marketjobs = [],
    error: marketjobError,
    isLoading: isMarketjobLoading,
  } = useGetMarketjobListQuery()
  const {
    data: handbooks = [],
    error: handbookError,
    isLoading: isHandbookLoading,
  } = useGetHandbookListQuery()

  if (isMarketjobLoading || isHandbookLoading) return <div>Loading...</div>
  if (marketjobError) return <div>Error: {marketjobError.message}</div>
  if (handbookError) return <div>Error: {handbookError.message}</div>

  const selectedMarketjob = marketjobs.find((item) => item.id == id)
  const selectedHandbook = handbooks.find((item) => item.id == id)

  return (
    <div className='handbook-detail-all'>
      {selectedMarketjob ? (
        <div className='card-detail-handbook'>
          <Card style={{ width: '100%', background: 'rgba(0, 0, 0, 0)' }}>
            <h2>{selectedMarketjob.title}</h2>
            <p
              style={{ color: '#024CAA', fontSize: '20px', fontWeight: '500' }}
            >
              KIẾN THỨC CHUYÊN NGÀNH
            </p>
            <Collapse style={{ background: '#cccccc' }}>
              <Panel
                header='Mục lục'
                key='1'
                style={{ background: '#cccccc', fontWeight: 'bold' }}
              >
                <Card style={{ background: '#cccccc', fontSize: '18px' }}>
                  <p>I. {selectedMarketjob.small_title_1}</p>
                  <p>II. {selectedMarketjob.small_title_2}</p>
                  <p>III. {selectedMarketjob.small_title_3}</p>
                </Card>
              </Panel>
            </Collapse>
            <div className='describe-1'>
              <p>{selectedMarketjob.describe}</p>
            </div>
            <div className='describe-small-1'>
              <h3>{selectedMarketjob.small_title_1}</h3>
              <p>{selectedMarketjob.describe_1}</p>
            </div>
            <div className='img-describe'>
              <img
                src={selectedMarketjob.imgmarket || '/default-image.jpg'}
                alt='Marketjob'
                className='marketjob-image'
              />
            </div>
            <div className='describe-small-2'>
              <h3>{selectedMarketjob.small_title_2}</h3>
              <p>{selectedMarketjob.describe_2}</p>
            </div>
            <div className='describe-small-3'>
              <h3>{selectedMarketjob.small_title_3}</h3>
              <p>{selectedMarketjob.describe_3}</p>
            </div>
          </Card>
        </div>
      ) : selectedHandbook ? (
        <div className='card-detail-handbook'>
          <Card style={{ width: '100%', background: 'rgba(0, 0, 0, 0)' }}>
            <h2>{selectedHandbook.title}</h2>
            <p
              style={{ color: '#024CAA', fontSize: '20px', fontWeight: '500' }}
            >
              KIẾN THỨC CHUYÊN NGÀNH
            </p>
            <Collapse style={{ background: '#cccccc' }}>
              <Panel
                header='Mục lục'
                key='1'
                style={{ background: '#cccccc', fontWeight: 'bold' }}
              >
                <Card style={{ background: '#cccccc', fontSize: '18px' }}>
                  <p>I. {selectedHandbook.small_title_1}</p>
                  <p>II. {selectedHandbook.small_title_2}</p>
                  <p>III. {selectedHandbook.small_title_3}</p>
                </Card>
              </Panel>
            </Collapse>
            <div className='describe-1'>
              <p>{selectedHandbook.describe}</p>
            </div>
            <div className='describe-small-1'>
              <h3>{selectedHandbook.small_title_1}</h3>
              <p>{selectedHandbook.describe_1}</p>
            </div>
            <div className='img-describe'>
              <img
                src={selectedHandbook.imghandbook || '/default-image.jpg'}
                alt='Marketjob'
                className='marketjob-image'
              />
            </div>
            <div className='describe-small-2'>
              <h3>{selectedHandbook.small_title_2}</h3>
              <ul>
                {Array.isArray(selectedHandbook.describe_2) ? (
                  selectedHandbook.describe_2.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))
                ) : (
                  <p>{selectedHandbook.describe_2}</p>
                )}
              </ul>
            </div>
            <div className='describe-small-3'>
              <h3>{selectedHandbook.small_title_3}</h3>
              <ul>
                {Array.isArray(selectedHandbook.describe_3) ? (
                  selectedHandbook.describe_3.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))
                ) : (
                  <p>{selectedHandbook.describe_3}</p>
                )}
              </ul>
            </div>
          </Card>
        </div>
      ) : (
        <div>No data found</div>
      )}
      <div className='card-find-job'>
        <Card
          style={{ width: '100%', background: 'rgba(0, 0, 0, 0)' }}
          title='Tìm việc làm'
          headStyle={{ fontSize: '30px', fontWeight: 'bold', color: '#024CAA' }}
        >
          <Link to={`/`} className='link-item'>
            <UserOutlined /> <p>Sơ yếu lý lịch</p>
          </Link>
          <Divider
            style={{
              borderColor: '#ccc',
              width: '70%',
              margin: '10px auto',
            }}
          />
          <Link to={`/`} className='link-item'>
            <ReadOutlined /> <p>Việc làm của tôi</p>
          </Link>
          <Divider
            style={{
              borderColor: '#ccc',
              width: '70%',
              margin: '10px auto',
            }}
          />
          <Link to={`/`} className='link-item'>
            <MailOutlined /> <p>Cách viết mail đăng ký</p>
          </Link>
          <Divider
            style={{
              borderColor: '#ccc',
              width: '70%',
              margin: '10px auto',
            }}
          />
          <Link to={`/`} className='link-item'>
            <MessageOutlined /> <p>Giới thiệu bản thân</p>
          </Link>
          <Divider
            style={{
              borderColor: '#ccc',
              width: '70%',
              margin: '10px auto',
            }}
          />
          <Link to={`/`} className='link-item'>
            <QuestionOutlined /> <p>Câu hỏi phỏng vấn</p>
          </Link>
        </Card>
      </div>
    </div>
  )
}

export default HandbookDetail
