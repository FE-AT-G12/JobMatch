import React, { useState } from 'react'
import {
  Layout,
  Menu,
} from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../redux/features/userSlice'
import './Header.scss'
import { headerItems } from './data'
import HeaderButtonGroup from './HeaderButtonGroup'

const { Header: AntHeader } = Layout

function Header() {
  const user = useSelector((state) => state.user.user)


  const dispatch = useDispatch()
  const nav = useNavigate()
  const [current, setCurrent] = useState('1')
  
  const handleLogout = () => {

    dispatch(logout())
    nav('/login')
  }

  const handleMenuClick = (e) => {
    setCurrent(e.key)
  }

  return (
    <div className='header'>
        <AntHeader
          style={{
            backgroundColor: 'white',
            padding: '0 40px',
            position: 'fixed',
            top: 0,
            zIndex: 1,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {/* Logo */}
          <Link style={{ width: '140px', marginRight: 16 }} to={'/'}>
            <img
              src='/public/logo.png'
              style={{ width: '100%', height: '100%' }}
              alt=''
            />
          </Link>

          {/* Menu */}
          <Menu
            mode='horizontal'
            selectedKeys={[current]}
            onClick={handleMenuClick}
            items={headerItems}
            className='header__menu'
          />

          {/* Buttons */}
          <HeaderButtonGroup user={user} handleLogout={handleLogout}/>
        </AntHeader>
    </div>
  )
}

export default Header
