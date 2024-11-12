import { FormOutlined, LockOutlined, LogoutOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

export const headerItems = [
  {
    label: (
      <div className='header__item'>
        <Link to='/'>Trang chủ</Link>
      </div>
    ),
    key: '1',
  },
  {
    label: (
      <div className='header__item'>
        <Link to='/viec-lam'>Việc làm</Link>
      </div>
    ),
    key: '2',
  },
  {
    label: (
      <div className='header__item'>
        <Link to='/job/my-posted-job'>Việc làm của tôi</Link>
      </div>
    ),
    key: '3',
  },
  {
    label: (
      <div className='header__item'>
        <Link to='/company'>Công ty</Link>
      </div>
    ),
    key: '4',
  },
  {
    label: (
      <div className='header__item'>
        <Link to='/cam-nang'>Cẩm nang nghề nghiệp</Link>
      </div>
    ),
    key: '5',
  },
]

export const profileItems = (userId, handleLogout) => {
  return {
    items: [
      {
        label: (
          <Link to={`/profile/${userId}`}>
            <div style={{ fontSize: 16 }} className='header__dropdown-item'>
              Chỉnh sửa trang cá nhân
            </div>
          </Link>
        ),
        key: '2',
        icon: (
          <FormOutlined
            style={{ fontSize: 18, marginRight: 16, color: '#024caa' }}
          />
        ),
      },
      {
        label: (
          <Link to='/change-password'>
            <div style={{ fontSize: 16 }} className='header__dropdown-item'>
              Đổi mật khẩu
            </div>
          </Link>
        ),
        key: '3',
        icon: (
          <LockOutlined
            style={{ fontSize: 18, marginRight: 16, color: '#024caa' }}
          />
        ),
      },
      {
        label: (
          <div
            onClick={handleLogout}
            style={{ fontSize: 16, width: '100%' }}
            className='header__dropdown-item'
          >
            Đăng xuất
          </div>
        ),
        key: '4',
        icon: (
          <LogoutOutlined
            style={{ fontSize: 18, marginRight: 16, color: '#024caa' }}
          />
        ),
      },
    ],
  }
}
